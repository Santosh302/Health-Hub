import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";
import { getUserData } from "../../redux/slices/authSlice";
import { cancelCourseBundle } from "../../redux/slices/razorPaySlice";

function Profile() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const userData = useSelector(state => state?.auth?.data);

    async function handleCancellation() {
        toast("Initiating cancellation");
        await dispatch(cancelCourseBundle());
        await dispatch(getUserData());
        toast.success("Cancellation complete");
        navigate("/");
    }

    return (
        <HomeLayout>
            <div className="d-flex min-vh-90 align-items-center justify-content-center">

                <div className="my-4 p-4 text-white w-75 bg-dark rounded shadow-lg">
                    <div className="d-flex justify-content-center mb-4">
                        <img
                            src={userData?.avatar?.secure_url}
                            className="w-25 rounded-circle border border-black"
                            alt="User Avatar"
                        />
                    </div>
                    <h3 className="text-center text-capitalize mb-4">
                        {userData?.fullName}
                    </h3>

                    <div className="row mb-4">
                        <div className="col-6"><strong>Email:</strong></div>
                        <div className="col-6">{userData?.email}</div>
                        <div className="col-6"><strong>Role:</strong></div>
                        <div className="col-6">{userData?.role}</div>
                        <div className="col-6"><strong>Subscription:</strong></div>
                        <div className="col-6">{userData?.subscription?.status === "active" ? "Active" : "Inactive"}</div>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                        <Link 
                            to="/changepassword"
                            className="btn btn-warning w-45"
                        >
                            Change Password
                        </Link>
                        <Link 
                            to="/user/editprofile"
                            className="btn btn-warning w-45"
                        >
                            Edit Profile
                        </Link>
                    </div>

                    {userData?.subscription?.status === "active" && (
                        <button onClick={handleCancellation} className="btn btn-danger w-100">
                            Cancel Subscription
                        </button>
                    )}
                </div>

            </div>
        </HomeLayout>
    );
}

export default Profile;

import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../layouts/HomeLayout";
import { getUserData, updateProfile } from "../../redux/slices/authSlice";

function EditProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [data, setData] = useState({
        fullName: "",
        previewImage: "",
        avatar: undefined,
        userId: useSelector((state) => state?.auth?.data?._id)
    });

    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0]; // this is the actual file
        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setData({
                    ...data,
                    previewImage: this.result,
                    avatar: uploadedImage
                });
            });
        }
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!data.fullName || !data.avatar) {
            toast.error("All fields are mandatory");
            return;
        }
        if (data.fullName.length < 5) {
            toast.error("Name cannot be less than 5 characters");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("avatar", data.avatar);
        await dispatch(updateProfile([data.userId, formData]));
        await dispatch(getUserData());

        navigate("/user/profile");
    }

    return (
        <HomeLayout>
            <div className="d-flex align-items-center justify-content-center min-vh-100">
                <form 
                    onSubmit={onFormSubmit}
                    className="d-flex flex-column justify-content-center gap-3 rounded p-4 text-white bg-dark w-100 shadow-lg"
                    style={{ maxWidth: "22rem" }}
                >
                    <h1 className="text-center text-2xl font-semibold">
                        Edit Profile
                    </h1>

                    <label className="cursor-pointer" htmlFor="image_uploads">
                        {
                            data.previewImage ? (
                                <img 
                                    src={data.previewImage}
                                    className="rounded-circle mx-auto"
                                    style={{ width: "7rem", height: "7rem" }}
                                />
                            ) : (
                                <BsPersonCircle className="rounded-circle mx-auto" style={{ width: "7rem", height: "7rem" }}/>
                            )
                        }
                    </label>
                    <input 
                        type="file"
                        onChange={handleImageUpload}
                        id="image_uploads"
                        name="image_uploads"
                        accept=".jpg, .png, .jpeg, .svg"
                        className="d-none"
                    />

                    <div className="d-flex flex-column gap-1">
                        <label className="font-weight-semibold" htmlFor="fullName">
                            Full name
                        </label>
                        <input 
                            required
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your name"
                            value={data.fullName}
                            className="form-control bg-transparent border"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-warning font-weight-bold w-100 py-2"
                    >
                        Update Profile
                    </button>
                    <Link to="/user/profile">
                        <p className="text-center text-warning cursor-pointer w-100">
                            Go back to profile
                        </p>
                    </Link>
                </form>
            </div>
        </HomeLayout>
    );
}

export default EditProfile;

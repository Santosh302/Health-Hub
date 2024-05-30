import { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import HomeLayout from "../../layouts/HomeLayout";
import { getUserData } from "../../redux/slices/authSlice";

function CheckoutSuccess() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch]);

    return (
        <HomeLayout>
            <div className="min-vh-100 d-flex align-items-center justify-content-center text-white">
                <div className="card text-center bg-dark text-white shadow-lg w-100" style={{ maxWidth: "22rem" }}>
                    <div className="card-header bg-success text-white font-weight-bold h4">
                        Payment Successful
                    </div>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <h2 className="h5 font-weight-semibold">
                            Welcome to Pro Bundle
                        </h2>
                        <p className="text-left">
                            Now enjoy all premium content.
                        </p>
                        <AiFillCheckCircle className="display-4 text-success mt-2" />
                    </div>
                    <Link to="/" className="btn btn-success font-weight-bold w-100 py-2">
                        Home
                    </Link>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CheckoutSuccess;

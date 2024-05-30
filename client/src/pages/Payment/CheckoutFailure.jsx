import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";

function CheckoutFailure() {
    return (
        <HomeLayout>
            <div className="min-vh-100 d-flex align-items-center justify-content-center text-white">
                <div className="card text-center bg-dark text-white shadow-lg w-100" style={{ maxWidth: "22rem" }}>
                    <div className="card-header bg-danger text-white font-weight-bold h4">
                        Payment Failed
                    </div>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <h2 className="h5 font-weight-semibold">
                            OOPS! Your payment failed
                        </h2>
                        <p className="text-left">
                            Please try again later.
                        </p>
                        <RxCrossCircled className="display-4 text-danger mt-2" />
                    </div>
                    <Link to="/" className="btn btn-danger font-weight-bold w-100 py-2">
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CheckoutFailure;

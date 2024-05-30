import { useEffect } from "react";
import toast from "react-hot-toast";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../layouts/HomeLayout";
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from "../../redux/slices/razorPaySlice";

function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);

    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: "",
    }

    async function handleSubscription(e) {
        e.preventDefault();
        if (!razorpayKey || !subscription_id) {
            toast.error("Something went wrong");
            return;
        }
        const options = {
            key: razorpayKey,
            subscription_id: subscription_id,
            name: "Courses .pvt ltd",
            description: "Subscription",
            theme: {
                color: '#F37254'
            },
            handler: async function (response) {
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;
                paymentDetails.razorpay_signature = response.razorpay_signature;
                toast.success("Payment successful");

                const res = await dispatch(verifyUserPayment(paymentDetails));
                console.log("res on checkout", res, paymentDetails);
                res?.payload ? navigate("/checkout/success") : navigate("/checkout/fail");
            }
        };

        const paymentOptions = new window.Razorpay(options);
        paymentOptions.open();
    }

    async function load() {
        await dispatch(getRazorPayId());
        await dispatch(purchaseCourseBundle());
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <HomeLayout>
            <form onSubmit={handleSubscription} className="min-vh-100 d-flex align-items-center justify-content-center text-white">
                <div className="card text-center bg-dark text-white shadow-lg w-100" style={{ maxWidth: "22rem" }}>
                    <div className="card-header bg-warning text-dark font-weight-bold h4">
                        Subscription Bundle
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            This purchase will allow you to access all the available courses on our platform for{" "}
                            <span className="font-weight-bold text-warning">1 yr duration</span>. All the existing and new launched courses will be available.
                        </p>
                        <p className="d-flex align-items-center justify-content-center gap-1 h3 text-warning my-4">
                            <BiRupee />
                            <span>499</span> only
                        </p>
                        <div className="text-muted">
                            <p>100% refund on cancellation</p>
                            <p>Terms and conditions apply *</p>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning font-weight-bold w-100 py-2">
                        Buy Now
                    </button>
                </div>
            </form>
        </HomeLayout>
    );
}

export default Checkout;

import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeLayout from '../../layouts/HomeLayout';

function CourseDescription() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { role, data } = useSelector((state) => state.auth);

    return (
        <HomeLayout>
            <div className="container py-5">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-md-6">
                        <img 
                            className="img-fluid"
                            alt="thumbnail"
                            src={state?.thumbnail?.secure_url}
                        />
                        <div className="mt-4">
                            <div className="mb-3">
                                <p className="font-weight-bold">
                                    Total Lectures: {state?.numberOfLectures}
                                </p>
                                <p className="font-weight-bold">
                                    Instructor: {state?.createdBy}
                                </p>
                            </div>
                            {role === "ADMIN" || data?.subscription?.status === 'active' ? (
                                <button
                                    onClick={() => navigate("/course/displaylectures", { state: { ...state } })}
                                    className="btn btn-warning btn-lg btn-block"
                                >
                                    Watch Lectures
                                </button>
                            ) : (
                                <button
                                    onClick={() => navigate("/checkout")}
                                    className="btn btn-warning btn-lg btn-block"
                                >
                                    Subscribe
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                        <h1 className="text-warning mb-4">{state?.title}</h1>
                        <p className="text-warning mb-2">Course Description:</p>
                        <p>{state?.description}</p>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseDescription;

import React from 'react';
import './Signin.css'
import { useNavigate } from "react-router-dom";
function Denied() {
  

  return (
    <>
    <div className="container">
      <main className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <h1 className="display-1">403</h1>
        <div className="lead">
          Access Denied
        </div>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-danger mt-3 TextBold"
        >
          Go Back
        </button>
      </main>
    </div>
    </>
  );
}

export default Denied;

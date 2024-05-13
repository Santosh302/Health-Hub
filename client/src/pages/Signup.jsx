import React from 'react'
import './Signin.css'
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import Signin from '../pages/Signin'
function Signup() {
    


  return (
    <>
      <div className="card container-fluid col-5 p-2 mt-5 background">
        <h4 className="TextAlign">Registration Page</h4>
        <form>

        <div >
        <label htmlFor="image_uploads" className="d-flex justify-content-center align-items-center cursor-pointer">
                       
                            <BsPersonCircle  className='ml-auto ' style={{ width: '70px', height: '60px'}} />
                        
                    </label>
    </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label TextBold">Name </label>
            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder='enter your Username...' />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label TextBold">Email Id </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your Email...' />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label TextBold">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='enter your Password...' />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary col-sm-12 p-2 ButtonText">Create Account</button>
          </div>
          <div className="mb-3">
            <p>Already have an account? {/*  <Link to="/Signin" className="cursor-pointer">Login</Link> */}
 </p> 
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup

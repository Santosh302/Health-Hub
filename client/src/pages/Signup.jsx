import React from 'react'
import './Signin.css'
import {useState} from 'react';
import toast from 'react-hot-toast';
import {useDispatch} from "react-redux";
import {createAccount} from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import {isEmail, isValidPassword } from "../helpers/regexMatcher"
import { BsPersonCircle } from "react-icons/bs";

import HomeLayout from '../layouts/HomeLayout'
function Signup() {
    const navigate = useNavigate();
    const dispatch =useDispatch();

    const [signupDetails, setSignupDetails] = useState({
      email:'',
      fullName:'',
      password:'',
      avatar:''
    });

    const [previewImage, setPreviewImage] = useState("");

    function handleUserInput(e) {
      const {name, value} = e.target;
      setSignupDetails({
        ...signupDetails,
        [name]:value
      })
    }

    function handleImage(e) {
      e.preventDefault();
      const uploadedImage = e.target.files[0];
      if(!uploadedImage) return;
      setSignupDetails({
        ...signupDetails,
        avatar:uploadedImage
      });
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function() {
        setPreviewImage(this.result);
      })
    }

    async function onFormSubmit(e) {
      e.preventDefault()
      console.log(signupDetails);
      if(!signupDetails.email || !signupDetails.password || !signupDetails.fullName){
        toast.error("Please fill all the Details");
        return;
      }
      if(signupDetails.fullName.length<5){
        toast.error("Name should be atleast of 5 character");
        return;
      }
      if(!isEmail(signupDetails.email)){
        toast.error("Invalid email provided");
        return;
      }
      if(!isValidPassword(signupDetails.password)){
        toast.error("Invalid password provided, password should 6-16 character long with atleast a number and special character");
        return;
      }

      const formData = new FormData();
      formData.append("fullName", signupDetails.fullName);
      formData.append("email", signupDetails.email);
      formData.append("password", signupDetails.password);
      formData.append("avatar", signupDetails.avatar);

      const response = await dispatch(createAccount(formData));
      console.log(response);
      if(response?.payload?.data){
        navigate("/");
      }
      setSignupDetails({
        email:'',
        fullName:'',
        password:'',
        avatar:'',
      });
      setPreviewImage("");

    }


  return (
    <HomeLayout>
      <div className="card container-fluid col-5 p-2 mt-5 background">
        <h4 className="TextAlign">Registration Page</h4>
        <form onSubmit={onFormSubmit} noValidate>

        <div >
        <label htmlFor="image_uploads" className="d-flex justify-content-center align-items-center cursor-pointer">
          { previewImage ? (
               <img className="rounded-circle mx-auto d-block" style={{ width: '150px', height: '150px' }} src={previewImage} alt="Preview Image" />
          ) :(
            <BsPersonCircle  className='ml-auto ' style={{ width: '70px', height: '60px'}} />
          ) }                                             
        </label>
        <input
                         onChange={handleImage} 
                        type="file" 
                        className="visually-hidden"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />
    </div>

          <div className="mb-3">
            <label htmlFor="fullName" className="form-label TextBold">Name </label>
            <input
            onChange={handleUserInput}
            value={signupDetails.fullName}
            required 
            type="text"
            name="fullName"
             className="form-control"
             id="fullName"
             aria-describedby="emailHelp"
            placeholder='enter your Username...' />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label TextBold">Email Id </label>
            <input
             onChange={handleUserInput}
             value={signupDetails.email}
             required
             type="text"
             name="email"
              className="form-control" 
              id="email" 
              aria-describedby="emailHelp" 
              placeholder='enter your Email...' />

            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label TextBold">Password</label>
            <input 
            required
            onChange={handleUserInput}
            value={signupDetails.password}
            type="password"
            name="password"
             className="form-control"
              id="password" 
              placeholder='enter your Password...' />
          </div>
          <div className="d-flex justify-content-center">
            <button  type="submit"  className="btn btn-primary col-sm-12 p-2 ButtonText">Create Account</button>
          </div>
          <div className="mb-3">
            <p>Already have an account? { <Link to="/signin" className="cursor-pointer">Login</Link> }
 </p> 
          </div>
        </form>
      </div>
    </HomeLayout>
  )
}

export default Signup

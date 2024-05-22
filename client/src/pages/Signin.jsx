import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { isEmail } from '../helpers/regexMatcher';
import HomeLayout from '../layouts/HomeLayout';
import { login } from "../redux/slices/authSlice";
import './Signin.css'

function Signin() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signinDetails, setSignupDetails]= useState({
    email:'',
    password:'',
  });

  function handleUserInput(e){
    const {name, value}= e.target;
    setSignupDetails({
      ...signinDetails,
      [name]:value
    })
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log(signinDetails);
    if(!signinDetails.email || !signinDetails.password){
      toast.error("Please fill all the details");
      return;
    }
    if(!isEmail(signinDetails.email)){
      toast.error("Invalid email provided");
      return;
    }

    const response = await dispatch(login(signinDetails));
    console.log(response);
    if(response?.payload?.data){
      navigate("/");
    }
    setSigninDetails({
      email:'',
      password:'',
    });
  }

  


  return (
    <HomeLayout>
    <div class=" card container-fluid  col-5 p-3 mt-5  background ">
        <h4 class="TextAlign">Login</h4>
      <form onSubmit= {onFormSubmit} onValidate >
  <div class="mb-3  ">
  <label for="email" class="form-label TextBold">Email Id </label>
    <input
    onChange={handleUserInput}
    value={signinDetails.email}
    required
     type="text"
     name="email"
      class="form-control"
       id="email"
        aria-describedby="emailHelp" 
        placeholder='enter your Email...' />

    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label TextBold">Password</label>
    <input 
    required
    onChange={handleUserInput}
    value={signinDetails.password}
    type="password" 
    name="password"
    class="form-control" 
    id="password" 
     placeholder='enter your Password...'/>

  </div>
  <div class="d-flex justify-content-center ">
    <button type="submit" class="btn btn-primary col-sm-12 p-2 ButtonText">Sign In</button>
</div>
<p className="text-center">
                            Donot have an account ? <Link to="/signup" className="cusror-pointer text-accent">Signup</Link>
                    </p>
</form>
    </div>
    </HomeLayout>
  )
}

export default Signin

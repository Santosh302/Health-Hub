import React from 'react'
import './Signin.css'
function Signin() {
  return (
    <>
    <div class=" card container-fluid  col-5 p-3 mt-5  background ">
        <h4 class="TextAlign">Login</h4>
      <form >
  <div class="mb-3  ">
  <label for="exampleInputEmail1" class="form-label TextBold">Email Id </label>

    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your Email...' />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label TextBold">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  placeholder='enter your Password...'/>
  </div>
  <div class="d-flex justify-content-center ">
    <button type="submit" class="btn btn-primary col-sm-12 p-2 ButtonText">Login</button>
</div>

</form>
    </div>
    </>
  )
}

export default Signin

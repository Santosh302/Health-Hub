import React from 'react'
import './Signin.css'
function Contact() {
  return (
    <>
         <div class=" card container-fluid  col-5 p-3 mt-5  background ">
        <h4 class="TextAlign">Contact Form</h4>
      <form >
      <div class="mb-3">
    <label for="name" class="form-label TextBold">Name</label>
    <input type="text" class="form-control" id="name"  placeholder='enter your Name...'/>
  </div>
  <div class="mb-3  ">
  <label for="exampleInputEmail1" class="form-label TextBold">Email Id </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your Email...' />
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label TextBold">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='enter your message here...'></textarea>
</div>

  <div class="d-flex justify-content-center ">
    <button type="submit" class="btn btn-primary col-sm-12 p-2 ButtonText">Submit</button>
</div>

</form>
    </div>
    </>
  )
}

export default Contact

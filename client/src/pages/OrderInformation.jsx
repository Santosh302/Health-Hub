import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import { Link } from 'react-router-dom'
function OrderInformation() {
  return (
    <HomeLayout>
    <div className=' bg-body-tertiary'>
    <nav className='ms-5 me-5'
      style={{
        '--bs-breadcrumb-divider': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`
      }}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item fw-light fs-5">
          <Link to="/" className='text-decoration-none text-muted'>Home</Link>
        </li>
        <li className="breadcrumb-item active text-dark fw-normal fs-5" aria-current="page">
          Order Information
        </li>
      </ol>
    </nav>
    <div class=" card container-fluid  col-5 p-3 mt-5  background ">
   <h4 class="TextAlign">ORDERS AND RETURNS</h4>
 <form >
 <div class="mb-3">
<label for="name" class="form-label TextBold">ORDER ID</label>
<input type="text" class="form-control" id="name"  />
<p>Enter the billing last name and email/ZIP as in the order billing address.</p>
</div>
<div class="mb-3">
<label for="name" class="form-label TextBold">Billing Last Name</label>
<input type="text" class="form-control" id="name"  />
</div>
<div class="mb-3">
      <label for="disabledSelect" class="form-label TextBold">Email Address</label>
      <select id="disabledSelect" class="form-select">
        <option>ZIP CODE</option>
      </select>
    </div>
<div class="mb-3  ">
<label for="exampleInputEmail1" class="form-label TextBold">Email Id </label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
</div>


<div class="d-flex justify-content-center ">
<button type="submit" class="btn btn-primary col-sm-12 p-2 ButtonText">CONTINUE</button>
</div>

</form>
</div>
</div>
</HomeLayout>
  )
}

export default OrderInformation

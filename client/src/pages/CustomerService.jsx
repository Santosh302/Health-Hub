import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import { Link } from 'react-router-dom'

function CustomerService() {
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
            Customer Service
          </li>
        </ol>
      </nav>
      <div className="card me-5 ms-5">
        <div className="card-body">
          <h4 style={{color:"#ffb400"}}>ORDER STATUS</h4>
          <br />
          <h5>PLEASE GIVE US A CALL OR DROP A LINE WITH YOUR ORDER ID</h5>
          <span> Call / WhatsApp : +91-7355651198 </span><br />
          <span>Email : support@healthhub.info</span><br /><br />
          <p>Call Timings: 10am to 6pm (Sunday closed)</p><br /><br />

          <h4 style={{color:"#ffb400"}}>GENERAL ENQUIRY / BUSINESS DEVELOPMENT</h4>
          <h5>PLEASE GIVE US A CALL OR DROP A LINE FOR ANY BUSINESS RELATED QUERIES.</h5>
          <span> Call / WhatsApp : +91-7355651198 </span><br />
          <span>Email : healthhubproject@gmail.com</span><br /><br />
        </div>
      </div>
    </div>
    </HomeLayout>
  )
}

export default CustomerService

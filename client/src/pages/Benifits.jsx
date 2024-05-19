import React from 'react'

function Benifits() {
  return (
    <div className='vh-100 bg-body-tertiary'>
    <nav className='ms-5 me-5'
      style={{
        '--bs-breadcrumb-divider': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`
      }}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item fw-light fs-5">
          <a href="#" className='text-decoration-none text-muted'>Home</a>
        </li>
        <li className="breadcrumb-item active text-dark fw-normal fs-5" aria-current="page">
          Benefits
        </li>
      </ol>
    </nav>
    <div className="card me-5 ms-5">
      <div className="card-body">
        <h2 style={{color:"#ffb400"}}>Why HEALTH HUB Products are better ...</h2><br /><br />
        <ul className=' fs-4'>
            <li>100 % Pure Panchgavya products only from Indian Breed / Desi Cows</li>
            <li>Licensed from Govt. Of India Drug Controller (AYUSH) & FSSAI</li>
            <li>ISO & GMP Certifications for quality management and manufacturing</li>
            <li>Used & Appreciated by thousands of Customers accross the globe.</li>
            <li>Biggest Range of Cow Products with easy accessibility (FREE Door Delivery*)</li>
            <li>Excellent Packaging, Promotion & Customer Support</li>
            <li>FREE Cow Therapy Health Consultation by Expert Vaidya (Doctors)</li>
            <li>Support to multi goshalas in their self sustainability (Present support to 20 plus goshalas)</li>
            <li>Project run by the team of highly qualified ISKCON Devotees & Cow Lovers</li>
            <li>Serving & Earning opportunities for Housewives, Retired, Professional, Students</li>
            <li>Profit goes for Gopal Seva & Gau-Seva</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Benifits

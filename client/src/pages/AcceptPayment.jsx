import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import { Link } from 'react-router-dom';

function AcceptPayment() {
  return (
    <HomeLayout>
      <div className='bg-body-tertiary'>
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
              Accept Payments
            </li>
          </ol>
        </nav>
        <div className="card me-5 ms-5">
          <div className="card-body">
            <h4>PAYMENT OPTIONS :</h4>
            <br />
            <p style={{ color: 'blue' }}>
              <span>By Google Pay: +91-9350145954 </span><br /><br />
              <span>By Bank Transfer through RTGS/ NEFT / Cheque/ DD / Cash Deposit: in favour of Healthhub FOUNDATION</span>
            </p>
            <br />
            <h4 className='text-success'>FOR DONATIONS</h4>
            <p style={{ color: "#ffb400" }}>(GOSEVA Donation: Go-Grass, Cow Care, Cow Adopt, Cow Preaching Programs, Cow Based Research & Development)</p>
            <span>Bank: CANARA BANK </span><br />
            <span>Account No.: 2544101016959 </span><br />
            <span>IFS Code: CNRB0002544</span><br />
            <span>Branch: Indrapuri, BHEL, Bhopal </span><br /><br />

            <h4 className='text-success'>FOR DONATIONS & SPONSORSHIP</h4>
            <p style={{ color: "#ffb400" }}>(Temple Details Seva/Saint Seva)</p>
            <span>Bank: IDBI BANK </span><br />
            <span>Account No.: 2544101016959 </span><br />
            <span>IFS Code: CNRB0002544</span><br />
            <span>Branch: Indrapuri, BHEL, Bhopal </span><br /><br />

            <h4 className='text-success'>FOR COW PRODUCTS PURCHASE</h4>
            <span>Bank: BANK OF INDIA </span><br />
            <span>Account No.: 2544101016959 </span><br />
            <span>IFS Code: CNRB0002544</span><br />
            <span>Branch: HEL Bhopal </span><br /><br />

            <p>
              <span style={{ color: 'blue' }}>By PayPal (For International Payments)</span>, use payment transfer direct link: <a href="https://paypal.me/DOCTORCOW?locale.x=en_GB" className='text-decoration-none'>paypal.me/DOCTORCOW</a><br /><br />
            </p>
            <p>* After Payment Transfer, please email us your payment transfer details at kalpavrikshaproject@gmail.com with the following details: Transaction id, Date, Transferred amount, Purpose of payment, Name, Address with Pincode, Mobile / Whatsapp No.</p>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default AcceptPayment;

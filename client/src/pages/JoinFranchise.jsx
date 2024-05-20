import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import { Link } from 'react-router-dom';

function JoinFranchise() {
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
         Apply for Franchise
        </li>
      </ol>
    </nav>
    <div className="card me-5 ms-5">
      <div className="card-body">
        <div className='text-center'>
            <h3 style={{color:"#ffb400"}}>JOIN FRANCHISE</h3>
            <h3 style={{color:"blue"}}>  TO DISTRIBUTE DOCTOR COW BRAND PRODUCTS </h3>
        </div>
        <table className="table table-bordered">
            <thead>
                <tr>
                <th className='text-success text-center' colSpan={5}>(Cow Panchgavya, Organic & Dairy Products) </th>
                </tr>
                <tr>
                    <th className='text-danger'>Franchise PLANS :</th>
                    <th style={{color:"#ffb400"}} >Online Gau-Sevak</th>
                    <th style={{color:"#ffb400"}}>Retailer</th>
                    <th style={{color:"#ffb400"}}>Distributor</th>
                    <th style={{color:"#ffb400"}}>Stockist cum C&F</th>
                </tr>
            </thead>
            <tbody >
              <tr>
                <td style={{color:"blue"}}>INFRASTRUCTURE REQUIRED</td>
                <td>PC/ Smart phone with Internet Connection</td>
                <td>Shop</td>
                <td>Exclusive Store & Office</td>
                <td>Exclusive Mega Store, Office, Sales Team, Godown, Delivery Vehicle</td>  
              </tr>
              <tr>
                <td style={{color:"blue"}}>INVESTMENT REQUIRED</td>
                <td>Nil (0 investment)</td>
                <td>10,000/-</td>
                <td>1 Lakh</td>
                <td>25 Lakhs</td>
              </tr>
             <tr>
                <td style={{color:"blue"}}>ATTRACTIVE PRODUCT DISCOUNT</td>
                <td> 5% + 5%</td>
                <td>Upto 20%</td>
                <td> Upto 50%</td>
                <td> 10%</td>
             </tr>
             <tr>
                <td style={{color:"blue"}}>PROMOTIONAL SUPPORT * CUSTOMER SUPPORT TRAINING</td>
                <td>Online</td>
                <td> Online & Offline</td>
                <td>Online, Offline & Customised</td>
                <td> Online</td>
             </tr>

            </tbody>
          </table>
          <h5><span style={{color:"#ffb400"}}>Most Suitable for Temples, Health Stores, Goshalas, NGOS, Businessmans, Students,
Housewives, Retired etc. to </span><span className='text-success'>SERVE & EARN</span></h5>
       <b style={{color:"#ffb400"}}>For more detailed information & guidance, please fillup Online Registration from below link :-</b><br />
       <b><a href="">https://forms.gle/aigWtDG6XJbhFoYDA</a></b><br /><br />

       <span style={{color:"blue"}} >OR</span><br /><br />
       <b style={{color:"#ffb400"}}>Messgae your Enquiry on WhatsApp No.+91-7355651198, Email : healthhubproject@gmail.com</b>
      </div>
    </div>
  </div>
  </HomeLayout>
  )
}

export default JoinFranchise

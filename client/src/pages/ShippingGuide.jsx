import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import { Link } from 'react-router-dom'

function ShippingGuide() {
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
            Shipping Guide
          </li>
        </ol>
      </nav>
      <div className="card me-5 ms-5">
        <div className="card-body">
          <h4 style={{color:"#ffb400"}}>SHIPPING & DELIVERY</h4>
          <br />
          <p>Shipping and Delivery is the charge for Internet order processing, packaging, transport and handling. Delivery times are not guaranteed, but as per our best approximation and will vary with specific requests. Shipments and deliveries only occur on weekdays. Shipping & Delivery time and charges are subject to change and will be determined at the time of order. </p><br />
          <p>Estimated delivery time assumes orders are placed before 12:00 noon (IST). Orders placed late on Friday or on Saturday & Sunday will not be processed until Monday. Additional charges may accrue on Priority and if multiple attempts are made for delivery.</p><br />
          <p>Shipping addresses in some regions may incur an additional charge for standard Shipping & Delivery. Orders will arrive in 7 to 9 business days when ordered before 12:00 noon (IST).</p><br />
          <table className="table table-bordered">
            <thead>
                <tr>
              <th></th>
              <th colSpan={2}>STANDARD SERVICE</th>
              <th colSpan={2}>PRIORITY SERVICE**</th>
              </tr> 
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td colSpan={2}>Package arrives 7 to 10 business days after processing if ordered by 12:00 noon (IST).</td>
                    <td colSpan={2}>Package arrives 3 to 5 business days after processing if ordered by 12:00 noon (IST).</td>
                </tr>
                <tr>
                    <td colSpan={4}>Total*</td>
                </tr>
                <tr>
                    <td>Up to 1 Kg</td>
                    <td colSpan={2}>Rs.70</td>
                    <td colSpan={2}>Rs.150</td>
                </tr>
                <tr>
                    <td>For every additional 500 Gms</td>
                    <td colSpan={2}>+Rs.35</td>
                    <td colSpan={2}>+Rs.75</td>
                </tr>
                <tr>
                    <td colSpan={4}>* Before tax and additional charges <br />
                    ** Priority and Cash on Delivery services are available on request and on select
products/regions <br />
*** For Out of India Orders, International Courier charges will be charged extra as per country, Custom & other documents, Packaging Type. Please send your product required list with Quantity and complete address at kalpavrikshaproject@gmail.com. Our sales team will be in touch with your shortly.
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </HomeLayout>
  )
}

export default ShippingGuide

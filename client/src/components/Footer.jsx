import React from 'react';
import './Footer.css'
import CATALOG from '../../public/CATALOG.pdf'
function Footer() {

    const newDate = new Date();
    const year = newDate.getFullYear();

  return (
    <div >
      <div className="row text-bg-white m-auto">
        <div className="col-lg-3 col-sm-6">
          <h4>CORPORATE</h4>
          <a href="" className="d-block mt-4 no-decoration text-muted">About Us</a><hr />
          <a href="" className="d-block no-decoration text-muted">Support for Cow Care</a><hr />
          <a href="{CATALOG}" target= "_blank" className="d-block no-decoration text-muted">Download Catalog</a><hr />
          <a href="" className="d-block no-decoration text-muted">Franchise Location</a><hr />
          <a href="" className="d-block no-decoration text-muted">Contact Us</a>

        </div>
        <div className="col-lg-3 col-sm-6">
        <h4>YOUR LINKS</h4>
          <a href="" className="d-block mt-4 no-decoration text-muted">Sitemap</a><hr />
          <a href="" className="d-block no-decoration text-muted">Download Price list</a><hr />
          <a href="" className="d-block no-decoration text-muted">International Rates</a><hr />
          <a href="" className="d-block no-decoration text-muted">Shippinng Guide</a><hr />
          <a href="" className="d-block no-decoration text-muted">Blogs & News</a>
        </div>
        <div className="col-lg-3 col-sm-6">
          
          <h4>SUPPORT</h4>
          <a href="" className="d-block mt-4 no-decoration text-muted">Track You Order</a><hr />
          <a href="" className="d-block no-decoration text-muted">FAQ</a><hr />
          <a href="" className="d-block no-decoration text-muted">Orders and Returns</a><hr />
          <a href="" className="d-block no-decoration text-muted">Live Chat</a><hr />
          <a href="" className="d-block no-decoration text-muted">Customer Services</a>
        </div>
        <div className="col-lg-3 col-sm-6">
        <h4>HEALTHHUB FOUNDATION</h4>
          <a href="" className="d-block mt-4 no-decoration text-muted">B.Apsara Complex, Indrapuri UP, INDIA </a><hr />
          <a href="" className="d-block no-decoration text-muted">Phone : +91 7355651198</a><hr />
          <a href="" className="d-block no-decoration text-muted">WhatsApp : +91 7355651198</a><hr />
          <a href="" className="d-block no-decoration text-muted">Email : healthhub@gmail.com</a><hr />
          <a href="" className="d-block no-decoration text-muted">www.healthhub.info</a>
        </div>
      </div>
      <div className="text-center bg-secondary p-3 mt-4">
        <h4> Copyright {year} | All rights reserved </h4>
      </div>
    </div>
  );
}

export default Footer;

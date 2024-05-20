import React from 'react';
import './Footer.css';
import HomeLayout from '../layouts/HomeLayout'
import { Link } from 'react-router-dom';
import { FaSquareFacebook, FaSquareInstagram, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import CATALOG from '../../public/CATALOG.pdf';
import PriceList from '../../public/PriceList.pdf';

function Footer() {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <div>
      <div className="row text-bg-white mt-4">
        
        <div className="col-lg-3 col-sm-6">
          <h4>CORPORATE</h4>
          <Link to="/about" className="d-block mt-4 no-decoration text-muted">About Us</Link>

          <hr />
          <a href="#" className="d-block no-decoration text-muted">Support for Cow Care</a>
          <hr />
          <a href={CATALOG} target="_blank" className="d-block no-decoration text-muted">Download Catalog</a>
          <hr />
          <a href="#" className="d-block no-decoration text-muted">Franchise Location</a>
          <hr />
          <a href="#" className="d-block no-decoration text-muted">Contact Us</a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h4>YOUR LINKS</h4>
          <a href="#" className="d-block mt-4 no-decoration text-muted">Sitemap</a>
          <hr />
          <a href={PriceList} target="_blank" className="d-block no-decoration text-muted">Download Price List</a>
          <hr />
          <a href="#" className="d-block no-decoration text-muted">International Rates</a>
          <hr />
          <a href="#" className="d-block no-decoration text-muted">Shipping Guide</a>
          <hr />
          <a href="#" className="d-block no-decoration text-muted">Blogs & News</a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h4>SUPPORT</h4>
          <a href="#" className="d-block mt-4 no-decoration text-muted">Track Your Order</a>
          <hr />
          <a href="#" className="d-block no-decoration text-muted">FAQ</a>
          <hr />
          <a href="#" className="d-block no-decoration text-muted">Orders and Returns</a>
          <hr />
          <a href="#" className="d-block no-decoration text-muted">Live Chat</a>
          <hr />
          <a href="#" className="d-block no-decoration text-muted">Customer Services</a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h4>HEALTHHUB FOUNDATION</h4>
          <p className="d-block mt-4 no-decoration text-muted">B.Apsara Complex, Indrapuri UP, INDIA</p>
          <hr />
          <p className="d-block no-decoration text-muted">Phone: +91 7355651198</p>
          <hr />
          <p className="d-block no-decoration text-muted">WhatsApp: +91 7355651198</p>
          <hr />
          <a href="mailto:healthhub@gmail.com" className="d-block no-decoration text-muted">Email: healthhub@gmail.com</a>
          <hr />
          <a href="https://www.healthhub.info" target="_blank" rel="noopener noreferrer" className="d-block no-decoration text-muted">www.healthhub.info</a>
        </div>
      </div>
      <div className="bg-secondary text-white p-3 mt-4 d-flex justify-content-around">
        <div>
          <h5>Copyright {year} | All rights reserved</h5>
        </div>
        <div className='fs-4'>
          <FaSquareFacebook /> <FaSquareInstagram /> <FaLinkedin /> <FaSquareTwitter />
        </div>
      </div>
    </div>
  );
}

export default Footer;

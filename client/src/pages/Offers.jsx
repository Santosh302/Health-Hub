import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import { Link } from 'react-router-dom';

function Offers() {
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
          Offers
        </li>
      </ol>
    </nav>
    <div className="card me-5 ms-5">
      <div className="card-body">
        <h2 >OFFERS</h2><br /><br />
        <ul className=' fs-4 fw-bold'>
            <li><a href="" className='text-decoration-none'><span className='text-success'>ORGANIC FAMILY PACK </span ><span style={{color:"#ffb400"}}>(18 IN 1 with OFF : 131/-)</span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>HEALTH PACK </span ><span style={{color:"#ffb400"}}>(4 IN 1  with OFF - 110/-)</span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>COMBO GHRIT PACK  </span ><span style={{color:"#ffb400"}}>(BUY 5 & GET 1 FREE)</span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>COMBO MILK POWDER </span ><span style={{color:"#ffb400"}}>(5 IN 1 with OFF - 150/-)</span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>COMBO 3 IN 1 SOAPS </span ><span style={{color:"#ffb400"}}>(BUY 12 & GET 1 FREE) </span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>COMBO MOSQUITO COIL </span ><span style={{color:"#ffb400"}}>(BUY 12 & GET 1 FREE)</span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>COMBO NASAL DROP </span ><span style={{color:"#ffb400"}}>(BUY 12 & GET 1 FREE)</span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>COMBO FAT LOSS TONIC  </span ><span style={{color:"#ffb400"}}>(BUY 12 & GET 1 FREE)</span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>COMBO GAU - JAL ARK </span ><span style={{color:"#ffb400"}}>(BUY 12 & GET 1 FREE)</span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>COMBO PANCHGVAYA SOAP PACK </span ><span style={{color:"#ffb400"}}>(BUY 12 & GET 1 FREE)</span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>COMBO GHEE SOAP PACK </span ><span style={{color:"#ffb400"}}> (BUY 12 &  GET 1 FREE)</span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>COMBO PUJA PACK </span ><span style={{color:"#ffb400"}}>(BUY 10 & GET 1 FREE)</span></a></li>
            <li><a href="" className='text-decoration-none'><span className='text-success'>COMBO 2 IN 1 HOME CARE </span ><span style={{color:"#ffb400"}}>(BUY 12 & GET 1 FREE)</span></a></li>
       </ul>
      </div>
    </div>
  </div>
  </HomeLayout>
  )
}

export default Offers

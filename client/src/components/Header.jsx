import React from 'react';
import { Link } from 'react-router-dom';
import { GoPersonFill, } from 'react-icons/go';
import { IoMdSearch ,IoMdMail, IoIosArrowDropdown } from "react-icons/io";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaSignInAlt } from "react-icons/fa";
import { BiLogoWhatsapp, BiRupee } from "react-icons/bi";
import logo from '../../public/logo.jpeg';
import './Header.css';

function Header() {
  return (
    <div>        
        {/* first section of navbar */}
      <nav className="navbar navbar-expand-lg bg-success">
        
        <div className="container-fluid">
            <ul class="nav  ">
                <li class="nav-item  nav-tabs fw-bold">
                     <Link class="nav-link active" aria-current="page" to="/s 7" style={{ color: '#ffb400' }}>DOCTOR COW STORE</Link>
                     </li>
  <li className='nav-item me-5 pe-5 fw-bold'>
    <a className="nav-link text-white  header-text-hover" href="#" > GAU SEVA DONATION</a>
  </li>
</ul>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto   ">
                <li className="nav-item active  " >
                    <Link className="nav-link " to="/acceptPayment" style={{ color: '#ffb400' }}><GoPersonFill  className='mb-1'/> ACCEPT PAYMENT </Link>
                </li>
              <li className="nav-item ">
              <Link className="nav-link text-white  header-text-hover" to="*" ><CiHeart style={{fontSize:'21'}}/> WISHLIST </Link>
              </li>
              <li className="nav-item   ">
              <Link className="nav-link text-white  header-text-hover" to="/signup" ><GoPersonFill  className='mb-1'/>SIGN UP</Link>
              </li>  
                  <li className='nav-item me-5 pe-5'>
                  <Link className="nav-link text-white  header-text-hover" to="/signin" >{<FaSignInAlt />} SIGN IN </Link>
                  </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Second section of navbar */}
      <div class="row mt-3 d-flex justify-content-around">
        <div className='col' >
            <img src={logo} alt="" style={{ height: '70px', width:'70px', marginLeft:'100px'}} />
        </div>
        {/* second-col */}
        <div className='col mb-3'>
    <div class="input-group mt-1 ">
        <input type="text" class="form-control" placeholder="Search entire store here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
         <button class="btn btn-outline-secondary bg-success text-white " type="button" ><IoMdSearch /></button>
    </div>
    <div className='d-flex justify-content-between'>
    <span className='text-success'> <BiLogoWhatsapp /> +91-7355651198</span>
    <span className='text-success'><IoMdMail /> supporth@healthhub.info</span>
    </div>
    
        </div>
        {/* third-col */}
        <div class="col d-flex " style={{marginLeft:'200px'}} >
        <div >
        <button type="button" class="btn btn-success rounded-circle position-relative" style={{height:'75px', width:'75px'}}>
    <CiShoppingCart style={{height:'43px', width:'43px'}}/>
  <span class="position-absolute top-40 start-40 translate-middle badge rounded-pill bg-secondary" >
    0
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
        </div>
        <div className="fw-bold text-success" style={{marginLeft:'20px'}}>
            <div>
                <span >MY CART</span>
            </div>
            <div>
            <span><BiRupee /> 0.00</span>
            </div>
        </div>

        </div>

    </div>

    {/* Third Sectoin of navbar */}
    <div className=' '>
    <nav className="navbar navbar-expand-lg bg-success  ">
        <div className="container-fluid  ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center" >
              <li className="nav-item dropdown" style={{backgroundColor:"#b1d62a"}}>
                <Link
                  className="nav-link text-white fw-bold " 
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  DESI COW PRODUCTS  <IoIosArrowDropdown className='fs-4'/>
                </Link>
                <ul className="dropdown-menu ">
                  <li>
                    <a className="dropdown-item " href="#">
                      Action
                    </a>
                  </li>
                  <li>
                  <hr className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white fw-bold header-text-hover" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold header-text-hover" to="/about">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/benifits" className="nav-link text-white fw-bold header-text-hover" aria-disabled="true">
                  BENEFITS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/offers" className="nav-link text-white fw-bold header-text-hover" aria-disabled="true">
                  OFFERS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/joinFranchise" className="nav-link text-white fw-bold header-text-hover" aria-disabled="true">
                  JOIN FRANCHISE
                </Link>
              </li>
              <li className="nav-item">
                <Link  to ="/diseaseVsProducts"className="nav-link text-white fw-bold header-text-hover" aria-disabled="true">
                  DISEASE VS PRODUCT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>

    </div>
  );
}

export default Header;

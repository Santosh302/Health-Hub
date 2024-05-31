import React from 'react';
import { GoPersonFill } from 'react-icons/go';
import { IoMdSearch, IoMdMail } from "react-icons/io";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaSignInAlt } from "react-icons/fa";
import { BiLogoWhatsapp, BiRupee } from "react-icons/bi";
import logo from '../../public/logo.jpeg';
import './Header.css';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  async function onLogout(e) {
    e.preventDefault();

    const response = await dispatch(logout());
    if (response?.payload?.data) {
      navigate("/");
    }
  }

  return (
    <div>
      {/* First section of navbar */}
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item nav-tabs fw-bold">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: '#ffb400' }}>DOCTOR COW STORE</Link>
            </li>
            <li className='nav-item me-5 pe-5 fw-bold'>
              <a className="nav-link text-white header-text-hover" href="#">GAU SEVA DONATION</a>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/acceptPayment" style={{ color: '#ffb400' }}><GoPersonFill className='mb-1' /> ACCEPT PAYMENT </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white header-text-hover" to="#"><CiHeart style={{ fontSize: '21px' }} /> WISHLIST </Link>
              </li>

              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white header-text-hover" to="/signup"><GoPersonFill className='mb-1' /> SIGN UP</Link>
                  </li>
                  <li className='nav-item me-5 pe-5'>
                    <Link className="nav-link text-white header-text-hover" to="/signin"><FaSignInAlt /> SIGN IN</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white header-text-hover" to="/user/profile"><GoPersonFill className='mb-1' /> PROFILE</Link>
                  </li>
                  <li className='nav-item me-5 pe-5'>
                    <Link className="nav-link text-white header-text-hover" onClick={onLogout}><FaSignInAlt /> LOGOUT</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Second section of navbar */}
      <div className="row mt-3 d-flex justify-content-around">
        <div className='col'>
          <img src={logo} alt="" style={{ height: '70px', width: '70px', marginLeft: '100px' }} />
        </div>
        <div className='col mb-3'>
          <div className="input-group mt-1">
            <input type="text" className="form-control" placeholder="Search entire store here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary bg-success text-white" type="button"><IoMdSearch /></button>
          </div>
          <div className='d-flex justify-content-between'>
            <span className='text-success'><BiLogoWhatsapp /> +91-7355651198</span>
            <span className='text-success'><IoMdMail /> support@healthhub.info</span>
          </div>
        </div>
        <div className="col d-flex" style={{ marginLeft: '200px' }}>
          <div>
            <button type="button" className="btn btn-success rounded-circle position-relative" style={{ height: '75px', width: '75px' }}>
              <CiShoppingCart style={{ height: '43px', width: '43px' }} />
              <span className="position-absolute top-40 start-40 translate-middle badge rounded-pill bg-secondary">
                0
              </span>
            </button>
          </div>
          <div className="fw-bold text-success" style={{ marginLeft: '20px' }}>
            <div>
              <span>MY CART</span>
            </div>
            <div>
              <span><BiRupee /> 0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Third section of navbar */}
      <div>
        <nav className="navbar navbar-expand-lg bg-success">
          <div className="container-fluid">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                <li className="nav-item" style={{ backgroundColor: "#b1d62a" }}>
                  <Link
                    className="nav-link text-white fw-bold"
                    to="/products"
                    role="button"
                    aria-expanded="true"
                  >
                    DESI COW PRODUCTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white fw-bold header-text-hover" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold header-text-hover" to="/about">ABOUT US</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold header-text-hover" to="/benifits">BENEFITS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold header-text-hover" to="/offers">OFFERS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold header-text-hover" to="/joinFranchise">JOIN FRANCHISE</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold header-text-hover" to="/diseaseVsProducts">DISEASE VS PRODUCT</Link>
                </li>
                {isLoggedIn && role === "ADMIN" && (
                            <li className='nav-item'>
                                <Link  className="nav-link text-white fw-bold header-text-hover" to="/admin/dashboard">Admin Dashboard</Link>
                            </li>
                        )

                        }
                        {isLoggedIn && role === "ADMIN" && (
                            <li className='nav-item'>
                                <Link className="nav-link text-white fw-bold header-text-hover" to="/product/create">Create Product</Link>
                            </li>
                        )

                        }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

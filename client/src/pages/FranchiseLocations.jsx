import React, { useState } from 'react';
import HomeLayout from '../layouts/HomeLayout'
import { Link } from 'react-router-dom';
function FranchiseLocations() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  const hoverStyle = {
    color: '#ffb400',
  };

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
          <li className="breadcrumb-item fw-light fs-5"><Link to="/" className='text-decoration-none text-muted'>Home</Link></li>
          <li className="breadcrumb-item active text-dark fw-normal fs-5" aria-current="page">Franchise Locations</li>
        </ol>
      </nav>
      <div className="card me-5 ms-5">
        <div className="card-body">
          <h2>FRANCHISE LOCATIONS</h2>
          <h4>Health Hub - FRANCHISE Network across PAN India:</h4>
          <b>DELHI: </b><span>East of Kailash, C.R. Park, Hauz Khas, Gautam Nagar, Janakpuri, Dilshad Garden, Geeta Colony, Mahipalpur, Ashok Vihar</span><br />
          <b>NCR: </b><span>Gurgaon, Noida, Ghaziabad, Faridabad</span><br />
          <b>UP: </b><span>Lucknow, Kanpur, Varanasi, Agra</span><br />
          <b>HIMACHAL PRADESH: </b><span>Shimla, Manali</span><br />
          <b>JHARKHAND: </b><span>Ranchi, Jamshedpur</span><br />
          <b>PUNJAB: </b><span>Amritsar, Ludhiana</span><br />
          <b>BIHAR: </b><span>Patna, Gaya</span><br />
          <b>MADHYA PRADESH: </b><span>Bhopal, Indore</span><br />
          <b>GUJARAT: </b><span>Ahmedabad, Surat</span><br />
          <b>MAHARASHTRA: </b><span>Mumbai, Pune</span><br />
          <b>WEST BENGAL: </b><span>Kolkata, Siliguri</span><br />
          <b>ODISHA: </b><span>Bhubaneswar, Cuttack</span><br />
          <b>GOA: </b><span>Panaji, Margao</span><br />
          <b>ANDHRA PRADESH: </b><span>Vijayawada, Visakhapatnam</span><br />
          <b>TAMIL NADU: </b><span>Chennai, Coimbatore</span><br />
          <b>KARNATAKA: </b><span>Bengaluru, Mysore</span><br />

          <h5>HEALTH HUB Products available at ISKCON Temples</h5><br /><br />

          <p>DOCTOR COW Products available at ONLINE STORES:</p>
          <a
            href="#"
            style={hoveredLink === 'amazon' ? { ...linkStyle, ...hoverStyle } : linkStyle}
            onMouseEnter={() => handleMouseEnter('amazon')}
            onMouseLeave={handleMouseLeave}
          >
            Amazon.com
          </a>
          {' ! '}
          <a
            href="#"
            style={hoveredLink === 'flipkart' ? { ...linkStyle, ...hoverStyle } : linkStyle}
            onMouseEnter={() => handleMouseEnter('flipkart')}
            onMouseLeave={handleMouseLeave}
          >
            Flipkart.com
          </a>
        </div>
      </div>
    </div>
    </HomeLayout>
  );
}

export default FranchiseLocations;

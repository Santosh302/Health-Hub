import React from 'react';

function Sitemap() {
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
            Sitemap
          </li>
        </ol>
      </nav>
      <div className="card me-5 ms-5">
        <div className="card-body">
          <h5>SITEMAP</h5>
          <br />
          <p>sitemap</p>
        </div>
      </div>
    </div>
  );
}

export default Sitemap;

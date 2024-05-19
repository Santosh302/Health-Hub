import React from 'react';

function InternationalRates() {
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
            International Rate
          </li>
        </ol>
      </nav>
      <div className="card me-5 ms-5">
        <div className="card-body">
          <h4>INTERNATIONAL RATE</h4>
          <br />
          <table className="table table-bordered">
            <thead>
              <tr >
                <th >Country</th>
                <th>3 Digit Code</th>
                <th colSpan="3" style={{textAlign:"center"}}>Shipping Rate (Per Kg)</th>
              </tr>
              <tr>
                <th rowSpan="2"></th>
                <th rowSpan="2"></th>
                <th>Upto 1 Kg</th>
                <th>1-5 Kg</th>
                <th>5 Kg Onwards</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Canada</td>
                <td>CAN</td>
                <td>2550</td>
                <td>1100</td>
                <td>900</td>
              </tr>
              <tr>
                <td>Egypt</td>
                <td>EGY</td>
                <td>1750</td>
                <td>600</td>
                <td>550</td>
              </tr>
              <tr>
                <td>Egypt</td>
                <td>EGY</td>
                <td>1750</td>
                <td>600</td>
                <td>550</td>
              </tr>
              <tr>
                <td>Egypt</td>
                <td>EGY</td>
                <td>1750</td>
                <td>600</td>
                <td>550</td>
              </tr>
              <tr>
                <td>Egypt</td>
                <td>EGY</td>
                <td>1750</td>
                <td>600</td>
                <td>550</td>
              </tr>
              <tr>
                <td>Egypt</td>
                <td>EGY</td>
                <td>1750</td>
                <td>600</td>
                <td>550</td>
              </tr>
              <tr>
                <td>Egypt</td>
                <td>EGY</td>
                <td>1750</td>
                <td>600</td>
                <td>550</td>
              </tr>
              <tr>
                <td>Egypt</td>
                <td>EGY</td>
                <td>1750</td>
                <td>600</td>
                <td>550</td>
              </tr>
              {/* Add more rows for each country */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InternationalRates;

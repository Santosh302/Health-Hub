import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { nanoid } from "nanoid";
/* import { useNavigate } from "react-router-dom"; */
import { FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Address = ({ handleAddress }) => {
  /* const navigate = useNavigate(); */

  const [allAddress, setAllAddress] = useState([{
    id: nanoid(4),
    name: "Santosh",
    phone: "7355651198",
    address: "Saripur, Veerampur, Sant Ravidas Nagar, Bhadohi",
  }]);

 /*  const handleClick = () => {
    navigate("/checkout/payment");
  }; */

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
          Select Delivery Address
          </li>
        </ol>
      </nav>
    
    <Container>
      <Row className="my-3">
        <Col>
          <h6></h6>
        </Col>
        <Col className="text-right">
          <Button variant="outline-success">+ Add new address</Button>
        </Col>
      </Row>
      <Row>
        {allAddress.map((address) => (
          <Col md={6} key={address.id} className="mb-3">
            <Card className="p-3" onClick={() => handleAddress(address)} style={{ backgroundColor: "skyblue" }}>
              <Card.Body>
                <Row className="align-items-center mb-2">
                  <Col>
                    <Card.Title>{address.name}</Card.Title>
                  </Col>
                  <Col className="text-right">
                    <FaCheckCircle style={{ color: "hotpink" }} />
                  </Col>
                </Row>
                <Card.Text>{address.address}</Card.Text>
                <Button variant="outline-primary" className="mb-2">EDIT</Button>
                <Button variant="primary" /* onClick={handleClick}  */className="w-100" style={{ backgroundColor: " #ffb400" }}>
                  Deliver to this address
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


function LandingPage() {
    const navigate = useNavigate();
    const handleAdminClick = () => {
        navigate('/dash');
      };
    
      const handleOnboardClick = () => {
        navigate('/facility');
      };
    
      const handleUserClick = () => {
        navigate('/productionform');
      };

  return (
    <div>
     

      <Container  className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={2} className="mb-4 mx-4" onClick={handleAdminClick}>
            <div className=" rounded-4 shadow-lg overflow-hidden mt-5 rectangle bg-ey-primary">
              <h2>Admin</h2>
            </div>
          </Col>

          <Col md={2} className="mb-4 mx-4" onClick={handleOnboardClick}>
            <div className="rounded-4 shadow-lg overflow-hidden mt-5 rectangle bg-ey-primary">
              <h2>Onboard</h2>
            </div>
          </Col>

          <Col md={2} className="mb-4 mx-4" onClick={handleUserClick}>
            <div className="rounded-4 shadow-lg overflow-hidden mt-5 rectangle bg-ey-primary">
              <h2>User</h2>
            </div>
          </Col>
        </Row>
      </Container>

      <style >{`
        .rectangle {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: "black";
          text-align: center;
          cursor:pointer;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;

import Layout from "../layout/Layout";
import { Row, Col, Container } from "react-bootstrap";
const Home = () => {
  
  return (
    <div>
      <Container fluid className="vh-100 d-flex flex-column">
        <Row className="d-flex vh-100">
          <Col xs={1}>
            <div className="sidebar border d-flex vh-100">sidebar</div>
          </Col>
        
          <Col xs={11}>
            <Layout className="inbox border d-flex vh-100"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

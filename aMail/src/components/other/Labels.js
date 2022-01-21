import { BsFillTagFill } from "react-icons/bs";
import { Row, Col, Container } from "react-bootstrap";
const Labels = () => {
  return (
    <div>
      <h6>Labels</h6>
      <Container fluid>
        <Row className="mb-2">
          <Col className="mr-2 border">
            <BsFillTagFill />
            Family
          </Col>
          <Col className="mr-2 border">
            <BsFillTagFill />
            Children
          </Col>
          <Col className="border">
            <BsFillTagFill />
            Work
          </Col>
        </Row>
        <Row className="mb-2">
          <Col className="mr-2 border">
            <BsFillTagFill />
            Home
          </Col>
          <Col className="mr-2 border">
            <BsFillTagFill />
            Film
          </Col>
          <Col className="border">
            <BsFillTagFill />
            Music
          </Col>
        </Row>
        <Row>
          <Col className="mr-2 border">
            <BsFillTagFill />
            Holidays
          </Col>
          <Col className="border">
            <BsFillTagFill />
            Photography
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Labels;

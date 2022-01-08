
import { Row, Col, Container, Form } from 'react-bootstrap';
import './Mail.css';
const Mail = (props) => {
  return (
    <div>
      <Container fluid='lg' >
        <Row fluid className='mail'>
          <Col  className='mail-col'>
          <Form.Check aria-label="option 1" />
          </Col>
          <Col  className='mail-col'>
            <h6>{props.sentBy}</h6>
          </Col>
          <Col  className='mail-col'>
            <h6>{props.category}</h6>
          </Col>
          <Col md={6} className='mail-col'>
            <h6>{props.subject}t</h6>
          </Col>
          <Col  className='mail-col'>
            <h6>{props.hasAttachment}</h6>
          </Col>
          <Col  className='mail-col'>
            <h6>{props.date}</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mail;

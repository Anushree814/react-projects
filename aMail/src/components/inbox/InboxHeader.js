import { Col, Container, Row, Button, Form, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
const InboxHeader = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="justify-contents-start">
            <h2>Inbox(16)</h2>
          </Col>
          <Col className="justify-contents-end">
            <Form className="d-flex search-bar">
              <FormControl
                type="search"
                placeholder="Search your mailbox.."
                className="me-2"
                aria-label="Search"
              />
              <Button size="sm" variant="light">
                <BsSearch className="search-icon" />
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
            <Col><h6>refresh</h6></Col>
            <Col><h6>prev-next</h6></Col>
        </Row>
      </Container>
    </div>
  );
};

export default InboxHeader;

import Header from "./Header";
import { Row, Col, Container } from "react-bootstrap";
import './Layout.css';
import MailboxItems from "../components/other/MailboxItems";
import Inbox from "../components/inbox/Inbox";
const Layout = () => {
  return (
    <div>
      <Header />
      <Container fluid className='vh-200 d-flex flex-column'> 
        <Row className="d-flex vh-200">
          <Col xs={3}><div className='mb-items d-flex vh-100'><MailboxItems/></div></Col>
          <Col xs={9}><div className='inbox border d-flex vh-100'><Inbox/></div></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;

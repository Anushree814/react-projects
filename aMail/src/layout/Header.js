import { Form, Navbar, Container, FormControl, Button, Badge } from "react-bootstrap";
import { FaEnvelope, FaBell } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import "./Header.css";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  function logoutHandler(){
    history.push('/');   
  }
  return (
    <div>
      <Navbar>
        <Container>
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
          <div className="justify-content-end">
            <FaEnvelope className="header-icon"> <Badge bg='warning' className="badge"><span >16</span></Badge></FaEnvelope>
            <FaBell className="header-icon" />
            <MdLogout className="header-icon" />
            <Button size="sm" variant="light" onClick={logoutHandler}>Log Out</Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

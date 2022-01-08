import Categories from "./Categories";
import Folders from "./Folders";
import Labels from "./Labels";
import { Button, Stack, Container } from "react-bootstrap";
import "./MailboxItems.css";
import { useHistory } from "react-router-dom";

const MailboxItems = () => {
  const history = useHistory();
  
  const openMailModal = () =>{
    history.push(`/writeMail?mv=true`);
  }
  return (
    <Container fluid className="mb-stack">
      <Stack gap={4} className="mx-auto d-flex justify-content-between">
        <Button variant="success" onClick={openMailModal}>Compose Mail</Button> 
        
        <Folders className="bg-light border" />
        <Categories className="bg-light border" />
        <Labels className="bg-light border" />
      </Stack>
    </Container>
  );
};

export default MailboxItems;

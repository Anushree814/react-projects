import { FaInbox, FaTrash } from "react-icons/fa";
import { BsArrowRightShort, BsPencilSquare } from "react-icons/bs";
import { Badge, ListGroup } from "react-bootstrap";
import { MdLabelImportant } from "react-icons/md";
import './Folders.css';
import { useHistory } from "react-router-dom";
const Folders = () => {
  const history = useHistory();
  const showSentItems = ()=>{
    history.push("/mailHome/sentItems");
  }
  return (
    <div>
      <h6>Folders</h6>
      <ListGroup variant="flush">
        <ListGroup.Item><FaInbox className="folder-icon"/>Inbox <div className="badge-div"><Badge bg='warning' >16</Badge></div></ListGroup.Item>
        <ListGroup.Item onClick={showSentItems}><BsArrowRightShort className="folder-icon"/>Sent</ListGroup.Item>
        <ListGroup.Item><MdLabelImportant className="folder-icon"/>Important</ListGroup.Item>
        <ListGroup.Item><BsPencilSquare className="folder-icon"/>Drafts <Badge bg='danger'>3</Badge></ListGroup.Item>
        <ListGroup.Item><FaTrash className="folder-icon"/>Trash</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Folders;

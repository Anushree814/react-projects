import { ListGroup } from "react-bootstrap";
const Categories = () => {
  return (
    <div>
      <h6>Categories</h6>
      <ListGroup variant="flush">
        <ListGroup.Item>🟢 Work</ListGroup.Item>
        <ListGroup.Item>🔴 Documents</ListGroup.Item>
        <ListGroup.Item>🔵 Social</ListGroup.Item>
        <ListGroup.Item>🟣 Advertising</ListGroup.Item>
        <ListGroup.Item>🟡 Clients</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Categories;

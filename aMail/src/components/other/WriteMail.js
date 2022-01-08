import { Fragment, useEffect, useRef, useState } from "react";
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Row,
  Col,
  Button,
  ModalFooter,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { addMail } from "../../lib/api";
import useHttp from "../../lib/useHttp";

const WriteMail = () => {
  const [modalVisible, setModalVisible] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sendTo = useRef();
  const cc = useRef();
  const subject = useRef();
  const mailBody = useRef();
  const dateToday = new Date();
  const date = dateToday.getHours() +":"+ dateToday.getMinutes();
  const { sendRequest, status } = useHttp(addMail, true);
  let additionMailStatus;
  const history = useHistory();
  useEffect(() => {
    setModalVisible(queryParams.get("mv") === "true" ? true : false);
    if (status === "completed") {
        alert("Mail sent successfully");
        history.replace("/mailHome");
    }
  }, [modalVisible, status]);

  function sendMail() {
      console.log(sendTo.current.value, mailBody.current.value);
    if(! sendTo.current.value && mailBody.current.value)
        alert("Please enter the recepient and mail body");
    else{
        const newMail = {
            sentBy: localStorage.getItem("currentUser"),
            category: "none",
            subject: subject.current.value,
            hasAttachment: false,
            date: date,
          };
          
          const newMailData = {
              sendTo: sendTo.current.value,
              newMail: newMail
          }
          sendRequest(newMailData);
    }
  }

  
  function saveDraft() {}

  function discardMail() {
    history.replace("/mailHome");
  }

  return (
    <Fragment>
      <Modal
        show={modalVisible}
        onHide={() => setModalVisible(false)}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title>New Mail</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Form>
              <Row>
                <Col>
                  <InputGroup>
                    <InputGroup.Text>To</InputGroup.Text>
                    <FormControl aria-label="mailTo" ref={sendTo}/>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup>
                    <InputGroup.Text>CC</InputGroup.Text>
                    <FormControl aria-label="mailTo" ref={cc} />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup>
                    <InputGroup.Text>Subject</InputGroup.Text>
                    <FormControl aria-label="mailTo" ref={subject} />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="mail-body">
                <Col>
                  <FormControl type="textarea" ref={mailBody} />
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <ModalFooter>
          <Container className="button-row">
            <Row>
              <Col>
                <Button variant="success" onClick={sendMail}>
                  Send
                </Button>
              </Col>
              <Col>
                <Button variant="warning" onClick={saveDraft}>
                  Save draft
                </Button>
              </Col>
              <Col>
                <Button variant="danger" onClick={discardMail}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Container>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default WriteMail;

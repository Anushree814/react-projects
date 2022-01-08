import classes from "./Login.module.css";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  
  localStorage.setItem("senderId", "sender@mail.com");
  localStorage.setItem("senderPassword", "sender");
  localStorage.setItem("receiverId", "receiver@mail.com");
  localStorage.setItem("receiverPassword", "receiver");
  const [enteredEmailId, setEnteredId] = useState();
  const [enteredPassword, setEnteredPassword] = useState();

  const handleFormInputs = (event) => {
    event.preventDefault();
    
    
    const validSenderEid = localStorage.getItem("senderId") === enteredEmailId ;
    const validSenderPassword = localStorage.getItem("senderPassword") === enteredPassword ;
    const validSender = validSenderEid && validSenderPassword ;
    
    const validReceiverEid = localStorage.getItem("receiverId") === enteredEmailId ;
    const validReceiverPassword = localStorage.getItem("receiverPassword") === enteredPassword ;
    const validReceiver = validReceiverEid && validReceiverPassword;
    const currentUser = validSender ? "sender" : "receiver";
    localStorage.setItem("currentUser", currentUser);
    
    if (!currentUser) {
        alert("Please enter valid credentials");
    }
    else {
      history.push('/mailHome');
    
  }
}

  return (
    <div className={classes.login}>
      <section className={classes.auth}>
        <h1>✉ Login</h1>
        <form onSubmit={handleFormInputs}>
          <div className={classes.control}>
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" required ref={emailRef} value={enteredEmailId} onChange={(e)=> setEnteredId(e.target.value)}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required ref={passwordRef} value={enteredPassword} onChange={(e)=> setEnteredPassword(e.target.value)}/>
          </div>
          <div className={classes.actions}>
            <button type="submit" className={classes.toggle}>
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;

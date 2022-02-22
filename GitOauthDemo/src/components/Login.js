// import './App.css';
import { authentication} from '../firebase-config';
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { Card, Button} from 'react-bootstrap';
import { BsGithub} from 'react-icons/bs'
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from "../App";
import classes from './Login.module.css'
function Login() {
    const {  dispatch } = useContext(AuthContext);
    const history = useHistory();

  const signInwithGithub = () => {
    const provider = new GithubAuthProvider();
    provider.addScope('repo', 'user', 'gists');
    signInWithPopup(authentication, provider)
    .then(res=> {
        dispatch({
            type: "LOGIN",
            payload: { user: res.user, isLoggedIn: true, token: res._tokenResponse }
          });
        history.push('/home')
    })
    .catch(e => console.error(e))
  }
  
  return (
    <div>
      <Card className={classes.loginCard}>
        <Card.Title className={classes.title}>Welcome</Card.Title>
        <Card.Body>
          <Button onClick={signInwithGithub} variant="dark" className={classes.loginBtn}><BsGithub size={21}/> &nbsp;Log in with Github</Button>
        </Card.Body>
      </Card>
     
    </div>
  );
}

export default Login;

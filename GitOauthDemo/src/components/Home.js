import { Fragment, useState, useContext, useEffect } from "react";
import { RiGitRepositoryFill } from "react-icons/ri";
import { ImBlog } from "react-icons/im";
import { IoMdContacts } from "react-icons/io";
import classes from "./Home.module.css";
import { Navbar, Container, Button, Card, ListGroup } from "react-bootstrap";
import { AuthContext } from "../App";
import { Octokit } from "@octokit/rest";
import Repos from "./Repos";
import Gists from "./Gists";
import { useHistory } from "react-router";
const Home = () => {
  const [name, setName] = useState();
  const [userName, setUsername] = useState();
  const [followers, setFollowers] = useState();
  const [bio, setBio] = useState();
  const [repos, setRepos] = useState();
  const [repoList, setRepoList] = useState();
  const [gistList, setGistList] = useState();
  const [avatar, setAvatar] = useState();
  const [showRepos, setShowRepos] = useState(false);
  const [showGists, setShowGists] = useState(false);
  const history = useHistory();
  const { state, dispatch } = useContext(AuthContext);
  const octokit = new Octokit();
  const getUserData = async () => {
    const response = await octokit.request("GET /users/{username}", {
      username: userName,
    });
    setName(response.data.name);
    setAvatar(response.data.avatar_url);
    setFollowers(response.data.followers);
    setBio(response.data.bio);
    setUsername(response.data.login);
    setRepos(response.data.public_repos);
  };
  useEffect(()=>{
    setUsername(state.token.screenName)
  },[state.token.screenName])
  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const viewRepos = async () => {
    const repos = await octokit.request(`GET /users/{username}/repos`, {
      username: userName,
    });

    if (repos.data.length > 0) {
      const arr = repos.data.map((d) => {
        return {
          repo_id: d.id,
          repo_name: d.name,
          repo_description: d.description,
          created_at: d.created_at,
        };
      });
      
      setRepoList(arr);
      setShowRepos(true);
    } else {
      alert(`${userName} has no repositories`);
    }
  };
  const viewGists = async () => {
    const gists = await octokit.request(`GET /users/{username}/gists`, {
      username: userName,
    });
    
    if (gists.data.length>0) {
      const arr = gists.data.map((d) => {
        return {
          id: d.id,
          description: d.description,
        };
      });
      
      setShowGists(true);
      setGistList(JSON.stringify(arr));
      
    } else {
      alert(`${userName} has no gists`);
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Git Login Demo</Navbar.Brand>

          
            <Navbar.Text>
              <Button onClick={logout} variant="dark">Logout</Button>
            </Navbar.Text>
          
        </Container>
      </Navbar>
      <Card className={classes.user}>
        <Card.Body>
          <Card.Title className={classes.userTitle}>{name}</Card.Title>
          <Card.Img src={avatar} className={classes.avatar} />
          <Card.Subtitle className={classes.username}>{userName}</Card.Subtitle>
          <Card.Text>
            <ListGroup variant="flush" className={classes.lg}>
              <ListGroup.Item className={classes.bio}>
                <b>Bio</b> <ImBlog /> <p>{bio}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Followers</b> <IoMdContacts size={21} />
                &nbsp;&nbsp;&nbsp;{followers}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Repos</b> <RiGitRepositoryFill size={21} />
                &nbsp;&nbsp;&nbsp;{repos}
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Card.Footer className={classes.viewLinks}>
            <Button onClick={viewRepos} className={classes.links} variant="dark">
              View Repos
            </Button>
            <Button onClick={viewGists} className={classes.links} variant="dark">
              View Gists
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>

      {showRepos && <Repos repoList={repoList} />}
      {showGists && <Gists gistList={gistList} />}
    </Fragment>
  );
};

export default Home;

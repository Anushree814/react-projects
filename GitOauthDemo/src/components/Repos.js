import { useEffect, useState } from "react";
import {  ListGroup } from "react-bootstrap";
import Repo from "./Repo";
import classes from "./Repos.module.css";
const Repos = (props) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    setRepos(props.repoList);
  }, [props.repoList]);

  return (
    <div>
      <h3 style={{ paddingLeft: "30px" }}>Repolist</h3>

      {repos.map((repo) => (
        <ListGroup.Item className={classes.lgItem}>
          <Repo
            key={repo.repo_id}
            name={repo.repo_name}
            description={repo.repo_description}
            created_at={repo.created_at}
          />
        </ListGroup.Item>
      ))}
    </div>
  );
};

export default Repos;

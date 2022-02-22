
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Gist from "./Gist";

const Gists = (props) => {
    const [gistList, setGistList] = useState()
    useEffect(()=> {
        setGistList(JSON.parse(props.gistList));
    },[props.gistList])
   
    return(
        <div ><h3 style={{paddingLeft: "30px"}}>Gists</h3>
            {gistList.length && <ListGroup>
                {gistList.map((gist) => 
                <ListGroup.Item>
                    <Gist
                    key = {gist.id}
                    description = {gist.description}
                    />
                </ListGroup.Item>)}
            </ListGroup>}
        </div>
    );
}

export default Gists;
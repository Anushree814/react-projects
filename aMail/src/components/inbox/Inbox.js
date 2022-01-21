import { useEffect } from "react";
import { getMails } from "../../lib/api";
import useHttp from "../../lib/useHttp";
import LoadingSpinner from "../../UI/LoadingSpinner";
import InboxHeader from "./InboxHeader";
import MailList from "./MailList";

const Inbox = () => {
    const user = localStorage.getItem("currentUser");
    
    const { sendRequest, status, data: loadedMails, error} = useHttp(
        getMails, true
    );
    
    //console.log(loadedMails, status);

    useEffect(() => {
        sendRequest(user);
    }, [sendRequest, user]);

    if(status==='pending'){
        return(
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        );
    }

    if(error){
        return(
            <p className='centered'>{error}</p>
        );
    }

    if(status==='completed' && (!loadedMails || loadedMails.length === 0)){
        return(
            <div className="centered">
                <h4>You have no mails in your inbox!</h4>
            </div>
        );
    }

    return(
        <div>
            <InboxHeader/>
            <MailList mails={loadedMails}/>
        </div>
    );
};

export default Inbox;
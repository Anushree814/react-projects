import { useEffect } from "react";
import { getSentMails } from "../../lib/api";
import useHttp from "../../lib/useHttp";
import LoadingSpinner from "../../UI/LoadingSpinner";
import MailList from "../inbox/MailList";

const SentItems = () => {
    const user = localStorage.getItem("currentUser");
    const { sendRequest, status, data: loadedSentMails, error} = useHttp(
        getSentMails, true
    );
    
    //console.log(loadedSentMails, status);

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

    if(status==='completed' && (!loadedSentMails || loadedSentMails.length === 0)){
        return(
            <div className="centered">
                <h4>You have not sent any mails!</h4>
            </div>
        );
    }

    return(
        <div>
            <MailList mails={loadedSentMails}/>
        </div>
    );
};

export default SentItems;
import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import QuoteList from "./QuoteList";
import NoQuotesFound from './NoQuotesFound';

const dummy_quotes=[
    {
        id:'q1',
        author:'A1',
        text:'Karam Karo Fal Ki Chinta Mat Karo',
    },
    {
        id:'q2',
        author:'A2',
        text:'A stitch in time saves nine',
    },
    {
        id:'q3',
        author:'A3',
        text:'Better late than never',
    },
];

const AllQuotes = () => {
    const { sendRequest, status, data: loadedQuotes, error} = useHttp(
        getAllQuotes, true
    );
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

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

    if(status==='completed' && (!loadedQuotes || loadedQuotes.length === 0)){
        return(
            <div>
                <NoQuotesFound/>
            </div>
        );
    }

    return (
    <div>
        <QuoteList quotes={loadedQuotes}/>
        </div>
    );
};

export default AllQuotes;
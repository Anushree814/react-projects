// import { Route, useParams } from "react-router";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "./HighlightedQuote";
import NoQuotesFound from "./NoQuotesFound";
import Comments from '../comments/Comments';
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const dummy_quotes = [
  {
    id: "q1",
    author: "A1",
    text: "Karam Karo Fal Ki Chinta Mat Karo",
  },
  {
    id: "q2",
    author: "A2",
    text: "A stitch in time saves nine",
  },
  {
    id: "q3",
    author: "A3",
    text: "Better late than never",
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  const match = useRouteMatch();

  //const quote = dummy_quotes.find((q) => q.id === params.quoteId);
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  //   if(!quote){
  //       <div><NoQuotesFound/></div>
  //   }
  //console.log(match);

  if(status==='pending'){
    return(
      <div className='centered'><LoadingSpinner/></div>
    );
  }

  if(error){
    return <p className='centered'>{error}</p>
  }

  if(!loadedQuote.text){
    return(
      <div><NoQuotesFound/></div>
    )
  }
  return (
    <section>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} exact>
        <Comments />
      </Route>
      {/* {!quote && <NoQuotesFound />} */}
    </section>
  );
};

export default QuoteDetail;

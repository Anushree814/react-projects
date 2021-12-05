import { useEffect } from "react";
import { useHistory } from "react-router";
import { addQuote } from "../../lib/api";
import  useHttp  from "../../hooks/use-http";
import QuoteForm from "./QuoteForm";
import { useNavigate } from "react-router-dom";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    //history.push('/quotes'); //Can use replace which will redirect to /quotes but from there we wont be able to go back to prev page. Same is achievable with push method
  };
  return (
    <div>
      <QuoteForm isLoading={status==='pending'} onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuote;

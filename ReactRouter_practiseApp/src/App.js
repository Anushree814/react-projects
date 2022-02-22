import { Route, Switch, Redirect } from "react-router";
// import QuoteList from "./components/quotes/QuoteList";
// import QuoteForm from "./components/quotes/QuoteForm";
import AllQuotes from "./components/quotes/AllQuotes";
// import QuoteDetail from "./components/quotes/QuoteDetail";
// import NewQuote from "./components/quotes/NewQuote";
import Layout from "./components/layout/Layout";
// import NoQuotesFound from "./components/quotes/NoQuotesFound";
import { Navigate, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// Lazy Loading
const NewQuote = React.lazy(() => import("./components/quotes/NewQuote"));
const QuoteDetail = React.lazy(() => import("./components/quotes/QuoteDetail"));
const QuoteList = React.lazy(() => import("./components/quotes/QuoteList"));
const QuoteForm = React.lazy(() => import("./components/quotes/QuoteForm"));
const NoQuotesFound = (() => import("./components/quotes/NoQuotesFound"));
function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner/></div>}>
      {/* <Routes> */}
      <Switch>
        <Route path='/' exact><Redirect to='/quotes'/></Route>
        <Route path="/quotes" exact><AllQuotes/></Route>
        <Route path="/quotes/:quoteId"><QuoteDetail/></Route>
        <Route path='/new-quote'><NewQuote/></Route>
        <Route path='*'><NoQuotesFound/></Route>
      {/* </Routes> */}
      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;

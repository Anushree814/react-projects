
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SentItems from './components/other/SentItems';
import WriteMail from './components/other/WriteMail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact><Login/></Route>
        <Route path='/mailHome' exact><Home/></Route>
        <Route path='/writeMail'><WriteMail/></Route>
        <Route path='/mailHome/sentItems'><SentItems/></Route>
      </Switch>
    </div>
  );
}

export default App;

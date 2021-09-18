import Head from './component/Head.jsx';
import Detail from './component/Detail.jsx'
import Filter from './component/Filter.jsx'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            <Head  />
        </Route>
        <Route path="/detail">
            <Detail />
        </Route>
      </Switch>
         
    </div>
  );
}

export default App;

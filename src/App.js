import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import DynamicImport from "DynamicImport";

const makeHomeRoute = path => {
  const Fallback = () => <div>...Loading</div>
  return () => <DynamicImport
    path={path} 
    Fallback={Fallback}
  />
}

const Settings = makeHomeRoute("components/Settings");
const Topics = makeHomeRoute("components/Topics");
const Home = makeHomeRoute("components/Home");

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component = {Home} />
        <Route path ="/topics" component={Topics} />
        <Route path = "/settings" component ={Settings} />
      </div>
    </Router>
  );
}

export default App;

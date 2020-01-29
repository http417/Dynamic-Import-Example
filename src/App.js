import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import DynamicImport from "DynamicImport";

const Fallback = () => <div>...Loading</div>

const makeHomeRoute = path => {
  const Fallback = () => <div>...Loading w/o React.Lazy</div>
  return () => <DynamicImport
    path={path} 
    Fallback={Fallback}
  />
}

const Settings = makeHomeRoute("components/Settings");
const Topics = makeHomeRoute("components/Topics");
const Home = makeHomeRoute("components/Home");

const LazySettings = React.lazy(() => import("components/Settings"));
const LazyTopics = React.lazy(() => import("components/Topics"));
const LazyHome = React.lazy(() => import("components/Topics"));


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
        <hr />
        
        <React.Suspense fallback={<Fallback />}>
          <Route exact path = "/" component={LazyHome} />
          <Route path = "/topics" component={LazyTopics} />
          <Route path = "/settings" component={LazySettings} />
        </React.Suspense>
        
      </div>
    </Router>
  );
}

export default App;

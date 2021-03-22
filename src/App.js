import React from "react";
import FormPage from './Form';
import Home from './Home';
import {Route, Switch} from 'reaact-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Pizza' component={FormPage} />
    </Switch>
  );
};
export default App;

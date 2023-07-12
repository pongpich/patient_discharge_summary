import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Patient_Discharge_Summary from '../components/main/Patient-Discharge-Summary';
import Print_Layout from '../components/main/Print-Layout';

class Router extends Component {

  render() {

    return (
      <HashRouter>
        <Switch>
          <Route exact path = {"/"}><Redirect to="/Home" /></Route>
          <Route exact path = {"/Home/:id?"} component = { Patient_Discharge_Summary } />
          <Route exact path = {"/Print/:id?/:user?"} component = { Print_Layout } />
        </Switch>
      </HashRouter>
    );
  }

}

export default Router;

import React from 'react';
import './_reset.sass'
import './App.css';
import MainPage from './pages/MainPage/MainPage'
import { Router, Route, Link, Switch } from "react-router-dom";
import history from './history'
import AdminPanelPage from "./pages/AdminPanelPage/AdminPanelPage";

function App() {
  return (
      <Router history={history}>
          <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path={'/admin-panel'} component={AdminPanelPage} />
          </Switch>
      </Router>
  );
}

export default App;

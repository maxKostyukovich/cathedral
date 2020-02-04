import React from 'react';
import './_reset.sass'
import './mixins.sass'
import './App.css';
import {Route, Router} from "react-router-dom";
import history from './history'
import AdminPanelPage from "./pages/AdminPanelPage/AdminPanelPage";
import {PATHS} from "./constants";
import MainRouteSwitcher from "./components/MainRouteSwitcher/MainRouteSwitcher";

class App extends React.Component{
    render() {
        return (

            <Router history={history}>
                {
                history.location.pathname !== PATHS.ADMIN_PANEL ?
                <MainRouteSwitcher/>:
                <Route path={PATHS.ADMIN_PANEL} component={AdminPanelPage}/>
                }
            </Router>
        );
    }
}

export default App;

import React from 'react';
import './_reset.sass'
import './mixins.sass'
import './App.css';
import {Route, Router} from "react-router-dom";
import history from './history'
import AdminPanelPage from "./pages/AdminPanelPage/AdminPanelPage";
import {PATHS} from "./constants";
import MainRouteSwitcher from "./components/MainRouteSwitcher/MainRouteSwitcher";

class App extends React.Component {
    render() {
        console.log(history.location.pathname);
        return (

            <Router history={history}>
                {
                    history.location.pathname.includes(PATHS.ADMIN_PANEL) ?
                        <Route path={PATHS.ADMIN_PANEL} component={AdminPanelPage}/> :
                        <MainRouteSwitcher/>
                }
            </Router>
        );
    }
}

export default App;

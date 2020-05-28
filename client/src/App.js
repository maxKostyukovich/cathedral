import React from 'react';
import './_reset.sass'
import './mixins.sass'
import './App.css';
import {Route, Router, Switch, Redirect} from "react-router-dom";
import history from './history'
import AdminPanelPage from "./pages/AdminPanelPage/AdminPanelPage";
import MainRouteSwitcher from "./components/MainRouteSwitcher/MainRouteSwitcher";
import renderAdminPanel from './components/HOC/renderAdminPanel';
import {PATHS} from "./constants";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

class App extends React.Component {
    render() {
        return (
            <>
                <Router history={history}>
                    <Switch>
                        <Redirect exact  from={'/'} to={PATHS.MAIN_PAGE}/>
                        <Route path={PATHS.ADMIN_PANEL} component={renderAdminPanel(AdminPanelPage)}/>
                        <Route path={PATHS.MAIN_PAGE} component={MainRouteSwitcher}/>
                        <Route path={PATHS.NOT_FOUND} component={ErrorPage}/>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;

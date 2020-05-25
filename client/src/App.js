import React from 'react';
import './_reset.sass'
import './mixins.sass'
import './App.css';
import {Route, Router, Switch, Redirect} from "react-router-dom";
import history from './history'
import AdminPanelPage from "./pages/AdminPanelPage/AdminPanelPage";
import {PATHS} from "./constants";
import MainRouteSwitcher from "./components/MainRouteSwitcher/MainRouteSwitcher";
import renderAdminPanel from './components/HOC/renderAdminPanel';

class App extends React.Component {
    render() {
        return (
            <>
                {/*<Router history={history}>*/}
                    {/*{*/}
                        {/*history.location.pathname.includes(PATHS.ADMIN_PANEL) ?*/}
                            {/*<Route path={'/admin-panel'} component={renderAdminPanel(AdminPanelPage)}/> :*/}
                            {/*<MainRouteSwitcher/>*/}
                    {/*}*/}
                {/*</Router>*/}
                <Router history={history}>
                    <Switch>
                        <Redirect exact  from={'/'} to={'/home'}/>
                        <Route path={'/admin-panel'} component={renderAdminPanel(AdminPanelPage)}/>
                        <Route path={'/home'} component={MainRouteSwitcher}/>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;

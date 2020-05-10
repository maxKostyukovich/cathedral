import React from 'react'
import { Route, Link, Switch } from "react-router-dom";
import {PATHS} from "../../constants";
import MainPage from "../../pages/MainPage/MainPage";
import LoginForm from "../Forms/LoginForm/LoginForm";
import Gallery from "../Gallery/Gallery";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import SingleNews from "../News/SingleNews/SingleNews";
import connect from 'react-redux/es/connect/connect'
class MainRouteSwitcher extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                <Navbar/>
                <Switch>
                    <Route path={PATHS.NEWS_WITH_ID } component={SingleNews}/>
                    <Route path={PATHS.MAIN_PAGE} component={MainPage} exact/>
                    <Route path={PATHS.LOGIN} component={LoginForm}/>
                    <Route path={PATHS.GALLERY} component={Gallery}/>
                    <Route path={PATHS.CHURCH_PRIESTS} render={()=> <h1>PRIESTS</h1>}/>
                    <Route path={PATHS.NOT_FOUND} component={ErrorPage}/>
                </Switch>
            </div>
        )
    }

}
export default connect()(MainRouteSwitcher)

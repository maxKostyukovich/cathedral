import React from 'react'
import { Route, Link, Switch } from "react-router-dom";
import {PATHS} from "../../constants";
import MainPage from "../../pages/MainPage/MainPage";
import LoginForm from "../Forms/LoginForm/LoginForm";
import Priests from '../Priests/Priests'
import Gallery from "../Gallery/Gallery";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import Bishop from '../Bishop/Bishop'
import SingleNews from "../News/SingleNews/SingleNews";
import connect from 'react-redux/es/connect/connect'
import styles from './MainRouteSwitcher.module.sass'
class MainRouteSwitcher extends React.Component{
    render(){
        return(
            <>
                <div className={styles.container}>
                    <Header/>
                    <Navbar/>
                    <Switch>
                        <Route path={PATHS.NEWS_WITH_ID } component={SingleNews}/>
                        <Route path={PATHS.MAIN_PAGE} component={MainPage} exact/>
                        <Route path={PATHS.LOGIN} component={LoginForm}/>
                        <Route path={PATHS.GALLERY} component={Gallery}/>
                        <Route path={PATHS.CHURCH_PRIESTS} component={Priests}/>
                        <Route path={PATHS.BISHOP} component={Bishop}/>
                        <Route path={PATHS.NOT_FOUND} component={ErrorPage}/>
                    </Switch>
                </div>
                <div>
                    <Footer/>
                </div>
            </>
        )
    }

}
export default connect()(MainRouteSwitcher)

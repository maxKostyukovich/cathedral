import React from 'react'
import styles from './AdminPanel.module.sass'
import LeftSideBar from '../../components/AdminPanelComponents/SideBar/LeftSideBar/LeftSideBar'
import NewsForm from '../../components/AdminPanelComponents/Forms/NewsForm'
import history from "../../history";
import {Route, Switch} from "react-router";
import { Link } from "react-router-dom";
import Home from "../../components/AdminPanelComponents/Home/Home";
import {PATHS} from "../../constants";

class AdminPanelPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: true
        }
    }

    menuClickHandler = () => {
        this.setState((currentState) => ({
            isMenuOpen: !currentState.isMenuOpen
        }))
    };

    render() {
        const rootPath = history.location.pathname;
        return (
            <>
                <LeftSideBar rootPath={rootPath} menuClickHandler={this.menuClickHandler} isMenuOpen={this.state.isMenuOpen}/>
                <div className={styles.header}>

                </div>
                <div className={styles.container}>

                    {/*<NewsForm/>*/}
                        <Route exact path={rootPath} component={Home}/>
                        <Route path={rootPath + '/:news'} component={NewsForm}/>
                </div>
            </>
        )
    }

}

export default AdminPanelPage;

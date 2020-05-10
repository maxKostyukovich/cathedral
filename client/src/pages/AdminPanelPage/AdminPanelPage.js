import React from 'react'
import styles from './AdminPanel.module.sass'
import LeftSideBar from '../../components/AdminPanelComponents/SideBar/LeftSideBar/LeftSideBar'
import NewsForm from '../../components/AdminPanelComponents/Forms/NewsForm'
import history from "../../history";
import {Route, Switch} from "react-router";
import { Link } from "react-router-dom";
import Home from "../../components/AdminPanelComponents/Home/Home";
import {PATHS} from "../../constants";
import DataList from "../../components/AdminPanelComponents/DataList/DataList";
import {getAllNewsAction, getAllPriestsAction} from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect'

class AdminPanelPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: true
        }
    }

    componentDidMount() {
        this.props.getAllPriestsAction();
        this.props.getAllNewsAction();
    }

    menuClickHandler = () => {
        this.setState((currentState) => ({
            isMenuOpen: !currentState.isMenuOpen
        }))
    };

    render() {
        return (
            <div>
                <LeftSideBar menuClickHandler={this.menuClickHandler} isMenuOpen={this.state.isMenuOpen}/>
                <div className={styles.header}></div>
                <div className={styles.container}>
                    <Route exact path={PATHS.ADMIN_PANEL} component={Home}/>
                    <Route path={PATHS.ADMIN_PANEL + '/news'} render={(props) => <DataList {...props} data = {this.props.news} />}/>
                    <Route path={PATHS.ADMIN_PANEL + '/priest'} render={(props) => <DataList {...props} data = {this.props.priests} />}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAllNewsAction: (params) => dispatch(getAllNewsAction(params)),
    getAllPriestsAction: () => dispatch(getAllPriestsAction()),
});

const mapStateToProps = (state) => {
    const { news } = state.newsReducer;
    const { priests } = state.priestReducer;
    return {
        news,
        priests
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AdminPanelPage)

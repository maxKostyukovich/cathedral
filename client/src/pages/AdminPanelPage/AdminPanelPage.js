import React from 'react'
import styles from './AdminPanel.module.sass'
import LeftSideBar from '../../components/AdminPanelComponents/SideBar/LeftSideBar/LeftSideBar'
import {Route} from "react-router";
import Home from "../../components/AdminPanelComponents/Home/Home";
import {PATHS} from "../../constants";
import DataList from "../../components/AdminPanelComponents/DataList/DataList";
import {getAllNewsAction, getAllPriestsAction} from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect'
import NewsTable from "../../components/AdminPanelComponents/DataTables/NewsTable/NewsTable";
import PriestTable from "../../components/AdminPanelComponents/DataTables/PriestTable/PriestTable";
import TablePage from './TablePage/TablePage';
import {newsTableText, priestTableText} from "./textConstants";

class AdminPanelPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: true
        }
    }

    componentDidMount() {
        console.log('component did mount')
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
            <div >
                <LeftSideBar menuClickHandler={this.menuClickHandler} isMenuOpen={this.state.isMenuOpen}/>
                <div className={styles.header}>
                    <div className={styles.headerBox}>
                        <span className={styles.headerTitle}>Admin panel</span>
                        <div className={styles.userBox}>
                            <span>Login box</span>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <Route exact path={PATHS.ADMIN_PANEL} component={Home}/>
                    <Route path={PATHS.ADMIN_PANEL + '/news'} render={(props) => <TablePage {...props} text={newsTableText} table={NewsTable} data = {this.props.news}/>}/>
                    <Route path={PATHS.ADMIN_PANEL + '/priest'} render={(props) => <TablePage {...props} text={priestTableText} table={PriestTable} data = {this.props.priests} />}/>
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

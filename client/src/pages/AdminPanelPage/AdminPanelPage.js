import React from 'react'
import styles from './AdminPanel.module.sass'
import LeftSideBar from '../../components/AdminPanelComponents/SideBar/LeftSideBar/LeftSideBar'
import {Route} from "react-router";
import Home from "../../components/AdminPanelComponents/Home/Home";
import {PATHS} from "../../constants";
import {getAllNewsAction, getAllPriestsAction, logoutAction, getAllGalleryAction} from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect'
import NewsTable from "../../components/AdminPanelComponents/DataTables/NewsTable/NewsTable";
import PriestTable from "../../components/AdminPanelComponents/DataTables/PriestTable/PriestTable";
import GalleryTable from '../../components/AdminPanelComponents/DataTables/GalleryTable/GalleryTable'
import TablePage from './TablePage/TablePage';
import exit from '../../images/exit.png'
import { Link } from "react-router-dom";

class AdminPanelPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: true
        }
    }

    componentDidMount() {
        this.props.getAllPriestsAction();
        this.props.getAllGalleryAction();
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
                            <div className={styles.userInfoContainer}>
                                <span>Admin:</span>
                                <span>{this.props.user.email}</span>
                            </div>
                            <Link to={'/home'}><div className={styles.logout} onClick={this.props.logoutAction}>Sign out<img style={{marginLeft: '3px'}} src={exit} alt={'exit'}/></div></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <Route exact path={PATHS.ADMIN_PANEL} component={Home}/>
                    <Route path={PATHS.ADMIN_PANEL + '/news'} render={(props) => <TablePage {...props}  table={NewsTable} data = {this.props.news}/>}/>
                    <Route path={PATHS.ADMIN_PANEL + '/priest'} render={(props) => <TablePage {...props}  table={PriestTable} data = {this.props.priests} />}/>
                    <Route path={PATHS.ADMIN_PANEL + '/gallery'} render={(props) => <TablePage {...props}  table={GalleryTable} data = {this.props.galleries} />}/>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    getAllNewsAction: (params) => dispatch(getAllNewsAction(params)),
    getAllPriestsAction: () => dispatch(getAllPriestsAction()),
    getAllGalleryAction: () => dispatch(getAllGalleryAction()),
    logoutAction: () => dispatch(logoutAction())
});

const mapStateToProps = (state) => {
    const { news } = state.newsReducer;
    const { priests } = state.priestReducer;
    const { galleries } = state.galleryReducer;
    return {
        news,
        priests,
        galleries
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AdminPanelPage)

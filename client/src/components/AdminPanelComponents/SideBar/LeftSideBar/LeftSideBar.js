import React from 'react'
import styles from './LeftSideBar.module.sass'
import { Link } from "react-router-dom";
import rootReducer from "../../../../reducers";
import {PATHS} from "../../../../constants";

class LeftSideBar extends React.Component{

    render() {
        const menuStyles = [styles.sidebar];
        if(!this.props.isMenuOpen){
            menuStyles.push(styles.sidebarHidden)
        }
        return (
                <div className={menuStyles.join(' ')}>
                    <div className={styles.toggleBtn} onClick={this.props.menuClickHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li><Link to={`${PATHS.ADMIN_PANEL}/news`}>Новости</Link></li>
                        <li>Священики</li>
                    </ul>
                </div>
        )
    }

}
export default LeftSideBar

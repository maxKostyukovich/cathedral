import React from 'react'
import styles from './LeftSideBar.module.sass'
import { Link } from "react-router-dom";

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
                        <li>Новости</li>
                        <li>Священики</li>
                    </ul>
                </div>
        )
    }

}
export default LeftSideBar

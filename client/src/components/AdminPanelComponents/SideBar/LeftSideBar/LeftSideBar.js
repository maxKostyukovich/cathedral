import React from 'react'
import styles from './LeftSideBar.module.sass'
import { Link } from "react-router-dom";
import {PATHS} from "../../../../constants";
import logo from '../../../../images/logo2.png'
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

                    <div className={styles.logo}>
                        <Link to={PATHS.ADMIN_PANEL}>
                            <img style={{width: '220px', height: '44px'}} src={logo} alt={'logo'}/>
                        </Link>
                    </div>
                    <ul>
                        <li><Link to={`${PATHS.ADMIN_PANEL}/news`}><span className={styles.links}>Новости</span></Link></li>
                        <li><Link to={`${PATHS.ADMIN_PANEL}/priest`}><span className={styles.links}>Священики</span></Link></li>
                        <li><Link to={`${PATHS.ADMIN_PANEL}/gallery`}><span className={styles.links}>Галлерея</span></Link></li>
                    </ul>
                </div>
        )
    }
}
export default LeftSideBar

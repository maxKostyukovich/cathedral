import React from 'react'
import styles from './Navbar.module.sass'
import {NavLinks} from './ConstantText'
import {Link} from 'react-router-dom'
class Navbar extends React.Component{

    renderDropMenu = (item) => {
        return item.dropList.map(value1 => {
            return <React.Fragment key={value1.text}>
                <li>
                <Link to={value1.to} >
                    <span>{value1.text}</span>
                </Link>
            </li>
            </React.Fragment>
        })
    };

    renderNavList(){
        return NavLinks.map((item) => {
            return <div key={item.text} className={styles.hoverWrap}>
                <Link to={item.to}>
                    <li className={styles.item}>
                        <span>{ item.text }</span>
                        {item.dropList.length > 0 && <i className="fas fa-angle-down" style={{opacity: "0.3",marginLeft: "3px"}}></i>}
                    </li>
                </Link>
                {item.dropList.length > 0 &&
                <div className={styles.dropDownList}>
                    <div className={styles.arrow}></div>
                    <ul>
                        { this.renderDropMenu(item) }
                    </ul>
                </div>}
            </div>;
        })
    }
    render(){
        return(
            <div className={styles.container}>
                <ul className={styles.navigation}>
                    {this.renderNavList()}
                </ul>
            </div>
        )
    }
}

export default Navbar
import React from 'react'
import styles from './Header.module.sass'
class Header extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={process.env.PUBLIC_URL + '/img/church.png'} alt={'Logo'}/>
                </div>
                <div className={styles.title}>
                    <h2>Украинская провославная церковь</h2>
                    <h2>Запорожская епархия</h2>
                    <h1>Свято-Андреевсий Кафедральный собор</h1>
                </div>
            </div>
        )
    }

}

export default Header;
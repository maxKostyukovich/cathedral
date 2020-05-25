import React from 'react'
import styles from './Home.module.sass'
import welcomeLogo from '../../../images/welcome-logo.png'

class Home extends React.Component{
    render() {
        return(
            <div className={styles.container}>
                <img style={{width: '180px', height: '166px'}} src={welcomeLogo} alt={'logo'}/>
                <span className={styles.welcome}>Welcome to Admin Panel</span>
            </div>
        )
    }
}
export default Home

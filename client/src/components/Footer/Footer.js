import React from 'react'
import styles from './Footer.module.sass'
class Footer extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.footerContainer}>
                    <div className={styles.address}>
                        <span className={styles.headerText}>Адрес:</span>
                        <span className={styles.infoText}>г. Запорожье, пр. Моторостроителей, 50</span>
                    </div>
                    <div className={styles.contactInfoBox}>
                        <div style={{marginBottom: '20px'}}>
                            <span className={styles.headerText}>Телефон:</span>
                            <span className={styles.infoText}>+38097120912</span>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <span className={styles.headerText}>Эл. почта:</span>
                            <span className={styles.infoText}>max.aq@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;

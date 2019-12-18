import React from 'react'
import styles from './AdminPanel.module.sass'

import NewsForm from '../../components/AdminPanelComponents/Forms/NewsForm'
class AdminPanelPage extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <NewsForm/>
            </div>
        )
    }

}

export default AdminPanelPage;
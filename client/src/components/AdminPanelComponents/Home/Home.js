import React from 'react'
import styles from './Home.module.sass'

class Home extends React.Component{
    render() {
        return(
            <div className={styles.container}>
                <h1>Home</h1>
            </div>
        )
    }
}
export default Home
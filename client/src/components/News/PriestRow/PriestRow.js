import React from 'react'
import styles from './PriestRow.module.sass'
import { SERVER_URL } from "../../../api/ConstantURLs";

class PriestRow extends React.Component{
    render(){
        return(
            <li>
                <div className={styles.rowContainer}>

                    <img src={SERVER_URL + this.props.avatar} alt={'Фото: ' + this.props.full_name}/>
                    <div className={styles.newsContent}>
                        <div className={styles.boxTitle}>
                            <h3 className={styles.title}>{this.props.current_position + ' ' + this.props.full_name}</h3>
                        </div>
                        <article className={styles.description} dangerouslySetInnerHTML={{__html:this.props.biography}}>
                        </article>
                    </div>
                </div>
            </li>
        )
    }
}
export default PriestRow;

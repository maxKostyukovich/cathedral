import React from 'react'
import styles from './NewsRow.module.sass'
import { SERVER_URL } from "../../../api/ConstantURLs";
import { Link } from 'react-router-dom'
import {PATHS} from "../../../constants";
class NewsRow extends React.Component{
    render(){
        return(
            <li className={styles.rowContainer}>
                <img src={SERVER_URL + this.props.main_img} alt={'Фото: ' + this.props.title}/>
                <div className={styles.newsContent}>
                    <Link to={`${PATHS.NEWS}/${this.props.id}`}><h3 className={styles.title}>{this.props.title}</h3></Link>
                    <article className={styles.description}>
                        {this.props.short_description}
                    </article>
                    <span className={styles.date}>{this.props.date}</span>
                </div>
            </li>
        )
    }
}
export default NewsRow;
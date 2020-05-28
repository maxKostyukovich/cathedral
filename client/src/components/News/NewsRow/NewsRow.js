import React from 'react'
import styles from './NewsRow.module.sass'
import { SERVER_URL } from "../../../api/ConstantURLs";
import { Link } from 'react-router-dom'
import {PATHS} from "../../../constants";
import arrows from '../../../images/chevron-double-right.png'
import {cutText} from "../../../utils/util";

class NewsRow extends React.Component{
    render(){
        return(
            <li>
                <Link to={`${PATHS.NEWS}/${this.props.id}`}>
                    <div className={styles.rowContainer}>
                    <img src={SERVER_URL + this.props.main_img} alt={'Фото: ' + this.props.title}/>
                    <div className={styles.newsContent}>
                        <div className={styles.boxTitle}>
                            <h3 className={styles.title}>{this.props.title}</h3>
                            <span className={styles.date}>{this.props.date}</span>
                        </div>
                        <article className={styles.description}>
                            {cutText(this.props.short_description, 200)}
                        </article>
                        <span className={styles.more}>Подробнее<img src={arrows} alt={arrows}/></span>
                    </div>
                    </div>
                </Link>
            </li>
        )
    }
}
export default NewsRow;

import React from 'react'
import styles from './SingleNews.module.sass'
import connect from 'react-redux/es/connect/connect'
import {getSingleNewsAction} from "../../../actions/actionCreator";
import _ from 'lodash'
import { Link } from "react-router-dom";
import {SERVER_URL} from "../../../api/ConstantURLs";
import backImg from '../../../images/chevron-double-left.png'

class SingleNews extends React.Component{
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getSingleNewsAction(id)
    }
    render(){
        return(
            <article className={styles.container}>
                { !_.isEmpty(this.props.singleNews) &&
                <div className={styles.newsContainer}>
                    <div className={styles.titleBox}>
                        <Link to={'/home'}><div className={styles.more}><img src={backImg} alt={'back'} /><span>Назад</span></div></Link>
                        <h2 className={styles.newsTitle}>{this.props.singleNews.title}</h2>
                    </div>
                    <img className={styles.mainImg} src={SERVER_URL + this.props.singleNews.main_img} alt={"Фото: " + this.props.singleNews.title}/>
                    <p dangerouslySetInnerHTML={{ __html: this.props.singleNews.content }} className={styles.content}/>
                </div>}
            </article>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getSingleNewsAction: (id) => {
        dispatch(getSingleNewsAction(id))
    },
});

const mapStateToProps = (state) => {
    const { singleNews ,err, isFetching } = state.newsReducer;
    return {
        singleNews,
        isFetching,
        err,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleNews);


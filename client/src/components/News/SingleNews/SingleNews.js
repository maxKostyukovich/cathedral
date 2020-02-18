import React from 'react'
import styles from './SingleNews.module.sass'
import connect from 'react-redux/es/connect/connect'
import {getSingleNewsAction} from "../../../actions/actionCreator";
import _ from 'lodash'
import {SERVER_URL} from "../../../api/ConstantURLs";

class SingleNews extends React.Component{
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getSingleNewsAction(id)
    }
    render(){
        return(
            <article className={styles.container}>
                { !_.isEmpty(this.props.singleNews) &&
                <>
                    <h2>{this.props.singleNews.title}</h2>
                    <img src={SERVER_URL + this.props.singleNews.main_img} alt={"Фото: " + this.props.singleNews.title}/>
                    <p>{this.props.singleNews.content}</p>
                </>}
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


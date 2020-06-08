import React from 'react'
import styles from './MainPage.module.sass'
import connect from 'react-redux/es/connect/connect'
import Moment from 'moment'
import { getAllNewsAction } from '../../actions/actionCreator'
import CustomCarousel from '../../components/Carousel/CustomCarousel'
import NewsRow from '../../components/News/NewsRow/NewsRow'

class MainPage extends React.Component {

    renderNews = () => {
        const newsArray = this.props.news;
        if(newsArray.length < 1){
            return null
        }
        if(newsArray.length === 1){
            return <NewsRow {...newsArray[0]}/>
        }
        const sortedNews = newsArray.sort((a, b) => new Moment(b.date).format('YYYYMMDD') - new Moment(a.date).format('YYYYMMDD'))
        return sortedNews.map((item) => {
            return <NewsRow key={item.id} {...item} />
        })
    };

    componentDidMount(){
        this.props.getAllNewsAction({limit: 5});
    }

    render() {
        if(this.props.err){
            console.log(this.props.err)
        }
        return (
            <div className={styles.container}>
                <CustomCarousel/>
                <h2 className={styles.newsTitle}>Актуальные новости</h2>
                <ul className={styles.newsList}>
                    {
                        this.renderNews()
                    }
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAllNewsAction: (params) => dispatch(getAllNewsAction(params)),
});

const mapStateToProps = (state) => {
    const { news ,err, isFetching } = state.newsReducer;
    return {
        news,
        isFetching,
        err,
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(MainPage);

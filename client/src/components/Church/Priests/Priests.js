import React from 'react'
import styles from './Priests.module.sass'
import {getAllPriestsAction} from "../../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect'
import PriestRow from "../../News/PriestRow/PriestRow";
import separator from '../../../images/separator.svg'

class Priests extends React.Component{
    componentDidMount(){
        this.props.getAllPriestsAction();
    }

    renderPriests = () => {
        const priestsArray = this.props.priests;
        if(priestsArray.length < 1){
            return null
        }
        if(priestsArray.length === 1){
            return (
                <div className={styles.separatorBox}>
                    <PriestRow {...priestsArray[0]}/>
                    <img className={styles.separatorImg} src={separator} alt={'separator'}/>
                </div>
            )
        }
        return priestsArray.map((item) => {
            return(
                <div className={styles.separatorBox}>
                    <PriestRow key={item.id} {...item}/>
                    <img className={styles.separatorImg} src={separator} alt={'separator'}/>
                </div>

            );
        })
    };

    render() {
        return(
            <div className={styles.container}>
                <h2 className={styles.newsTitle}>Духовенство</h2>
                <ul className={styles.newsList}>
                    {
                        this.renderPriests()
                    }
                </ul>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    getAllPriestsAction: () => dispatch(getAllPriestsAction()),
});

const mapStateToProps = (state) => {
    const { priests } = state.priestReducer;
    return {
        priests
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Priests);

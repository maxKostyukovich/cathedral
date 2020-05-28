import React from 'react'
import styles from './GalleryRow.module.sass'
import { SERVER_URL } from "../../../api/ConstantURLs";
import {initializeGalleryModalWindow} from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

class GalleryRow extends React.Component{
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(){
        this.props.initializeGalleryModalWindow(this.props.image, this.props.title)
    }

    render(){
        return(
            <li>
                <div className={styles.rowContainer} onClick={this.onClickHandler}>
                    <div className={styles.imageWrapper} style={{backgroundImage: `url('${SERVER_URL}${this.props.image}')`}}>

                    </div>
                </div>
            </li>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    initializeGalleryModalWindow: (image, title) => dispatch(initializeGalleryModalWindow(image, title)),
});


export default connect(null, mapDispatchToProps)(GalleryRow);

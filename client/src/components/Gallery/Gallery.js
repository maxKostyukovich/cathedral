import React from 'react'
import styles from './Gallery.module.sass'
import {getAllGalleryAction} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
import GalleryRow from './GalleryRow/GalleryRow'
import ModalImage from "./ModalImage/ModalImage";

class Gallery extends React.Component {
    componentDidMount(){
        this.props.getAllGalleryAction();
    }

    renderGallery = () => {
        const galleries = this.props.galleries;
        if(galleries.length < 1){
            return null
        }
        if(galleries.length === 1){
            return (
                <GalleryRow {...galleries[0]}/>
            )
        }
        let tmp = [];
        for (let i = 0; i < galleries.length; i += 2){
            if (galleries.length - i <= 1){
                tmp.push(
                    <div key={galleries[i].id} className={styles.rowContainer}>
                        <GalleryRow {...galleries[i]}/>
                    </div>
                )
            } else {
                tmp.push(
                    <div key={galleries[i].id} className={styles.rowContainer}>
                        <GalleryRow  {...galleries[i]}/>
                        <GalleryRow  {...galleries[i + 1]}/>
                    </div>
                )
            }
        }
        return tmp;
    };

    render(){
        return(
            <div>
                <ModalImage />
                <div className={styles.container}>
                    <h2 className={styles.galleryTitle}>Галерея</h2>
                    <ul className={styles.galleryList}>
                        {
                            this.renderGallery()
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAllGalleryAction: () => dispatch(getAllGalleryAction()),
});

const mapStateToProps = (state) => {
    const { galleries } = state.galleryReducer;
    return {
        galleries
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);


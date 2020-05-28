import React from "react";
import styles from './ModalImage.module.sass'
import connect from 'react-redux/es/connect/connect'
import {changeStatusModalFormAction} from "../../../actions/actionCreator";
import {SERVER_URL} from "../../../api/ConstantURLs";

class ModalImage extends React.Component {
    constructor(props) {
        super(props);
        this.closeWindowHandler = this.closeWindowHandler.bind(this);
    }
    closeWindowHandler() {
        this.props.changeStatusModalFormAction(false, '');
    }
    render() {
        return (
            <>
                {this.props.isActive &&
                <div className={styles.overlay}>
                    <div className={styles.closeButton} onClick={this.closeWindowHandler}>X</div>
                    <div className={styles.modalContainer}>
                        <img src={SERVER_URL + this.props.imageModal.image} alt={this.props.imageModal.title}/>
                    </div>
                </div>
                }
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeStatusModalFormAction: (isActive, status) => dispatch(changeStatusModalFormAction(isActive, status)),
});

const mapStateToProps = (state) => {
    const {isActive, imageModal} = state.helperReducer;
    return {
        isActive,
        imageModal
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalImage);

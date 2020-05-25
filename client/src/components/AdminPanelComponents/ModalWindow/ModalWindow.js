import React from "react";
import styles from './ModalWindow.module.sass'
import connect from 'react-redux/es/connect/connect'
import {createNewsAction, changeStatusModalFormAction, clearInitializeValuesAction} from "../../../actions/actionCreator";

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.closeWindowHandler = this.closeWindowHandler.bind(this);
    }
    closeWindowHandler() {
        this.props.changeStatusModalFormAction(false, '');
        this.props.clearInitializeValuesAction();
    }
    render() {
        const Form = this.props.form;
        return (
            <>
                {this.props.isActive &&
                <div className={styles.overlay}>
                    <div className={styles.modalContainer}>
                        <div className={styles.header}>
                            <span>Заполните все поля формы </span>
                            <span style={{cursor: 'pointer'}} onClick={this.closeWindowHandler}>Х</span>
                        </div>
                        <div>
                            <Form/>
                        </div>
                    </div>
                </div>
                }
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createNewsAction: (formData) => dispatch(createNewsAction(formData)),
    changeStatusModalFormAction: (status) => dispatch(changeStatusModalFormAction(status)),
    clearInitializeValuesAction: () => dispatch(clearInitializeValuesAction())
});

const mapStateToProps = (state) => {
    const {isActive} = state.helperReducer;
    return {
        isActive
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);

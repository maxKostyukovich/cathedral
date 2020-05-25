import React from 'react'
import { Field, reduxForm } from 'redux-form'
import connect from 'react-redux/es/connect/connect'
import { compose } from 'redux';
import styles from './PriestForm.module.sass'
import TextInput from '../../Inputs/TextInput/TextInput'
import TextAreaInput from '../../Inputs/TextAreaInput/TextAreaInput'
import SubmitButton from '../../Buttons/SubmitFormButton/SubmitFormButton'
import FileInput from '../../Inputs/FileInput/FileInput'
import {
    changeStatusModalFormAction,
    createPriestAction,
    updatePriestAction,
    initializePriestAction
} from "../../../../actions/actionCreator";
import {MODAL_FORM_STATUS_MODE} from "../../../../constants/index";
import {nl2br} from "../../../../utils/util";

class PriestForm extends React.Component{
    onFormSubmit =  async (data) => {
        if (this.props.status === MODAL_FORM_STATUS_MODE.CREATE) {
            const {avatar, ...rest} = data;
            const formData = new FormData();
            if (avatar) {
                formData.append('avatar', avatar);
            }
            formData.append('full_name', rest.full_name);
            formData.append('current_position', rest.current_position);
            formData.append('biography', nl2br(rest.biography));
            this.props.createPriestAction(formData);
        }
        if (this.props.status === MODAL_FORM_STATUS_MODE.UPDATE) {
            this.props.updatePriestAction(this.props.initialValues.id, data)
        }
        this.props.changeStatusModalFormAction(false, '');
    };
    render(){
        return(
            <form>
                <div className={styles.container}>
                    <Field name={'full_name'} component={TextInput} type={'text'} label={'ФИО'}/>
                    <Field name={'current_position'} component={TextInput} type={'text'} label={'Сан в настоящее время'}/>
                    <Field name={'biography'} component={TextAreaInput} type={'text'} label={'Биография'}/>
                    <Field name={'avatar'} component={FileInput} label={'Заглавное фото статьи'} accept='.jpg' />
                    <SubmitButton text={this.props.status === MODAL_FORM_STATUS_MODE.CREATE?"Создать запись": 'Редактировать запись'} handler = {this.props.handleSubmit(this.onFormSubmit)} />
                </div>
            </form>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    createPriestAction: (formData) => dispatch(createPriestAction(formData)),
    changeStatusModalFormAction: (isActive, status) => dispatch(changeStatusModalFormAction(isActive, status)),
    updatePriestAction: (id, news) => dispatch(updatePriestAction(id, news)),
    load: (id) => dispatch(initializePriestAction(id))
});

const mapStateToProps = (state) => {
    const {initializePriest} = state.priestReducer;
    const {status} = state.helperReducer;
    return {
        initialValues: initializePriest,
        status
    }
};
export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
    form: 'priestForm',
    enableReinitialize: true
}))(PriestForm);

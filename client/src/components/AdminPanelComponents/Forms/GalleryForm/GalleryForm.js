import React from 'react'
import { Field, reduxForm } from 'redux-form'
import connect from 'react-redux/es/connect/connect'
import { compose } from 'redux';
import styles from './GalleryForm.module.sass'
import TextInput from '../../Inputs/TextInput/TextInput'
import SubmitButton from '../../Buttons/SubmitFormButton/SubmitFormButton'
import FileInput from '../../Inputs/FileInput/FileInput'
import {
    changeStatusModalFormAction,
    createGalleryAction,
    updateGalleryAction,
    initializeGalleryAction
} from "../../../../actions/actionCreator";
import {MODAL_FORM_STATUS_MODE} from "../../../../constants/index";

class GalleryForm extends React.Component{
    onFormSubmit =  async (data) => {
        if (this.props.status === MODAL_FORM_STATUS_MODE.CREATE) {
            const {image, ...rest} = data;
            const formData = new FormData();
            if (image) {
                formData.append('image', image);
            }
            formData.append('title', rest.title);
            this.props.createGalleryAction(formData);
        }
        if (this.props.status === MODAL_FORM_STATUS_MODE.UPDATE) {
            this.props.updateGalleryAction(this.props.initialValues.id, data)
        }
        this.props.changeStatusModalFormAction(false, '');
    };
    render(){
        return(
            <form>
                <div className={styles.container}>
                    <Field name={'title'} component={TextInput} type={'text'} label={'Заголовок'}/>
                    <Field name={'image'} component={FileInput} label={'Картинка'} accept='.jpg' />
                    <SubmitButton text={this.props.status === MODAL_FORM_STATUS_MODE.CREATE?"Создать запись": 'Редактировать запись'} handler = {this.props.handleSubmit(this.onFormSubmit)} />
                </div>
            </form>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    createGalleryAction: (formData) => dispatch(createGalleryAction(formData)),
    changeStatusModalFormAction: (isActive, status) => dispatch(changeStatusModalFormAction(isActive, status)),
    updateGalleryAction: (id, gallery) => dispatch(updateGalleryAction(id, gallery)),
    load: (id) => dispatch(initializeGalleryAction(id))
});

const mapStateToProps = (state) => {
    const {initializeGallery} = state.galleryReducer;
    const {status} = state.helperReducer;
    return {
        initialValues: initializeGallery,
        status
    }
};
export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
    form: 'galleryForm',
    enableReinitialize: true
}))(GalleryForm);

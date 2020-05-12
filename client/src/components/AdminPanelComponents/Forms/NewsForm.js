import React from 'react'
import { Field, reduxForm } from 'redux-form'
import connect from 'react-redux/es/connect/connect'
import { compose } from 'redux';
import styles from './NewsForm.module.sass'
import TextInput from '../Inputs/TextInput/TextInput'
import TextAreaInput from '../Inputs/TextAreaInput/TextAreaInput'
import SubmitButton from '../Buttons/SubmitFormButton/SubmitFormButton'
import FileInput from '../Inputs/FileInput/FileInput'
import DatePicker from '../Inputs/DatePicker/DatePicker'
import {createNewsAction} from "../../../actions/actionCreator";

class NewsForm extends React.Component{
    onFormSubmit =  async (data) => {
        const {main_img, ...rest} = data;
        const date = (new Date(rest.date)).toJSON();
        const formData = new FormData();
        if(main_img){
            formData.append('main_img', main_img);
        }
        formData.append('title', rest.title);
        formData.append('date', date);
        formData.append('short_description', rest.short_description);
        formData.append('content', rest.content);
        this.props.createNewsAction(formData);
    };
    render(){
        return(
            <form>
                <div className={styles.container}>
                    <Field name={'title'} component={TextInput} type={'text'} label={'Заголовок'}/>
                    <Field name={'short_description'} component={TextInput} type={'text'} label={'Краткое описание'}/>
                    <Field name={'content'} component={TextAreaInput} type={'text'} label={'Основной текст статьи'}/>
                    <Field name={'date'} component={DatePicker} type={'text'} showTime={false} label={'Дата публикации'}/>
                    <Field name={'main_img'} component={FileInput} label={'Заглавное фото статьи'} accept='.jpg' />
                    <SubmitButton text={"Создать новость"} handler = {this.props.handleSubmit(this.onFormSubmit)} />
                </div>
            </form>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    createNewsAction: (formData) => dispatch(createNewsAction(formData)),

});

const mapStateToProps = (state) => {
 return {

 }
};

export default compose(connect(null,mapDispatchToProps),reduxForm({
    form: 'newsForm',
}))(NewsForm);

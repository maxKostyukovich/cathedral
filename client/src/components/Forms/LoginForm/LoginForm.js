import React from 'react'
import styles from './LoginForm.module.sass'
import { Field, reduxForm } from 'redux-form'
import connect from 'react-redux/es/connect/connect'
import { compose } from 'redux';
import {loginAction} from '../../../actions/actionCreator'
import TextInput from '../../AdminPanelComponents/Inputs/TextInput/TextInput'
import SubmitButton from '../../AdminPanelComponents/Buttons/SubmitFormButton/SubmitFormButton'

class LoginForm extends React.Component {

    onFormSubmit = (data) =>{
        this.props.loginAction(data);
    };
    render() {
        return(

            <form className={styles.container}>
                <h2 className={styles.title}>Форма входа в Панель Администратора</h2>
                <div className={styles.formContainer}>
                    <Field name={'email'} component={TextInput} type={'text'} label={'Email'}/>
                    <Field name={'password'} component={TextInput} type={'password'} label={'Пароль'}/>
                    <SubmitButton text={'Войти'} handler={this.props.handleSubmit(this.onFormSubmit)}/>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(loginAction(data)),
});

const mapStateToProps = (state) => {
    return {

    }
};

export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
    form: 'loginForm',
}))(LoginForm);

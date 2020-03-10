import React from 'react'
import styles from './LoginForm.module.sass'
import { Field, reduxForm } from 'redux-form'
import connect from 'react-redux/es/connect/connect'
import { compose } from 'redux';
import {loginAction} from '../../../actions/actionCreator'

class LoginForm extends React.Component {

    onFormSubmit = (data) =>{
        this.loginAction(data);
    };
    render() {
        return(
            <form>
                <div className={styles.container}>
                    <Field name={'email'} component={'input'} type={'text'}/>
                    <Field name={'password'} component={'input'} type={'password'}/>
                    <button onClick={this.props.handleSubmit(this.onFormSubmit)}>Submit button</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(data),
});

const mapStateToProps = (state) => {
    return {
        
    }
};

export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
    form: 'loginForm',
}))(LoginForm);
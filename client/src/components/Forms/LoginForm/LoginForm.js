import React from 'react'
import styles from './LoginForm.module.sass'
import { Field, reduxForm } from 'redux-form'
import connect from 'react-redux/es/connect/connect'
import { compose } from 'redux';

class LoginForm extends React.Component {

    onFormSubmit = (data) =>{
        console.log(data);
    };
    render() {
        return(
            <form>
                <div className={styles.container}>
                    <Field name={'login'} component={'input'} type={'text'}/>
                    <Field name={'password'} component={'input'} type={'password'}/>
                    <button onClick={this.props.handleSubmit(this.onFormSubmit)}>Submit button</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => {
    return {

    }
};

export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
    form: 'loginForm',
}))(LoginForm);
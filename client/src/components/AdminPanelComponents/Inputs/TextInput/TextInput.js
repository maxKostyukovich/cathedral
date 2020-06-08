import React from 'react'
import styles from './TextInput.module.sass'

class TextInput extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <label>{this.props.label}</label>
                <input className={styles.textInput}  {...this.props.input} type={this.props.type}  />
            </div>
        )
    }
}
export default TextInput;

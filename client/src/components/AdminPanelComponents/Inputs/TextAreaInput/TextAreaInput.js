import React from 'react'
import styles from './TextAreaInput.module.sass'

class TextAreaInput extends React.Component{
    render(){
        return(
                <div className={styles.container}>
                    <label>{this.props.label}</label>
                    <textarea className={styles.textAreaInput}  {...this.props.input} />
                </div>
        )
    }
}

export default TextAreaInput;

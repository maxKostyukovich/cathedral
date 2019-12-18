import React from 'react'
import styles from './SubmitFormButton.module.sass'

class SubmitFormButton extends React.Component{
    render(){
        return(
            <div onClick={this.props.handler} className={styles.container}>
                <span>{this.props.text}</span>
            </div>
        )
    }

}

export default SubmitFormButton;
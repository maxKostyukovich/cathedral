import React from 'react'
import styles from './FileInput.module.sass'

class FileInput extends React.Component {
    adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);
    render() {
        const {input: {value: omitValue, onChange, onBlur, ...inputProps}} = this.props;
        const onChangeFile = (e) => {
            document.getElementById('fileName').textContent = e.target.files[0].name;
            onChange(e.target.files[0]);
        };

        return (

        <div className={styles.container}>
            <label className={styles.labelButton}>
                Choose file
                <input onChange={onChangeFile}
                       onBlur={this.adaptFileEventToValue(onBlur)}
                       type="file"
                       {...inputProps}
                       className={styles.inputFile}
                       />
                <p className={styles.fileName} id={'fileName'}></p>
            </label>

        </div>
    )
    }

}

export default FileInput;

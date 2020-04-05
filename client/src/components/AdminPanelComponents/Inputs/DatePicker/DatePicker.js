import React from 'react'
import styles from './DatePicker.module.sass'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import momentLocalizer  from 'react-widgets-moment'
import moment from 'moment'
import 'react-widgets/dist/css/react-widgets.css'

export default function ({ input: { onChange, value }, showTime, label }) {
    moment.locale('en');
    momentLocalizer();
    return(
        <div className={styles.container}>
            <label>{label}</label>
            <DateTimePicker
                onChange={onChange}
                format="YYYY-MM-DD"
                time={showTime}
               // value={!value ? null : new Date(value)}
            />
        </div>
    )

}
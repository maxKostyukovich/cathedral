import React from 'react'
import styles from './TablePage.module.sass'

class TablePage  extends React.Component{
    render() {
        const Table = this.props.table;
        return (
            <div className={styles.container}>
                <h1>{this.props.text.title}</h1>
                <Table {...this.props} data={this.props.data}/>
            </div>
        )
    }
}
export default TablePage

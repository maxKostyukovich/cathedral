import React from 'react'
import styles from './DataList.module.sass'
import history from "../../../history";
import {getAllNewsAction, getAllPriestsAction} from "../../../actions/actionCreator";

class DataList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
    }

    renderListItems() {
        if (!this.props.data) {
            return
        }
        const data = this.props.data;
        console.log(data)
        if (data.length < 1){
            return;
        }
        const header = []
        for (const key in data[0]) {
            if (data[0].hasOwnProperty(key))
            header.push(
                <div className={styles.headerItem}><span>{key}</span></div>
            )
        }
        const info = [];
        for (const item of data) {
            const itemColumn = [];
            for (const key in item) {
                if (item.hasOwnProperty(key))
                itemColumn.push(
                    <div key={item[key] + item['id']} className={styles.item}>
                        <span>{item[key]}</span>
                    </div>
                )
            }
            info.push(
                <div className={styles.row}>
                    { itemColumn }
                </div>
            )
        }
        return [header, info];
    }
    render() {
        const render = this.renderListItems()
        this.renderListItems();
        return (
            <div className={styles.listContainer}>
                <div className={styles.listHeader}>
                    {
                        render? render[0]: ''
                    }
                </div>
                {
                    render? render[1]: ''
                }

            </div>
        )
    }
}

export default DataList;

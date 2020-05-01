import React from 'react'
import styles from './AdminPanel.module.sass'
import LeftSideBar from '../../components/AdminPanelComponents/SideBar/LeftSideBar/LeftSideBar'
import NewsForm from '../../components/AdminPanelComponents/Forms/NewsForm'

class AdminPanelPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: true
        }
    }

    menuClickHandler = () => {
        this.setState((currentState) => ({
            isMenuOpen: !currentState.isMenuOpen
        }))
    }

    render() {
        return (
            <>
                <LeftSideBar menuClickHandler={this.menuClickHandler} isMenuOpen={this.state.isMenuOpen}/>
                <div className={styles.header}>

                </div>
                <div className={styles.container}>
                    {/*<NewsForm/>*/}

                </div>
            </>
        )
    }

}

export default AdminPanelPage;

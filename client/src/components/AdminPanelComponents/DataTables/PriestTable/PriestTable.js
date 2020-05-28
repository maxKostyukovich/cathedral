import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {SERVER_URL} from '../../../../api/ConstantURLs';
import styles from './PriestTable.module.sass'
import trash from '../../../../images/trash.png';
import edit from '../../../../images/edit.png';
import plus from '../../../../images/plus-thick.png';
import connect from 'react-redux/es/connect/connect'
import {deletePriestAction, changeStatusModalFormAction, initializePriestAction} from "../../../../actions/actionCreator";
import ModalWindow from "../../ModalWindow/ModalWindow";
import {MODAL_FORM_STATUS_MODE} from "../../../../constants";
import PriestForm from "../../Forms/PriestForm/PriestForm";
import {getImageName} from "../../../../utils/util";

const useStyles = makeStyles({
    table: {
        minWidth: 550
    },
});
const cutLongText = (text) => {
    const limit = 60;
    if (text.length > limit) {
        return text.slice(0, limit - 4) + ' ...'
    }
    return text
};

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#333333',
        color: theme.palette.common.white,
        fontSize: '18px'
    },
    body: {
        fontSize: 14,

    },
}))(TableCell);

function PriestTable(props) {
    const onTrashClickHandler = (id) => {
        return () => {
            const isConfirm = window.confirm(`Вы уверены что хотите удалить запись с id ${id}`)
            if (isConfirm) {
                props.deletePriestAction(id)
            }
        }
    }
    const openCreateModalWindow = () => {
        props.changeStatusModalFormAction(true, MODAL_FORM_STATUS_MODE.CREATE);
    }
    const openEditModalWindow = (id) => {
        return () => {
            props.initializePriestAction(id);
            props.changeStatusModalFormAction(true, MODAL_FORM_STATUS_MODE.UPDATE);
        }
    }

    const classes = useStyles();
    const data = props.data;
    return (
        <>
            <ModalWindow form={PriestForm}/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead style={{backgroundColor: 'black', color: 'white'}}>
                        <TableRow>
                            <StyledTableCell align={'center'}>id</StyledTableCell>
                            <StyledTableCell align="left">ФИО</StyledTableCell>
                            <StyledTableCell>Должность</StyledTableCell>
                            <StyledTableCell align="center">Аватар</StyledTableCell>
                            <StyledTableCell align="center">
                                <div className={styles.addButton} onClick={openCreateModalWindow}>
                                    <span>Add</span>
                                    <img style={{width: '20px', height: '20px'}} src={plus} alt={'Create news'} />
                                </div>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.full_name}</StyledTableCell>
                                <StyledTableCell>{row.current_position}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <a href={SERVER_URL + row.avatar}>{getImageName(row.avatar)}</a>
                                </StyledTableCell>
                                <StyledTableCell align="center" className={styles.editCell}>
                                    <div className={styles.icon} onClick={openEditModalWindow(row.id)}>
                                        <img src={edit} alt={'edit'}/>
                                    </div>
                                    <div className={styles.icon} onClick={onTrashClickHandler(row.id)}>
                                        <img src={trash} alt={'trash'}/>
                                    </div>
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    deletePriestAction: (id) => dispatch(deletePriestAction(id)),
    changeStatusModalFormAction: (isActive, status) => dispatch(changeStatusModalFormAction(isActive, status)),
    initializePriestAction: (id) => dispatch(initializePriestAction(id))
});

const mapStateToProps = (state) => {
    const {priests} = state.priestReducer;
    return {
        priests
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PriestTable)

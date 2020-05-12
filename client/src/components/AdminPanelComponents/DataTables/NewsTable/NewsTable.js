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
import styles from './NewsTable.module.sass'
import trash from '../../../../images/trash.png';
import edit from '../../../../images/edit.png';
import plus from '../../../../images/plus.png';
import connect from 'react-redux/es/connect/connect'
import {deleteNewsAction, changeStatusModalFormAction} from "../../../../actions/actionCreator";
import ModalWindow from "../../ModalWindow/ModalWindow";
import NewsForm from "../../Forms/NewsForm";

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
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: '18px'
    },
    body: {
        fontSize: 14,

    },
}))(TableCell);

function NewsTable(props) {
    const onTrashClickHandler = (id) => {
        return () => {
            const isConfirm = window.confirm(`Вы уверены что хотите удалить запись с id ${id}`)
            if (isConfirm) {
                props.deleteNewsAction(id)
            }
        }
    }
    const openModalWindow = () => {
        props.changeStatusModalFormAction(true);
    }
    const classes = useStyles();
    const data = props.data;
    return (
        <>
            <ModalWindow form={NewsForm}/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead style={{backgroundColor: 'black', color: 'white'}}>
                        <TableRow>
                            <StyledTableCell align={'center'}>id</StyledTableCell>
                            <StyledTableCell align="center">Title</StyledTableCell>
                            <StyledTableCell>Short description</StyledTableCell>
                            <StyledTableCell align="center">Date</StyledTableCell>
                            <StyledTableCell align="center">Main image</StyledTableCell>
                            <StyledTableCell align="center">
                                <img style={{width: '40px', height: '40px'}} src={plus} alt={'Create news'} onClick={openModalWindow}/>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.title}</StyledTableCell>
                                <StyledTableCell>{cutLongText(row.short_description)}</StyledTableCell>
                                <StyledTableCell align="center">{row.date}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <a href={SERVER_URL + row.main_img}>{row.main_img.split('/')[3]}</a>
                                </StyledTableCell>
                                <StyledTableCell align="center" className={styles.editCell}>
                                    <div className={styles.icon}>
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
    deleteNewsAction: (id) => dispatch(deleteNewsAction(id)),
    changeStatusModalFormAction: (status) => dispatch(changeStatusModalFormAction(status)),
});

const mapStateToProps = (state) => {
    const {news} = state.newsReducer;
    return {
        news
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NewsTable)

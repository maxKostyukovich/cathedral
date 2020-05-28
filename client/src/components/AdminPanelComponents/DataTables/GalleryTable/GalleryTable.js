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
import styles from './GalleryTable.module.sass'
import trash from '../../../../images/trash.png';
import edit from '../../../../images/edit.png';
import plus from '../../../../images/plus-thick.png';
import connect from 'react-redux/es/connect/connect'
import {deleteGalleryAction, changeStatusModalFormAction, initializeGalleryAction} from "../../../../actions/actionCreator";
import ModalWindow from "../../ModalWindow/ModalWindow";
import {MODAL_FORM_STATUS_MODE} from "../../../../constants";
import GalleryForm from '../../Forms/GalleryForm/GalleryForm'
import {getImageName} from '../../../../utils/util'

const useStyles = makeStyles({
    table: {
        minWidth: 450
    },
});

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

function GalleryTable(props) {
    const onTrashClickHandler = (id) => {
        return () => {
            const isConfirm = window.confirm(`Вы уверены что хотите удалить запись с id ${id}`);
            if (isConfirm) {
                props.deleteGalleryAction(id)
            }
        }
    }
    const openCreateModalWindow = () => {
        props.changeStatusModalFormAction(true, MODAL_FORM_STATUS_MODE.CREATE);
    }
    const openEditModalWindow = (id) => {
        return () => {
            props.initializeGalleryAction(id);
            props.changeStatusModalFormAction(true, MODAL_FORM_STATUS_MODE.UPDATE);
        }
    }

    const classes = useStyles();
    const data = props.data;
    return (
        <>
            <ModalWindow form={GalleryForm}/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align={'center'}>id</StyledTableCell>
                            <StyledTableCell align="center">Название</StyledTableCell>
                            <StyledTableCell align="center">Картинка</StyledTableCell>
                            <StyledTableCell align="right">
                                <div className={styles.addButton} onClick={openCreateModalWindow}>
                                    <span>Add</span>
                                    <img style={{width: '20px', height: '20px'}} src={plus} alt={'Create gallery'} />
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
                                <StyledTableCell align="center">{row.title}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <a href={SERVER_URL + row.image}>{getImageName(row.image)}</a>
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
    deleteGalleryAction: (id) => dispatch(deleteGalleryAction(id)),
    changeStatusModalFormAction: (isActive, status) => dispatch(changeStatusModalFormAction(isActive, status)),
    initializeGalleryAction: (id) => dispatch(initializeGalleryAction(id))
});

const mapStateToProps = (state) => {
    const {galleries} = state.galleryReducer;
    return {
        galleries
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(GalleryTable)

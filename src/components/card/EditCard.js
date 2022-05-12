import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCardTitle, delCard } from "../../redux/actions";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles, Button, Modal, TextField, Grid } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from "@material-ui/pickers";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
const useStyles = makeStyles((theme) => ({
  cardEdit: {
    padding: "50px",
    width: "50%",
    backgroundColor: "#fff",
    borderRadius: "5px",
    outline: "none",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  editBtn: {
    paddingTop: "10px",
  },
}));
const EditCard = ({ listId, open, handleClose, cardId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const card = useSelector((state) => state.cardsByIdReducer[cardId]);
  const [cardTitle, setCardTitle] = useState(card.text || "");
  const handleChangeCardTitle = (e) => setCardTitle(e.target.value);
  const [cardDescription, setCardDescription] = useState(card.desc || "");
  const handleChangeCardDescription = (e) => setCardDescription(e.target.value);
  const [cardDate, setCardDate] = useState(new Date());
  const editCard = () => {
    handleClose();
    dispatch(changeCardTitle({
      cardId: card._id,
      cardTitle: cardTitle,
      cardDescription,
      cardDate: cardDate && cardDate.toISOString(),
    }));
  };
  const deleteCard = () => dispatch(delCard({ cardId: card._id, listId }));
  return (
    <Modal className={classes.modal} open={open} onClose={handleClose}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        className={classes.cardEdit}
      >
        <Grid container direction="column" justify="center">
          <TextField
            label="Title"
            value={cardTitle}
            onChange={handleChangeCardTitle}
          />
          <TextField
            label="Description"
            value={cardDescription}
            onChange={handleChangeCardDescription}
          />
          <Grid className={classes.editBtn} container justify="space-evenly">
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<SaveIcon />}
              onClick={() => editCard()}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={deleteCard}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};
export default EditCard;

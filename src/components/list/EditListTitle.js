import { ClickAwayListener, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeListTitle, delList } from "../../redux/actions";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
const EditListTitle = ({ listId, toggleEditingTitle }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listsByIdReducer[listId]);
  const [listTitle, setListTitle] = useState(list.title);
  const handleChangeListTitle = (e) => setListTitle(e.target.value);
  const editListTitle = () => {
    toggleEditingTitle();
    dispatch(changeListTitle({ listId, listTitle: listTitle }));
  };
  const deleteList = () => dispatch(delList({ listId, cards: list.cards }));
  const handleClickAwayList = () => {
    editListTitle();
  };
  return (
    <ClickAwayListener onClickAway={handleClickAwayList}>
      <Grid container justify="space-between" alignItems="center">
        <TextField
          value={listTitle}
          variant="outlined"
          size="small"
          margin="dense"
          onChange={handleChangeListTitle}
        />
        <SaveIcon onClick={editListTitle} />
        <DeleteIcon onClick={deleteList} />
      </Grid>
    </ClickAwayListener>
  );
};
export default EditListTitle;

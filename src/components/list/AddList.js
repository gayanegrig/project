import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, TextField, Button } from "@material-ui/core";
import { addList } from "../../redux/actions";
const AddList = ({ toggleAddingList }) => {
  const dispatch = useDispatch();
  const [listTitle, setListTitle] = useState("");
  const handleChangeListTitle = (e) => setListTitle(e.target.value);
  const createList = () => {
    toggleAddingList();
    dispatch(addList({ listId: uuidv4(), listTitle: listTitle }));
  };
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      createList();
    }
  };
  return (
    <Grid container direction="column" style={{ height: 'fit-content', width: '270px', minWidth: '270px' }}>
      <TextField
        placeholder="Column name"
        variant="outlined"
        size="small" margin="dense"
        value={listTitle}
        onChange={handleChangeListTitle}
        onKeyDown={onEnter}
      />
      <Grid container alignItems="center">
        <Button onClick={createList}>ADD COLUMN</Button>
        <CloseIcon onClick={toggleAddingList} />
      </Grid>
    </Grid>
  );
};
export default AddList;


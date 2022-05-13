import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { moveCard } from "../redux/actions";
import List from "./list/List";
import AddList from "./list/AddList";
import { Button, makeStyles, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  board: {
    height: "95vh",
    display: "flex",
    backgroundColor: "#656768",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    overflowX: "auto",
  },
  button: {
    width: "272px",
    minWidth: "272px",
    height: "40px",
    backgroundColor: "#6a665a",
    color: "#fff",
  },
}));
const Board = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const board = useSelector((state) => state.boardReducer);
  const [addingList, setAddingList] = useState(false);
  const toggleAddingList = () => setAddingList(!addingList);
  const handleDragEnd = ({ source, destination }) => {
    if (!destination)
      return;
    if (source.index !== destination.index ||
      source.droppableId !== destination.droppableId) {
      dispatch(moveCard({
        sourceListId: source.droppableId,
        destListId: destination.droppableId,
        oldCardIndex: source.index,
        newCardIndex: destination.index,
      }));
    }
  };
  const addList = addingList ? (
    <AddList
      toggleAddingList={toggleAddingList}
    />) : (<Button
      variant="outlined"
      className={classes.button}
      startIcon={<AddIcon />}
      onClick={toggleAddingList}
    >
      Add column
    </Button>
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="COLUMN">
        {(provided, snapshot) => (
          <Grid className={classes.board} ref={provided.innerRef}>
            {board.lists.map((listId) => (
              <List listId={listId} key={listId} />
            ))}
            {provided.placeholder}
            {addList}
          </Grid>
        )}
      </Droppable>
    </DragDropContext>);
};
export default Board;
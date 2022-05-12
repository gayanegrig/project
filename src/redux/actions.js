import { createAction } from "@reduxjs/toolkit";


export const addList = createAction("ADD_LIST");
export const moveList = createAction("MOVE_LIST");
export const delList = createAction("DELETE_LIST");
export const changeListTitle = createAction("CHANGE_LIST_TITLE");


export const addCard = createAction("ADD_CARD");
export const moveCard = createAction("MOVE_CARD");
export const delCard = createAction("DELETE_CARD");
export const changeCardTitle = createAction("CHANGE_CARD_TITLE");

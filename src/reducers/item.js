import {
  APPEND_ITEM, REMOVE_ITEM, SET_NUMBER_PAGE, SET_ITEMS_ON_PAGE,
} from '../actions';

const initialState = {
  todos: [],
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_ITEM:
      return state;
    case REMOVE_ITEM:
      return state;
    case SET_NUMBER_PAGE:
      return state;
    case SET_ITEMS_ON_PAGE:
      return state;
    default:
      return state;
  }
};

export default items;

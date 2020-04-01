/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import {
  APPEND_ITEM, REMOVE_ITEM, SET_NUMBER_PAGE, SET_ITEMS_ON_PAGE, DONE_ITEM,
} from '../actions';

const initialState = {
  todos: [],
  pageNumber: 0,
  todosOnPage: 30,
  isReverse: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_ITEM: {
      const {
        todos, todosOnPage, isReverse,
      } = state;
      const { input } = action.payload;
      const { value } = input.current;
      input.current.focus();
      if (value === '') {
        return state;
      }
      input.current.value = '';
      const pages = Math.ceil((todos.length + 1) / todosOnPage);
      return {
        todos: [
          ...state.todos,
          {
            id: new Date().getTime(),
            date: new Date().toLocaleString(),
            text: value,
            isDone: false,
          },
        ],
        pageNumber: isReverse ? 1 : pages,
      };
    }
    case REMOVE_ITEM: {
      const { id } = action.payload;
      return {
        todos: state.todos.filter(
          todo => todo.id !== id,
        ),
      };
    }
    case DONE_ITEM: {
      const { id } = action.payload;
      return {
        todos: state.todos.map(
          todo => (todo.id === id ? {
            ...todo,
            isDone: !todo.isDone,
          } : todo),
        ),
      };
    }
    case SET_NUMBER_PAGE: {
      return state; }
    case SET_ITEMS_ON_PAGE: {
      return state; }
    default: {
      return state; }
  }
};

export default items;

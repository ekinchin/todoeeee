import {
  APPEND_ITEM, REMOVE_ITEM, SET_NUMBER_PAGE, SET_ITEMS_ON_PAGE, DONE_ITEM, TOGGLE_SORT_DIRECTION,
} from '../actions';

const initialState = {
  todos: [],
  pageNumber: 0,
  todosOnPage: 30,
  isReverse: false,
  currentPage: 0,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    // Добавить запись
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
        isReverse: state.isReverse,
        pageNumber: isReverse ? 1 : pages,
        todosOnPage: state.todosOnPage,
        currentPage: state.currentPage,
      };
    }
    // удалить запись
    case REMOVE_ITEM: {
      const {
        todos, todosOnPage, isReverse,
      } = state;
      const { id } = action.payload;
      const pages = Math.ceil((todos.length + 1) / todosOnPage);
      return {
        todos: state.todos.filter(
          todo => todo.id !== id,
        ),
        isReverse: state.isReverse,
        pageNumber: isReverse ? 1 : pages,
        todosOnPage: state.todosOnPage,
        currentPage: state.currentPage,
      };
    }
    // отметить как выполенную
    case DONE_ITEM: {
      const { id } = action.payload;
      return {
        todos: state.todos.map(
          todo => (todo.id === id ? {
            ...todo,
            isDone: !todo.isDone,
          } : todo),
        ),
        isReverse: state.isReverse,
        pageNumber: state.isReverse,
        todosOnPage: state.todosOnPage,
        currentPage: state.currentPage,
      };
    }
    // сменить страницу
    case SET_NUMBER_PAGE: {
      const { pageNumber } = action.payload;
      return {
        todos: state.todos,
        isReverse: state.isReverse,
        pageNumber,
        todosOnPage: state.todosOnPage,
        currentPage: state.currentPage,
      };
    }
    // задать количество записей на странице
    case SET_ITEMS_ON_PAGE: {
      const { todosOnPage } = action.payload;
      return {
        todos: state.todos,
        isReverse: state.isReverse,
        pageNumber: state.pageNumber,
        todosOnPage,
        currentPage: state.currentPage,
      };
    }
    // изменить направление сортировки
    case TOGGLE_SORT_DIRECTION:
      return {
        todos: state.todos,
        isReverse: !state.isReverse,
        pageNumber: state.pageNumber,
        todosOnPage: state.todosOnPage,
        currentPage: state.currentPage,
      };
    // неописанный экшн
    default: {
      return state; }
  }
};

export default items;

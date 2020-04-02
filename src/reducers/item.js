import {
  APPEND_ITEM, REMOVE_ITEM, SET_NUMBER_PAGE, SET_ITEMS_ON_PAGE, DONE_ITEM, TOGGLE_SORT_DIRECTION,
} from '../actions';

const initialState = {
  todos: [],
  currentPage: 1,
  todosOnPage: 30,
  isReverse: false,
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
        currentPage: isReverse ? 1 : pages,
        todosOnPage: state.todosOnPage,
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
        currentPage: isReverse ? 1 : pages,
        todosOnPage: state.todosOnPage,
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
        currentPage: state.currentPage,
        todosOnPage: state.todosOnPage,
      };
    }
    // сменить страницу
    case SET_NUMBER_PAGE: {
      const { currentPage } = action.payload;
      return {
        todos: state.todos,
        isReverse: state.isReverse,
        // eslint-disable-next-line object-shorthand
        currentPage: currentPage,
        todosOnPage: state.todosOnPage,
      };
    }
    // задать количество записей на странице
    case SET_ITEMS_ON_PAGE: {
      const { todosOnPage } = action.payload;
      return {
        todos: state.todos,
        isReverse: state.isReverse,
        currentPage: state.currentPage,
        todosOnPage,
      };
    }
    // изменить направление сортировки
    case TOGGLE_SORT_DIRECTION:
      return {
        todos: state.todos,
        isReverse: !state.isReverse,
        currentPage: state.currentPage,
        todosOnPage: state.todosOnPage,
      };
    // неописанный экшн
    default: {
      return state; }
  }
};

export default items;

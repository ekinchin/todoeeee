import fileDownload from 'js-file-download';
import {
  APPEND_ITEM, REMOVE_ITEM, SET_NUMBER_PAGE, SET_ITEMS_ON_PAGE, DONE_ITEM, TOGGLE_SORT_DIRECTION,
  DOWNLOAD_FILE, UPLOAD_FILE, UPLOAD_STATUS, SAVE_TO_STORAGE, RESTORE_FROM_STORAGE,
} from '../actions';

const initialState = {
  todos: [],
  currentPage: 1,
  todosOnPage: 30,
  isReverse: false,
  isRestored: false,
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
      const currentPage = isReverse ? 1 : pages;
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
        currentPage,
        todosOnPage: state.todosOnPage,
        isRestored: state.isRestored,
      };
    }
    // удалить запись
    case REMOVE_ITEM: {
      const {
        todos, todosOnPage, isReverse,
      } = state;
      const { id } = action.payload;
      const pages = Math.ceil((todos.length + 1) / todosOnPage);
      const currentPage = isReverse ? 1 : pages;
      return {
        todos: state.todos.filter(
          todo => todo.id !== id,
        ),
        isReverse: state.isReverse,
        currentPage,
        todosOnPage: state.todosOnPage,
        isRestored: state.isRestored,
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
        isRestored: state.isRestored,
      };
    }
    // сменить страницу
    case SET_NUMBER_PAGE: {
      const { currentPage } = action.payload;
      return {
        todos: state.todos,
        isReverse: state.isReverse,
        currentPage,
        todosOnPage: state.todosOnPage,
        isRestored: state.isRestored,
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
        isRestored: state.isRestored,
      };
    }
    // изменить направление сортировки
    case TOGGLE_SORT_DIRECTION:
      return {
        todos: state.todos,
        isReverse: !state.isReverse,
        currentPage: state.currentPage,
        todosOnPage: state.todosOnPage,
        isRestored: state.isRestored,
      };
    // скачать
    case DOWNLOAD_FILE: {
      fileDownload(JSON.stringify(state.todos), 'history.json');
      return state; }
    // загрузить
    case UPLOAD_FILE: {
      const { status, todos } = action.payload;
      switch (status) {
        case UPLOAD_STATUS.READY: {
          const pages = Math.ceil((todos.length + 1) / state.todosOnPage);
          return {
            todos,
            isReverse: state.isReverse,
            currentPage: state.isReverse ? 1 : pages,
            todosOnPage: state.todosOnPage,
            isRestored: state.isRestored,
          };
        }
        default: {
          return state;
        }
      }
    }
    case SAVE_TO_STORAGE: {
      const {
        todos, currentPage, todosOnPage, isReverse,
      } = state;
      localStorage.setItem('todos', JSON.stringify(todos));
      localStorage.setItem('currentPage', JSON.stringify(currentPage));
      localStorage.setItem('todosOnPage', JSON.stringify(todosOnPage));
      localStorage.setItem('isReverse', JSON.stringify(isReverse));
      return state;
    }
    case RESTORE_FROM_STORAGE: {
      if (typeof localStorage.todos !== 'undefined' && typeof localStorage.isReverse !== 'undefined'
      && typeof localStorage.todosOnPage !== 'undefined' && typeof localStorage.currentPage !== 'undefined') {
        const {
          todos, currentPage, todosOnPage, isReverse,
        } = localStorage;
        return {
          todos: JSON.parse(todos),
          currentPage: JSON.parse(currentPage),
          todosOnPage: JSON.parse(todosOnPage),
          isReverse: JSON.parse(isReverse),
          isRestored: true,
        };
      }
      return state;
    }
    // неописанный экшн
    default: {
      return state; }
  }
};

export default items;

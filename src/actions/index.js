export const TOGGLE_SORT_DIRECTION = 'TOGGLE_SORT_DIRECTION'; // изменение порядка сортировки
export const APPEND_ITEM = 'APPEND_ITEM'; // добавить запись
export const REMOVE_ITEM = 'REMOVE_ITEM'; // удалить запись
export const DONE_ITEM = 'DONE_ITEM'; // отметить запись как выполненную
export const SET_ITEMS_ON_PAGE = 'SET_ITEMS_ON_PAGE'; // задать количество записей на странице
export const SET_NUMBER_PAGE = 'SET_NUMBER_PAGE'; // задать номер текущей страницы

export const toggleSortDirection = () => ({
  type: TOGGLE_SORT_DIRECTION,
});

export const appendItem = input => ({
  type: APPEND_ITEM,
  payload: { input },
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: { id },
});

export const doneItem = id => ({
  type: DONE_ITEM,
  payload: { id },
});

export const setItemsOnPage = todosOnPage => ({
  type: SET_ITEMS_ON_PAGE,
  payload: { todosOnPage },
});

export const setPage = currentPage => ({
  type: SET_NUMBER_PAGE,
  payload: { currentPage },
});

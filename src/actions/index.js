export const TOGGLE_SORT_DIRECTION = 'TOGGLE_SORT_DIRECTION'; // изменение порядка сортировки
export const APPEND_ITEM = 'APPEND_ITEM'; // добавить запись
export const REMOVE_ITEM = 'REMOVE_ITEM'; // удалить запись
export const SET_DONE_ITEM = 'DONE_ITEM'; // отметить запись как выполненную
export const SET_ITEMS_ON_PAGE = 'SET_ITEMS_ON_PAGE'; // задать количество записей на странице
export const SET_NUMBER_PAGE = 'SET_NUMBER_PAGE'; // задать номер текущей страницы

export const toggleSortDirection = () => ({
  type: TOGGLE_SORT_DIRECTION,
});

export const appendItem = content => ({
  type: APPEND_ITEM,
  payload: content,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const setDoneItem = id => ({
  type: SET_DONE_ITEM,
  payload: id,
});

export const setItemsOnPage = items => ({
  type: SET_DONE_ITEM,
  payload: items,
});

export const setNumberPage = page => ({
  type: SET_DONE_ITEM,
  payload: page,
});

export const TOGGLE_SORT_DIRECTION = 'TOGGLE_SORT_DIRECTION'; // изменение порядка сортировки
export const APPEND_ITEM = 'APPEND_ITEM'; // добавить запись
export const REMOVE_ITEM = 'REMOVE_ITEM'; // удалить запись
export const DONE_ITEM = 'DONE_ITEM'; // отметить запись как выполненную
export const SET_ITEMS_ON_PAGE = 'SET_ITEMS_ON_PAGE'; // задать количество записей на странице
export const SET_NUMBER_PAGE = 'SET_NUMBER_PAGE'; // задать номер текущей страницы
export const DOWNLOAD_FILE = 'DOWNLOAD_FILE'; // задать количество записей на странице
export const UPLOAD_FILE = 'UPLOAD_FILE'; // задать номер текущей страницы

export const UPLOAD_STATUS = {
  REQUEST: 'REQUEST', FETCHING: 'FETCHING', READY: 'READY', FAIL: 'FAIL',
};

const uploadFetching = () => ({
  type: UPLOAD_FILE,
  payload: { status: UPLOAD_STATUS.FETCHING },
});

const uploadReady = todos => ({
  type: UPLOAD_FILE,
  payload: { status: UPLOAD_STATUS.READY, todos },
});

const uploadFail = fail => ({
  type: UPLOAD_FILE,
  payload: { status: UPLOAD_STATUS.FAILED, fail },
});

export const upload = e => (dispatch) => {
  dispatch(uploadFetching());

  const fileType = 'application/json';
  const blob = e.target.files[0];
  if (blob !== undefined && e.target.files[0].type === fileType) {
    const reader = new FileReader();
    reader.readAsText(blob, 'UTF-8');
    reader.onload = (evt) => {
      try {
        const result = JSON.parse(evt.target.result);
        dispatch(uploadReady(result));
      } catch {
        dispatch(uploadFail('json parsing error'));
      }
    };
  } else {
    dispatch(uploadFail('file type error'));
  }
};

export const download = () => ({
  type: DOWNLOAD_FILE,
});

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

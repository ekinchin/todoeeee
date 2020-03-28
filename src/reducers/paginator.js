import { TOGGLE_SORT_DIRECTION } from '../actions';

const initialState = {
  reverse: false,
};

const paginator = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SORT_DIRECTION:
      return state;
    default:
      return state;
  }
};

export default paginator;

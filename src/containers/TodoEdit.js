import { connect } from 'react-redux';
import TodoEdit from '../components/TodoEdit';
import {
  restoreFromStorage, saveToStorage, toggleSortDirection, setItemsOnPage,
} from '../actions';


const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  saveToStorage: () => dispatch(saveToStorage()),
  restoreFromStorage: () => dispatch(restoreFromStorage()),
  toggleSortDirection: () => dispatch(toggleSortDirection()),
  setItemsOnPage: value => dispatch(setItemsOnPage(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoEdit);

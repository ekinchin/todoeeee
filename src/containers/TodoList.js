import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { removeItem, doneItem } from '../actions';

const mapStateToProps = state => ({
  todos: state.items.todos,
  isReverse: state.items.isReverse,
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeItem(id)),
  onDone: id => dispatch(doneItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

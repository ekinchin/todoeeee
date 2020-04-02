import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { removeItem, doneItem } from '../actions';


const getTodos = (todos, isReverse, todosOnPage, pageNumber) => {
  const todosDir = isReverse ? todos.map(todo => todo).reverse() : todos.map(todo => todo);
  const todosView = todosDir.slice((pageNumber - 1) * todosOnPage, pageNumber * todosOnPage);
  return todosView;
};


const mapStateToProps = state => ({
  todos: getTodos(
    state.items.todos,
    state.items.isReverse,
    state.items.todosOnPage,
    state.items.currentPage,
  ),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeItem(id)),
  onDone: id => dispatch(doneItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

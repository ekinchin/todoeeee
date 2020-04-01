import { connect } from 'react-redux';
import Paginator from '../components/Paginator';
import { toggleSortDirection, setItemsOnPage, setPage } from '../actions';


//  currentPage, pageCount, onChangePage, todosOnPage, onChangeTodosOnPage, onReverse, isReverse,

// eslint-disable-next-line max-len
const pageCountCalc = (itemsCount, todosOnPage) => (itemsCount === 0 ? 1 : Math.ceil(itemsCount / todosOnPage));

const mapStateToProps = state => ({
  currentPage: state.items.currentPage,
  pageCount: pageCountCalc(state.items.todos.length, state.items.todosOnPage),
  isReverse: state.items.isReverse,
  todosOnPage: state.items.todosOnPage,
});

const mapDispatchToProps = dispatch => ({
  onChangeTodosOnPage: todosOnPage => dispatch(setItemsOnPage(todosOnPage)),
  onChangePage: pageNumber => dispatch(setPage(pageNumber)),
  onReverse: () => dispatch(toggleSortDirection()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Paginator);

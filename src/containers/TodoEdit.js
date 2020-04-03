import { connect } from 'react-redux';
import TodoEdit from '../components/TodoEdit';
import { restoreFromStorage, saveToStorage } from '../actions';


const mapStateToProps = state => ({
  isRestored: state.items.isRestored,
  state,
});

const mapDispatchToProps = dispatch => ({
  saveToStorage: () => dispatch(saveToStorage()),
  restoreFromStorage: () => dispatch(restoreFromStorage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoEdit);

import { connect } from 'react-redux';
import TodoInput from '../components/TodoInput';
import { appendItem } from '../actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  onAppend: input => dispatch(appendItem(input)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoInput);

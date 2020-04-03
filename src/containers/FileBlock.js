import { connect } from 'react-redux';
import FileBlock from '../components/FileBlock';
import { download, upload } from '../actions';

const mapStateToProps = state => ({
  todos: state.items.todos,
});

const mapDispatchToProps = dispatch => ({
  onDownload: () => dispatch(download()),
  onUpload: e => dispatch(upload(e)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileBlock);

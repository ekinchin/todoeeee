import React from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import TodoList from '../containers/TodoList';
import TodoInput from '../containers/TodoInput';
import HeaderMenu from './HeaderMenu';
import Paginator from '../containers/Paginator';
// const todosDir = isReverse ? todos.map(todo => todo).reverse() : todos.map(todo => todo);
// const todosView = todosDir.slice((pageNumber - 1) * todosOnPage, pageNumber * todosOnPage);
// const pageCount = todos.length === 0 ? 1 : Math.ceil(todos.length / todosOnPage);
const TodoEdit = ({
  handlerFileDownload, handleFileUpload,
}) => (
  <Container fluid="falses">
    <TodoInput />
    <TodoList />
    <Paginator />
    <HeaderMenu
      onDownload={handlerFileDownload}
      onUpload={handleFileUpload}
    />
  </Container>
);

// class TodoEdit extends Component {
//   constructor(props) {
//     super(props);
//     this.input = React.createRef();
//   }

//   state = {
//     todos: [],
//     isReverse: false,
//     pageNumber: 1,
//     todosOnPage: 10,
//   }

//   componentDidMount() {
//     let saved = [];
//     let isReverse = false;
//     if (typeof localStorage.todos === 'undefined') {
//       saved = '[]';
//     } else {
//       saved = localStorage.todos;
//     }
//     if (typeof localStorage.isReverse === 'undefined') {
//       isReverse = false;
//     } else {
//       // eslint-disable-next-line prefer-destructuring
//       isReverse = localStorage.isReverse;
//     }

//     this.setState(
//       {
//         todos: JSON.parse(saved),
//         isReverse: JSON.parse(isReverse),
//       },
//     );
//     this.input.current.focus();
//   }

//   componentDidUpdate() {
//     const { todos, isReverse } = this.state;
//     localStorage.setItem('todos', JSON.stringify(todos));
//     localStorage.setItem('isReverse', JSON.stringify(isReverse));
//   }

//   handlerAppendTodo = () => {
//     const {
//       todos, todosOnPage, isReverse,
//     } = this.state;
//     const input = this.input.current.value;
//     if (input === '') return;
//     this.input.current.value = '';
//     this.input.current.focus();
//     const pages = Math.ceil((todos.length + 1) / todosOnPage);

//     this.setState(prevState => ({
//       todos: [
//         ...prevState.todos,
//         {
//           id: new Date().getTime(),
//           date: new Date().toLocaleString(),
//           text: input,
//           isDone: false,
//         },
//       ],
//       pageNumber: isReverse ? 1 : pages,
//     }));
//   };

//   handlerDoneTodo = id => () => {
//     this.setState(prevState => ({
//       todos: prevState.todos.map(
//         todo => (todo.id === id ? {
//           ...todo,
//           isDone: !todo.isDone,
//         } : todo),
//       ),
//     }));
//   };

//   handlerRemoveTodo = id => () => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(
//         todo => todo.id !== id,
//       ),
//       pageNumber: 1,
//     }));
//   };

//   handlerFileDownload = () => {
//     const { todos } = this.state;
//     fileDownload(JSON.stringify(todos), 'history.json');
//   }

//   handlerReverseSelect = () => {
//     this.setState(prevState => ({
//       isReverse: !prevState.isReverse,
//       todos: prevState.todos,
//     }));
//   }

//   handleFileUpload = (e) => {
//     const fileType = 'application/json';
//     const blob = e.target.files[0];
//     if (blob !== undefined && e.target.files[0].type === fileType) {
//       const reader = new FileReader();
//       reader.readAsText(blob, 'UTF-8');
//       reader.onload = (evt) => {
//         try {
//           const result = JSON.parse(evt.target.result);
//           this.setState({
//             todos: result,
//           });
//           // eslint-disable-next-line no-alert
//           alert('Загрузка выполнена.');
//         // eslint-disable-next-line no-alert
//         } catch { alert('Ошибка парсинга'); }
//       };
//     }
//   }

//   onChangePage = page => () => {
//     this.setState({
//       pageNumber: page,
//     });
//   }

//   onChangeTodosOnPage = count => () => {
//     const {
//       todos, isReverse,
//     } = this.state;
//     const pages = Math.ceil((todos.length + 1) / count);
//     this.setState({
//       todosOnPage: count,
//       pageNumber: isReverse ? 1 : pages,
//     });
//   }

//   render() {
//     const {
//       todos, isReverse, pageNumber, todosOnPage,
//     } = this.state;
//     const todosDir = isReverse ? todos.map(todo => todo).reverse() : todos.map(todo => todo);
//     const todosView = todosDir.slice((pageNumber - 1) * todosOnPage, pageNumber * todosOnPage);
//     const pageCount = todos.length === 0 ? 1 : Math.ceil(todos.length / todosOnPage);
//     return (
//       <Container fluid="falses">
//         <TodoInput
//           input={this.input}
//           onAppend={this.handlerAppendTodo}
//         />
//         <TodoList
//           todos={todosView.filter(todo => todo.isDone === false)}
//           onDone={this.handlerDoneTodo}
//           onRemove={this.handlerRemoveTodo}
//         />
//         <TodoList
//           todos={todosView.filter(todo => todo.isDone === true)}
//           onDone={this.handlerDoneTodo}
//           onRemove={this.handlerRemoveTodo}
//         />
//         <Paginator
//           currentPage={pageNumber}
//           pageCount={pageCount}
//           onChangePage={this.onChangePage}
//           todosOnPage={todosOnPage}
//           onChangeTodosOnPage={this.onChangeTodosOnPage}
//           isReverse={isReverse}
//           onReverse={this.handlerReverseSelect}
//         />
//         <HeaderMenu
//           onDownload={this.handlerFileDownload}
//           onUpload={this.handleFileUpload}
//         />
//       </Container>
//     );
//   }
// }


export default TodoEdit;

TodoEdit.propTypes = {
  handlerFileDownload: propTypes.func.isRequired,
  handleFileUpload: propTypes.func.isRequired,
};

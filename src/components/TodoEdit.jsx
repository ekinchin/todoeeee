/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import fileDownload from 'js-file-download';
import { Container } from 'react-bootstrap';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import HeaderMenu from './HeaderMenu';
import Paginator from './Paginator';

import 'bootstrap/dist/css/bootstrap.min.css';

class TodoEdit extends Component {
  state = {
    // id: '',
    input: '',
    todos: [],
    isReverse: false,
    pageNumber: 1,
    todosOnPage: 10,
  };

  componentDidMount() {
    let saved = [];
    let isReverse = false;

    if (typeof localStorage.todos === 'undefined') {
      saved = '[]';
    } else {
      saved = localStorage.todos;
    }
    if (typeof localStorage.isReverse === 'undefined') {
      isReverse = false;
    } else {
      // eslint-disable-next-line prefer-destructuring
      isReverse = localStorage.isReverse;
    }

    this.setState(
      {
        todos: JSON.parse(saved),
        isReverse: JSON.parse(isReverse),
      },
    );
  }

  componentDidUpdate() {
    const { todos, isReverse } = this.state;
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('isReverse', JSON.stringify(isReverse));
  }

  handleInputChange = (event) => {
    if (event.target.value === '') return;
    this.setState({
      input: event.target.value,
    });
  }


  handlerAppendTodo = () => {
    const {
      input, todos, todosOnPage, isReverse,
    } = this.state;
    if (input === '') return;
    const pages = Math.ceil((todos.length + 1) / todosOnPage);

    this.setState(prevState => ({
      input: '',
      todos: [
        ...prevState.todos,
        {
          id: new Date().getTime(),
          date: new Date().toLocaleString(),
          text: prevState.input,
          isDone: false,
        },
      ],
      pageNumber: isReverse ? 1 : pages,
    }));
  };

  handlerDoneTodo = id => () => {
    this.setState(prevState => ({
      todos: prevState.todos.map(
        todo => (todo.id === id ? {
          ...todo,
          isDone: !todo.isDone,
        } : todo),
      ),
    }));
  };

  handlerRemoveTodo = id => () => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(
        todo => todo.id !== id,
      ),
      pageNumber: 1,
    }));
  };

  handlerFileDownload = () => {
    const { todos } = this.state;
    fileDownload(JSON.stringify(todos), 'history.json');
  }

  handlerReverseSelect = () => {
    this.setState(prevState => ({
      isReverse: !prevState.isReverse,
      todos: prevState.todos,
    }));
  }

  handleFiles = () => {
    const myUploadedFile = document.getElementById('input').files[0];
    // eslint-disable-next-line no-console
    console.log(myUploadedFile);
  }

  onChangePage = (page) => {
    this.setState({
      pageNumber: page,
    });
  }

  onChangeTodosOnPage = (count) => {
    const {
      todos, isReverse,
    } = this.state;
    const pages = Math.ceil((todos.length + 1) / count);
    this.setState({
      todosOnPage: count,
      pageNumber: isReverse ? 1 : pages,
    });
  }

  render() {
    const {
      input, todos, isReverse, pageNumber, todosOnPage,
    } = this.state;
    const todosDir = isReverse ? todos.map(todo => todo).reverse() : todos.map(todo => todo);
    const todosView = todosDir.slice((pageNumber - 1) * todosOnPage, pageNumber * todosOnPage);
    const pageCount = todos.length === 0 ? 1 : Math.ceil(todos.length / todosOnPage);
    return (
      <Container fluid="falses">
        <HeaderMenu
          onDownload={this.handlerFileDownload}
          onUpload={this.handleFiles}
          onReverse={this.handlerReverseSelect}
          isReverse={isReverse}
        />
        <TodoInput
          value={input}
          onAppend={this.handlerAppendTodo}
          onChange={this.handleInputChange}
        />
        <TodoList
          todos={todosView.filter(todo => todo.isDone === false)}
          onDone={this.handlerDoneTodo}
          onRemove={this.handlerRemoveTodo}
        />
        <TodoList
          todos={todosView.filter(todo => todo.isDone === true)}
          onDone={this.handlerDoneTodo}
          onRemove={this.handlerRemoveTodo}
        />
        <Paginator
          currentPage={pageNumber}
          pageCount={pageCount}
          onChangePage={this.onChangePage}
          todosOnPage={todosOnPage}
          onChangeTodosOnPage={this.onChangeTodosOnPage}
        />
      </Container>
    );
  }
}


export default TodoEdit;

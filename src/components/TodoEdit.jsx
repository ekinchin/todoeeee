import React, { Component } from 'react';
import fileDownload from 'js-file-download';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class TodoEdit extends Component {
  state = {
    // id: '',
    input: '',
    todos: [],
    isReverse: false,
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
    const { input } = this.state;
    if (input === '') return;
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

  render() {
    const { input, todos, isReverse } = this.state;
    const todosDir = isReverse ? todos.map(todo => todo).reverse() : todos.map(todo => todo);
    return (
      <div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <button type="button" className="btn btn-sm btn-success" onClick={this.handlerFileDownload.bind(this)}>скачать</button>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-primary btn-sm" onClick={this.handlerReverseSelect.bind(this)}>
                {isReverse ? 'От новых к старым' : 'От старых к новым'}
              </button>
            </div>
          </div>
        </div>
        <TodoInput
          value={input}
          onAppend={this.handlerAppendTodo}
          onChange={this.handleInputChange}
        />
        <TodoList
          todos={todosDir.filter(todo => todo.isDone === false)}
          onDone={this.handlerDoneTodo}
          onRemove={this.handlerRemoveTodo}
        />
        <TodoList
          todos={todosDir.filter(todo => todo.isDone === true)}
          onDone={this.handlerDoneTodo}
          onRemove={this.handlerRemoveTodo}
        />
      </div>
    );
  }
}


export default TodoEdit;

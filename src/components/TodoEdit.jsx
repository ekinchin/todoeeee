import React, { Component } from 'react';
import fileDownload from 'js-file-download';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class TodoEdit extends Component {
  state = {
    // id: '',
    input: '',
    todos: [],
  };

  componentDidMount() {
    let saved = [];
    if (typeof localStorage.todos === 'undefined') {
      saved = '[]';
    } else {
      saved = localStorage.todos;
    }

    this.setState(
      { todos: JSON.parse(saved) },
    );
  }

  componentDidUpdate() {
    const { todos } = this.state;
    localStorage.setItem('todos', JSON.stringify(todos));
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
    fileDownload(JSON.stringify(todos), 'filename.json');
  }

  render() {
    const { input, todos } = this.state;
    return (
      <div>
        <button type="button" className="btn btn-sm btn-success" onClick={this.handlerFileDownload.bind(this)}>скачать</button>
        <TodoInput
          value={input}
          onAppend={this.handlerAppendTodo}
          onChange={this.handleInputChange}
        />
        <TodoList
          todos={todos.filter(todo => todo.isDone === false)}
          onDone={this.handlerDoneTodo}
          onRemove={this.handlerRemoveTodo}
        />
        <TodoList
          todos={todos.filter(todo => todo.isDone === true)}
          onDone={this.handlerDoneTodo}
          onRemove={this.handlerRemoveTodo}
        />
      </div>
    );
  }
}


export default TodoEdit;

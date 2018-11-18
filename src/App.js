import React, { Component } from 'react';
import Todos from './Todos'
import Input from './Input'
import './App.css';

class App extends Component {
  state={
    input:'',
    todos:[],
  };
  handleInputChange = event => {
    if(event.target.value==='') return;
    this.setState({
      input:event.target.value
    });
  }

  handlerAppendTodo = event => {
    this.setState(prevState => 
      ({
        input:'',
        todos:[
          ...prevState.todos,
          {
            id:new Date().getTime(),
            text:prevState.input,
            isDone:false
          }
        ]
      })
    );
  };
  componentDidMount(){
    let saved = [];
    if(typeof localStorage.todos === 'undefined') {
      saved = '[]';
    }else{
      saved=localStorage.todos;
    }

    this.setState(
      {todos:JSON.parse(saved)}
      );
  };

  componentDidUpdate(){
    localStorage.setItem('todos',JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));

  };

  handlerDoneTodo = id => event => {
    this.setState(prevState => 
      ({
        todos:prevState.todos.map(
          todo => todo.id === id?{
            ...todo,
            isDone:!todo.isDone
          }:todo
        )
      })
    );
  };

  handlerRemoveTodo = id => event => {
    this.setState(prevState => 
      ({
        todos:prevState.todos.filter(
          todo => todo.id !== id
        )
      })
    );
  };

  render(){
    const {input, todos} = this.state;
    return (
      <div className="App">
        <Input value={input} onAppend={this.handlerAppendTodo} onChange={this.handleInputChange} />
        <Todos todos={todos.filter(todo => todo.isDone===false)} onDone={this.handlerDoneTodo} onRemove={this.handlerRemoveTodo}/>
        <Todos todos={todos.filter(todo => todo.isDone===true)} onDone={this.handlerDoneTodo} onRemove={this.handlerRemoveTodo}/>
      </div>
    );
  };
}


export default App;

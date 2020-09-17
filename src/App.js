import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import NewTodo from './containers/TodoList/NewTodo/NewTodo'

import TodoList from './containers/TodoList/TodoList';


function App() {
  return (
    //<div className="App"><TodoList title={'My TODOs'}/></div>
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/todos' exact render={() => <TodoList title="My TODOs!" />} />
          <Route path='/new-todo' exact component={NewTodo} />
          <Redirect exact from='/' to='/todos' />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

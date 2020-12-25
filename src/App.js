import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Main} from './pages/Main';
import {List} from './pages/List';
import {Item} from './pages/Item';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container pt-5">
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/list" component={List}/>
          <Route path="/pokemon/:name" component={Item}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Main">
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

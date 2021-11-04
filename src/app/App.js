import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from '../features/books/Books';
import Categories from '../features/categories/Categories';
import Nav from '../features/nav/Nav';
import './App.css';

const routes = [
  {
    name: 'BOOKS',
    path: '/',
    component: <Books />,
  },
  {
    name: 'CATEGORIES',
    path: '/categories',
    component: <Categories />,
  },
];

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav title="BookStore CMS" routes={routes} />
      <Switch>
        {
          routes.map(
            ({ path, component }) => (
              <Route exact key={path} path={path}>{ component }</Route>
            ),
          )
        }
      </Switch>
    </Router>
  );
}

export default App;

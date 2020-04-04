import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layouts/classicLayout/ClassicLayout';
import Home from './pages/Home';
import Start from './pages/Game/Start';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Layout>
            <Route exact path='/game' component={Start} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default App;

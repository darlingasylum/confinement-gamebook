import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layouts/classicLayout/ClassicLayout';
import Home from './pages/Home';
import Start from './pages/WhoAreYou/Start';
import Celine from './pages/WhoAreYou/Celine/Celine';
import Confine from './pages/WhoAreYou/Confine/Confine';
import JohnMcLane from './pages/WhoAreYou/JohnMcLane/JohnMcLane';
import Polanski from './pages/WhoAreYou/Polanski/Polanski';
import Politique from './pages/WhoAreYou/Politique/Politique';
import Soignant from './pages/WhoAreYou/Soignant/Soignant';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Layout>
            <Switch>
              <Route exact path='/start' component={Start} />
              <Route exact path='/celine' component={Celine} />
              <Route exact path='/confine' component={Confine} />
              <Route exact path='/john' component={JohnMcLane} />
              <Route exact path='/polanskiki' component={Polanski} />
              <Route exact path='/politique' component={Politique} />
              <Route exact path='/soignant' component={Soignant} />
            </Switch>
          </Layout>

          {/* <Route path="/bieres" component={Bieres} />
          <Route path="/apropos" component={Apropos} />
          <Route path="/vente" component={Vente} />
          <Route path="/panier" component={Panier} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/mentionslegales" component={MentionsLegales} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;

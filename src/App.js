import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './platforms/Home';
import { About } from './platforms/About';
import { Contact } from './platforms/Contact';
import { Academia } from './platforms/Academia';
import { Deed } from './platforms/Deed';
import { Economy } from './platforms/Economy';
import { HourNationArc } from './platforms/HourNationArc';
import { Engineering } from './platforms/Engineering';
import { NoMatch } from './platforms/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
        <Router>
          <NavigationBar />
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/Academia" component={Academia} />
              <Route path="/Deed" component={Deed} />
              <Route path="/Economy" component={Economy} />
              <Route path="/HourNationArc" component={HourNationArc} />
              <Route path="/Engineering" component={Engineering} />
              <Route component={NoMatch} />
            </Switch>
          
        </Router>
      </React.Fragment>
  );
}

export default App;

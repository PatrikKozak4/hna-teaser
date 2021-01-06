import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './platforms/Home';
import About from './platforms/About';
import ContactUs from './platforms/ContactUs'
import Test from './platforms/Test';
import Company from './platforms/Company';
import { NoMatch } from './platforms/NoMatch';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css'

function App() {
  return (
    <React.Fragment>
        <Router>
          <NavigationBar/>
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contactus" component={ContactUs} />
              <Route path="/test" component={Test} />
              <Route path="/company" component={Company} />             
              <Route component={NoMatch} />
            </Switch>
          
        </Router>
      </React.Fragment>
  );
}

export default App;

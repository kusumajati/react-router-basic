import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './LandingPage/'
import Currencies from './Currencies/Currencies'
import Mass from './Mass/Mass'
import Saved from './Saved'
import Saved2 from './Saved2'

function App() {
  
  return (

    <div className="App">

      <Router>
        <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/currencies/:string' component={Currencies} />
        </Switch>
        <Route path='/saved' component={Saved} />
        <Route path='/saved2' component={Saved2} ></Route>
      </Router>
    </div>

  );
}


export default App;

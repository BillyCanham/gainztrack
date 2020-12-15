import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';






import ExerciseState from './context/exercise/ExerciseState';

 import './style/app.css';

const App = () => {
  return (
    <ExerciseState>
      <Router>
        <Fragment>
          <Navbar/>
          <div>
          <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/about' component={About} />
       
       
      
       </Switch>
          </div>
        </Fragment>
      </Router>
    </ExerciseState>
  );
};

export default App;

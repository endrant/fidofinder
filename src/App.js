import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import history from './helpers/history';
import Home from './api/home';
import {UserReg} from './components/UserReg';
import {UserLogin} from './components/UserLogin';
//import {UserRoute} from './components/UserRoute';
import {UserAcct} from './components/UserAcct';
import {alertsAct} from './actions/alertsAct';
import {DogForm} from './components/DogForm';
import {DogProf} from './components/DogProf';

class App extends Component {
  constructor(props){
    super(props);

    const {dispatch} = this.props;
        history.listen(()=> {
      //clear alert
      dispatch(alertsAct.clear());
    });
  }

  render() {
   //const {alert} = this.props;
    
    return(
      <div className="container">
        <div>
          <Router history={history}>
            <div>
              <Route path="./api/home" component={Home} />
              <Route path="/login" component={UserLogin} />
              <Route path="/register" component={UserReg} />
              <Route path="/getUser" component={UserAcct} />
              <Route path="/addDog" component={DogForm} />
              <Route path="/getDog" component={DogProf} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {alert} = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};


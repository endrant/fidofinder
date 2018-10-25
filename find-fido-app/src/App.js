import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import history from './helpers/history';
import Home from './api/home';
import {UserReg} from './components/UserReg';
import {UserLogin} from './components/UserLogin';
import {UserRoute} from './components/UserRoute';
import {UserAcct} from './components/UserAcct';
import {alertsAct} from './actions/alertsAct';
//import MsgBoard from './MsgBoard';

class App extends Component {
  constructor(props){
    super(props);

    const {dispatch} = this.props;
        history.listen((location, action)=> {
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
              <Route path="./screens/Home" component={Home} />
              <Route path="/screens/UserLogin" component={UserLogin} />
              <Route path="/screens/UserReg" component={UserReg} />
              <UserRoute exact path="/screens/UserAcct" component={UserAcct} />
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


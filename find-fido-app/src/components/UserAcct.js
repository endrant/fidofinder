import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userAct} from '../actions/userAct';

class UserAcct extends React.Component{
    componentDidMount(){
        this.props.dispatch(userAct.getUser());
    }

    constructor(props){
        super(props);
        //fields for user reg form
        this.state = {
            users: {}
        };
    }

        render(){
        const {users} = this.state;
               
        return(
            <div className="container">
                <div className="profileWelcome">
                    <h1>Welcome, {users.firstName}</h1>
                </div>
                <div className="profileDetails">   
                <div className="row">
                        <div className="column-label">Username: </div>
                        <br />
                        <div className="column-data">{users.username}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">First Name: </div>
                        <div className="column-data">{users.firstName}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Last Name: </div>
                        <div className="column-data">{users.lastName}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Address: </div>
                        <div className="column-data">{users.streetAddress}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">City: </div>
                        <div className="column-data">{users.city}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">State: </div>
                        <div className="column-data">{users.state}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Zip: </div>
                        <div className="column-data">{users.zip}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Email: </div>
                        <div className="column-data">{users.email}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Phone: </div>
                        <div className="column-data">{users.phone}</div>
                    </div>
              </div>
            
              <hr />
                <div className="profileLinks">
                    <div className="formLink">
                        <br />
                        Report a Lost or Found Dog:
                        <Link to="/addDog">Lost/Found Dog Report</Link>
                       </div>
                    <br />
                    <div className="logout"> 
                        Logout of account:<br />
                        <Link to="/login">Logout</Link></div>
                </div>
                <hr />
        
            </div>
            
        );
    };        
}


function mapStateToProps(state){
    const{user, authentication} = state;
    const{users} = authentication;
    
    return {
        user, 
        users
    };
}

const connectedProfile = connect(mapStateToProps)(UserAcct);
export {connectedProfile as UserAcct};
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
            user: { }
        };
    }

        render(){
        const {user} = this.state;
               
        return(
            <div className="container">
                <div className="profileWelcome">
                    <h1>Welcome, {user.firstName}</h1>
                </div>
                <div className="profileDetails">   
                <div className="row">
                        <div className="column-label">Username: </div>
                        <div className="column-data">{user.username}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">First Name: </div>
                        <div className="column-data">{user.firstname}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Last Name: </div>
                        <div className="column-data">{user.lastName}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Address: </div>
                        <div className="column-data">{user.streetAdd}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">City: </div>
                        <div className="column-data">{user.city}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">State: </div>
                        <div className="column-data">{user.state}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Zip: </div>
                        <div className="column-data">{user.zip}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Email: </div>
                        <div className="column-data">{user.email}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Phone: </div>
                        <div className="column-data">{user.phone}</div>
                    </div>
              </div>
            
              <hr />
                <div className="profileLinks">
                    <div className="formLink">
                        <br />
                        To report a Lost or Found dog: <br />
                        <Link to="/dogForm">Report Lost/Found Dog</Link>
                    </div>
                    <br />
                    <div className="logout"> 
                        Logout of account:<br />
                        <Link to="/logout">Logout</Link>
                    </div>
                </div>
                <hr />
        
            </div>
            
        );
    };        
}


function mapStateToProps(state){
    const{users, authentication} = state;
    const{user} = authentication;
    
    return {
        user, 
        users
    };
}

const connectedProfile = connect(mapStateToProps)(UserAcct);
export {connectedProfile as UserAcct};
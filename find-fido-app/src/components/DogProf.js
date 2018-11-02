import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {dogAct} from '../actions/dogAct';

class DogProf extends React.Component{
    componentDidMount(){
        this.props.dispatch(dogAct.getDog());
    }

    constructor(props){
        super(props);
        //fields for user reg form
        this.state = {
            dog: { }
        };
    }

        render(){
        const {dog} = this.props;
               
        return(
            <div className="container">
                <div className="profileWelcome">
                    <h1>Lost/Found Dog Profile</h1>
                </div>
                <div className="profileDetails">   
                <div className="row">
                        <div className="column-label">Lost/Found: </div>
                        <br />
                        <div className="column-data">{dog.lostFound}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Name: </div>
                        <div className="column-data">{dog.name}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Sex: </div>
                        <div className="column-data">{dog.sex}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Breed: </div>
                        <div className="column-data">{dog.breed}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Color: </div>
                        <div className="column-data">{dog.color}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Distinguishing Marks: </div>
                        <div className="column-data">{dog.uniqMarks}</div>
                    </div>
                    <div className="row">
                        <div className="column-label">Locations: </div>
                        <div className="column-data">{dog.location}</div>
                    </div>
                </div>
            
              <hr />
                <div className="profileLinks">
                    <div className="formLink">
                        <br />
                        Return to Account:
                        <Link to="/getUser">My Account</Link>
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
    const{users, user} = state;
    
    return {
        user, 
        users
    };
}

const connectedProfile = connect(mapStateToProps)(DogProf);
export {connectedProfile as DogProf};
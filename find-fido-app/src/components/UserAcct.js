import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userAct} from '../actions/userAct';

class UserAcct extends React.Component{
    componentDidMount(){
        this.props.dispatch(userAct.getUser());
    }

    constructor(props){
        super(props)
            this.state = {
               user: {
                    username: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    streetAdd: '',
                    city: '',
                    state: '',
                    zip: '' ,
                    email: '',
                    phone: ''
                }
            }
    }
    
    render(){
        const {user} = this.state;
        
        return(
            <div className="container">
                <div className="profileWelcome">
                    {user.user.map(function(user){
                        return(
                            <h1 key={user.id}>
                                 Welcome, {user.firstName}
                            </h1>
                        );
                    }
                    )
                }
                </div>
                        }
                <div className="profileDetails">    
                    <ul>
                        <li key={user.id}>
                                {user.firstName + '' + user.lastName}
                                {user.streetAdd + ', ' + user.city + ', ' + user.state + ' '}
                                {user.email},
                                {user.phone}
                            </li>
                           })
                        }       
                    </ul>
                </div>
                <div className="profileLinks">>
                    <p>
                        <Link to="/dogForm">Report Lost/Found Dog</Link>
                    </p>
                    <br />
                    <p> 
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
            </div>
        
        );
    }        

}

function mapStateToProps(state){
    const{user} = state;
    return {
        user
    };
}

const connectedProfile = connect(mapStateToProps)(UserAcct);
export {connectedProfile as UserAcct};
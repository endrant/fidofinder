import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {findfido} from '../findfido.jpg';
import {userAct} from '../actions/userAct';

class UserLogin extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    
        //logout user
        this.props.dispatch(userAct.logout());
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) { 
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)    
    }

    handleSubmit(e){
        e.preventDefault();

        this.setState({submitted:true});
        const{username, password} = this.state;
        const{dispatch} = this.props;

        if (username && password) {
            dispatch(userAct.login(username, password));
        }
    }

    render() {
        const { loggedIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="login">
                <h2>Login</h2>
                <form name="login-form" action="action_page.php" onSubmit={this.handleSubmit}>
                   
                    <div className={'login-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username"><b>Username: </b></label>
                        <input type="text" placeholder="Enter Username" name="username" value="username" onChange={this.handleChange} required />
                        {submitted && !username &&
                            <div className="error-resp">Username is required</div>
                        }
                    <div className={'login-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password"><b>Password: </b></label>
                        <input type="password" placeholder="Enter Password" name="password" value="password" onChange={this.handleChange} required />
                        {submitted && !password &&
                            <div className="error-resp">Password is required</div>
                        }
                    </div>
                        <button type="submit">Login</button>
                        {loggedIn}
                    </div>

                    <div className="container" >
                       <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggedIn } = state;
    return {
        loggedIn
    };
}

const connectedUserLogin = connect(mapStateToProps)(UserLogin);
export { connectedUserLogin as UserLogin }; 
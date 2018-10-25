import React from 'react';
import {connect} from 'react-redux';

import {userAct} from '../actions/userAct';

class UserReg extends React.Component{
    constructor(props){
        super(props);
        //fields for user reg form
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
            },
            submitted: false
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;

        this.setState({
            user: {
                //nested object
                ...user,
                [name]:value
            }
        });
    }

    handleSubmit(event){
        event.preventDefault();

        this.setState({submitted:true});
        const {user} = this.state;
        const {dispatch} = this.props;

        if (user.firstName && user.lastName && user.username && user.password && user.email) { 
            dispatch(userAct.register(user));
        }
    }

    render (){
        const {registering} = this.props;
        const {user} = this.state;

            return(
                <div className="reg-form">
                    <h2>Create New Account</h2>
                    <form name="regForm" autoComplete="on" onSubmit={this.handleSubmit}>
                        <div className="reg-input">
                            <label>Username: </label>
                            <input type="text" name="username" value={user.username} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <label>Password: </label>
                            <input type="password" name="password" value={user.password} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <label>First Name: </label>
                            <input type="text" name="firstName" value={user.firstName} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <label>Last Name: </label>
                            <input type="text" name="lastName" value={user.lastName} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <label>Street Address: </label>
                            <input type="text" name="streetAdd" value={user.streetAdd} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <label>City: </label>
                            <input type="text" name="city" value={user.city} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <label>State: </label>
                            <input type="text" name="state" value={user.state} onChange={this.handleChange} />
                            <br/>
                            <br/>
                            <label>Zip Code: </label>
                            <input type="text" name="zip" value={user.zip} onChange={this.handleChange} />
                        </div>
                        <br/>
                        <div className="reg-form">
                            <button className="btn btn-primary" type="submit">Submit</button>
                            {registering}
                        <br/>
                        </div>
                    </form>
                </div>
                );
            }
        }

        function mapStateToProps(state){
            const {registering} = state.registration;
            return{
                registering
            };
        }

const connectedRegisterPage = connect(mapStateToProps)(UserReg);
export {connectedRegisterPage as UserReg};
    
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {userAct} from '../actions/userAct';

class UserReg extends React.Component{
    constructor(props){
        super(props);
        //fields for user reg form
        this.state = {
            users: {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                streetAddress: '',
                city: '',
                state: '',
                zip: '',
                email: '',
                phone: ''
            },
            submitted: true
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {users} = this.state;

        this.setState({
            users: {
                //nested object
                ...users,
                [name]:value
            }
        });
    }

    handleSubmit(event){
        event.preventDefault();

        this.setState({submitted:true});
        const {users} = this.state;
        const {dispatch} = this.props;

        if (users.firstName && users.lastName && users.username && users.password && users.email) { 
            dispatch(userAct.register(users));
        }
    }

    render (){
        const {registering} = this.props;
        const {users} = this.state;
        return(
                <form name="regForm" action="action_page.php" onSubmit={this.handleSubmit}>
                    <div className="container">
                        <h1>New Account</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />

                        <label htmlFor="username"><b>Email</b></label>
                        <input type="text" placeholder="Enter Username" name="username" value={users.username} onChange={this.handleChange} required />

                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" value={users.password} onChange={this.handleChange} required />

                        <label htmlFor="firstName"><b>First Name:</b></label>
                        <input type="Text" placeholder="Enter First Name" name="firstName" value={users.firstName} onChange={this.handleChange} required />
                        
                        <label htmlFor="lastName"><b>Last Name:</b></label>
                        <input type="Text" placeholder="Enter Last Name" name="lastName" value={users.lastName} onChange={this.handleChange} required />
                       
                        <label htmlFor="streetAddress"><b>Street Address:</b></label>
                        <input type="Text" placeholder="Enter Street Address" name="streetAddress" value={users.streetAddress} onChange={this.handleChange} required />
                        
                        <label htmlFor="city"><b>City:</b></label>
                        <input type="Text" placeholder="Enter City" name="city" value={users.city} onChange={this.handleChange} required />

                        <label htmlFor="state"><b>State:</b></label>
                        <input type="Text" placeholder="Enter State" name="state" value={users.state} onChange={this.handleChange} required />
                        
                        <label htmlFor="zip"><b>Zip:</b></label>
                            <input type="Text" placeholder="Enter Zip" name="zip" value={users.zip} onChange={this.handleChange} required />
                        
                        <label htmlFor="email"><b>Email:</b></label>
                        <input type="Text" placeholder="Enter Email" name="email" value={users.email} onChange={this.handleChange} required />
                        
                        <label htmlFor="phone"><b>Phone:</b></label>
                        <input type="Text" placeholder="Enter Phone" name="phone" value={users.phone} onChange={this.handleChange} required />
                        <hr />

                        <button type="submit" className="registerbtn">Register</button>
                        {registering}
                    </div>

                    <div className="container signin">
                        <p>Already have an account? <Link to="/login">Sign In</Link></p>
                    </div>
                </form>
            
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
    
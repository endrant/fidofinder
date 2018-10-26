import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
            submitted: true
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
                <form name="regForm" action="action_page.php" onSubmit={this.handleSubmit}>
                    <div class="container">
                        <h1>New Account</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />

                        <label for="username"><b>Email</b></label>
                        <input type="text" placeholder="Enter Username" name="username" value={user.username} required />

                        <label for="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" value={user.password} required />

                        <label for="firstName"><b>First Name:</b></label>
                        <input type="Text" placeholder="Enter First Name" name="firstName" value={user.firstName} required />
                        
                        <label for="lastName"><b>Last Name:</b></label>
                        <input type="Text" placeholder="Enter Last Name" name="lastName" value={user.lastName} required />
                       
                        <label for="streetAdd"><b>Street Address:</b></label>
                        <input type="Text" placeholder="Enter Street Address" name="streetAdd" value={user.streetAdd} required />
                        
                        <label for="city"><b>City:</b></label>
                        <input type="Text" placeholder="Enter City" name="city" value={user.city} required />

                        <label for="state"><b>State:</b></label>
                        <input type="Text" placeholder="Enter State" name="state" value={user.state} required />
                        
                        <label for="zip"><b>Zip:</b></label>
                        <input type="Text" placeholder="Enter Zip" name="zip" value={user.zip} required />
                        
                        <label for="email"><b>Email:</b></label>
                        <input type="Text" placeholder="Enter Email" name="email" value={user.email} required />
                        
                        <label for="phone"><b>Phone:</b></label>
                        <input type="Text" placeholder="Enter Phone" name="phone" value={user.phone} required />
                        <hr />

                        <button type="submit" class="registerbtn">Register</button>
                        {registering}
                    </div>

                    <div class="container signin">
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
    
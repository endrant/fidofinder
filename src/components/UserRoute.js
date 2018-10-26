// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// export const UserRoute = ({component: Component, ...rest}) => (
//     <Route {...rest} render ={props => (
//         //check for user object in local storage
//         localStorage.getItem('user')
//             ? <Component {...props} />
//             //redirect to login page
//             :<Redirect to={{ pathname: '/screens/UserLogin', state: { from: props.location}}} />
// )} />
// )

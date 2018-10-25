import function loginAuthHeader(){
    //returns auth header containing JWT
    let user = JSON.parse(localStorage.getItem('user'));

    if 
    (user && user.token) {
        return {
            'Authorization': 'Bearer' + user.token
        };
    }else{
        //return empty object if user isn't logged in
        return {};
    }
}
export default loginAuthHeader;
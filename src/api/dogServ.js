import axios from 'axios';

export const dogServ ={
    addDog, 
    getDog, 
    logout
};

//register add lost/found dog
function addDog(dog){
    const request = {
        method: 'POST',
        body: JSON.stringify({dog})
    };
        localStorage.setItem('dog', JSON.stringify(dog));
        return axios.get('http://localhost:8080/api/dogServ', request).then(handleResponse);    
 }
//Delete user from local storage on logout
function logout(){
    localStorage.removeItem('user');
}

function getDog(){
    const request = {
        method:'GET',
        body: JSON.stringify({})
    };
     //connect to backend 
     return axios.get('http://localhost:8080/api/dogServ', request)
     //.then(handleResponse)
     .then(() => {
        const dog = {
            lostFound: 'L',
            name: 'Baxter',
            sex: 'M',
            breed: 'Shep/Lab Mix',
            color: 'black',
            uniqMarks: '',
            location: 'STV'
        };
         localStorage.getItem('dog', JSON.stringify(dog));
         return dog;
        });
    }

function handleResponse(response){
   
        const data = response.data;
        console.log(data);
        if(!response.ok){
            //logout on error
            if(response.status === 401){
                logout();
                }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
        }
        return data;
   
};
import React, {Component} from 'react';
import axios from 'axios';


class Home extends Component {
    constructor(props){
        super(props);
        //set state
        this.state = {
            title: '',
            description: '',
            homepage: []
        };
    }

    componentDidMount(){
        //get data from url
        axios.get('http://localhost:8080/api/home')
        .then((response) => {
            console.log(response);
            //pull title and description from JSON data
                this.setState({
                title: response.title,
                description: response.description,
                });
            
            //error catch
            }).catch((err) => {
                console.log(err)
            })
    }
    //HTML to render on page
    render(){
        return (
            <div>
                <h1>Title: {this.state.title}</h1>
                <p>Description: {this.state.description}</p>
            </div>
        )
    }
}


export default Home;
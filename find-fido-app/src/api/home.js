import React, {Component} from 'react';
import axios from 'axios';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact'

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
        .then((res) => {
            console.log(res);
            //pull title and description from JSON data
                this.setState({
                    title: res.data[0].title,
                    description: res.data[0].description,
                });
            console.log(this.state.title);
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
                <Dropdown>
                <DropdownToggle caret color="primary">
                Material dropdown
                </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another Action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}


export default Home;
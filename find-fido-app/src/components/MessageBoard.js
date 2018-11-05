import React from 'react';
import {connect} from 'react-redux';

import {dogAct} from '../actions/dogAct';
import {msgAct} from '../actions/msgAct';

class MessageBoard extends React.Component{
    componentDidMount(){
        this.props.dispatch(dogAct.getDog());
        this.props.dispatch(msgAct.getMsg());
    }

    constructor(props){
        super(props);
        this.state = {
            messages:{}, 
            dog:{}
        };
    }

     render(){
         const {dog} = this.props;
         const {messages} = this.props;
         return(
            <div class="card mb-4 wow fadeIn">
                <div class="card-body">

                    <p class="h5 my-4">{dogs.lostFound} Dog</p>


                    <p class="h5 my-4">Name(if known): {dogs.name}</p>

                    <div className="profileDetails">   
                            <div className="row">
                                
                                <div className="row">
                                    <div className="column-label">Sex: </div>
                                    <div className="column-data">{dog.sex}</div>
                                </div>
                                <div className="row">
                                    <div className="column-label">Breed: </div>
                                    <div className="column-data">{dog.breed}</div>
                                </div>
                                <div className="row">
                                    <div className="column-label">Color: </div>
                                    <div className="column-data">{dog.color}</div>
                                </div>
                                <div className="row">
                                    <div className="column-label">Distinguishing Marks: </div>
                                    <div className="column-data">{dog.uniqMarks}</div>
                                </div>
                                <div className="row">
                                    <div className="column-label">Locations: </div>
                                    <div className="column-data">{dog.location}</div>
                                </div>
                                </div>
                            </div>
                        </div>
        
                    <div class="card card-comments mb-3 wow fadeIn">
                    <div class="card-header font-weight-bold">Comments</div>
                        <div class="card-body">

                        <div class="media d-block d-md-flex mt-4">
                            <div class="media-body text-center text-md-left ml-md-3 ml-0">
                                <h5 class="mt-0 font-weight-bold">{users.username}
                                    <a href="" class="pull-right">
                                        <i class="fa fa-reply"></i>
                                            </a>
                                             </h5>
                                             {messages.content}

                             <div class="media d-block d-md-flex mt-3">
                                    <div class="media-body text-center text-md-left ml-md-3 ml-0">
                                        <h5 class="mt-0 font-weight-bold">{users.username}
                                            <a href="" class="pull-right">
                                                <i class="fa fa-reply"></i>
                                                    </a>
                                                    </h5>
                                                    {messages.content}
                                    </div>
                            </div>
                                    </div>
                            </div>
                        </div>
                    </div>                           
                        <div class="card mb-3 wow fadeIn">
                            <div class="card-header font-weight-bold">Leave a reply</div>
                                <div class="card-body">

                                <form>
                                    <div class="form-group">
                                        <label for="replyFormComment">Your comment</label>
                                            <textarea class="form-control" id="replyFormComment" rows="5"></textarea>
                                    </div>

                                    <div class="text-center mt-4">
                                        <button class="btn btn-info btn-md" type="submit">Post</button>
                                    </div>
                                </form>
                               
                                </div>
                        </div>  
           </div>                                       
         );
    };
}

function mapStateToProps(state){
    const{dog, messages} = state;

    return{
        dog, 
        messages
    };
}

const connectedProfile = connect(mapStateToProps)(MessageBoard);
export {connectedProfile as MessageBoard};
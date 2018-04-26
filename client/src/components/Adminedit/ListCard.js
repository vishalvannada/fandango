import React, {Component} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class ListCard extends Component {

    constructor(props) {
        super(props);

    }
    state={
        moviename:"Gurdians of Galaxy",
        poster_path:"",
        username:"Rishith",
        movietime:"3:30 PM",
        cost:'12$',
        theatername:'Town Three Hall',
        transactionid:'XXXX323425',
        screenno:'33'
    };


    render(){
        return(
            <div>
                <div className='row'>
                    <div className='medium-7 columns'><div className='Purchase-container card container'>
                    <div id='purchase-card' className='row'>
                        <div className='Purchase-item medium-10 columns'>
                                <div className='Purchase-item medium-12 columns '>
                                      <div className='row'>
                                          <div id='card-heading' className='Purchase-movie-name'>{this.state.moviename}</div>


                                          </div>
                                    <div className='row'>
                                        <div id='card-user' className='Purchase-user-name'>Name: {this.state.username}</div>
                                    </div>
                                      <div id = 'card-movie' className='Purchase-movie-time'>
                                         <p id = 'timings' >Movie time: <div className='movie-time'>{this.state.movietime}</div></p>
                                     </div>
                                    <div className='Purchase-movie-theater'>
                                        <p>Movie Theater: <div id='theater-name'>{this.state.theatername} - Screen No: {this.state.screenno}</div></p>
                                    </div>


                                </div>

                            </div>
                            <div>


                            </div>

                        </div>

                        <div className='Purchase-item medium-2 columns'>
                            <div id = 'transaction-div' className='row'>
                                <div>Transaction ID: <div id='transaction-id'>{this.state.transactionid}</div></div>
                            </div>

                            <div id='ticket-div'  className='row'>
                                <div>Amount: <div id='ticket-cost'  >{this.state.cost}</div></div>
                            </div>

                            <div id = 'tax-div' className='row'>
                                <div>Tax: 12%</div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return ({});
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({}, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListCard)

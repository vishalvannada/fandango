import React, {Component} from 'react';
import {connect} from "react-redux";
import moment from "moment";
import ReactStars from 'react-stars';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class MovieReview extends Component {

    renderReviews() {
        return (_.map(this.props.reviews.slice(0,8), review => {
            return (
                <div className="col-md-3 extra-review-class">
                    <ReactStars
                        edit={false}
                        count={5}
                        size={24}
                        half={false}
                        value={review.stars}
                        color2={'#FFA358'}
                    />
                    <h3 className="font-condensed-bold color-darkgray">{review.title}</h3>
                    <p className="font-family-roboto font-size-14">{review.body}</p>
                </div>
            )
        }))
    }


    render() {

        console.log(this.props.reviews)
        return (
            <div ref ='reviewsTest'>
                <br/>
                <div className="fandango-container">
                    <div className="row">
                        {this.props.reviews ? this.renderReviews() : ''}
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        )
    }
}


export default connect(null, null)(MovieReview);

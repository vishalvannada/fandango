import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';
import UnderBrand from './home/underBrand';
import Carousel from './home/carousel';
import {connect} from "react-redux";
import {getMoviesInHomePageCarousel} from "../actions/vishalActions";


class Home extends Component {


    componentDidMount() {
        this.props.getMoviesInHomePageCarousel()
    }

    render() {
        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader history = {this.props.history}/>
                <UnderBrand/>
                <Carousel home={this.props.home}/>
                <img src="http://localhost:3000/home_dog.jpg" className="width-100"/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {home: state.home}
}

export default connect(mapStateToProps, {getMoviesInHomePageCarousel})(Home);

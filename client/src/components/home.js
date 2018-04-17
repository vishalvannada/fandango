import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';
import UnderBrand from './home/underBrand';
import Carousel from './home/carousel';
import {connect} from "react-redux";
import {demo} from "../actions/vishalActions";



class Home extends Component {


    componentDidMount(){
        this.props.demo()
    }

    render() {
        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                <UnderBrand/>
                <Carousel home={this.props.home}/>
                <img src="./home_dog.jpg"/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {home: state.home}
}

export default connect(mapStateToProps, {demo})(Home);

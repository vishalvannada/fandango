import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import UnderBrand from './home/underBrand';
import {connect} from "react-redux";
import {demo} from "../actions/vishalActions";


class SecretPage extends Component {

    render() {
        return (
            <div>
                <BrandBar/>
                <UnderBrand/>
                <button onClick={() => this.props.demo()}>Load Movies</button>
            </div>
        )
    }
}

export default connect(null, {demo})(SecretPage);

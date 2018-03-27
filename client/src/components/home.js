import React, {Component} from 'react';
import BrandBar from './brandBar'
import {connect} from "react-redux";

class Home extends Component {

    componentWillMount() {
        console.log("here");
        this.props.check();

    }

    render() {

        return (
            <div>
                <BrandBar/>
            </div>
        )


    }
}

// function mapStateToProps(state) {
//     return {dashboard: state.dashboard}
// }

export default connect(null, null)(Home);
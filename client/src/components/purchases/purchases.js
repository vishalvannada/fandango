import React, {Component} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TransactionCard from './transactionCard';
import FandangoVIPHeader  from '../userProfile/fandangoVIPHeader';
import Footer  from '../userProfile/footer';
import UtilityFooter from '../userProfile/utilityFooter';
import BrandBar from '../home/brandBar';
import MegaDropDownHeader from '../home/megaDropDownHeader';
import _ from 'lodash';
import {purchaseHistory} from "../../actions/satishActions";
var axios = require('axios');

class Purchases extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        if(this.props.user.isLoggedIn==true)
        {
            console.log("User Email............",this.props.user.user.email);
            var values={username:this.props.user.user.email, status:"open", pagename:"PurchaseHistory"};

            const request =axios.post('http://localhost:3001/movietheatres/usertrack',values)
                .then(response => {
                    console.log("sucessss",response.data)
                }).catch(error => {
                    console.log("usertracking error",error);
                });

        }

    }

    componentDidMount(){
        this.props.purchaseHistory();
    }
    render(){
        console.log("inside purchases",this.props.purchases.history);
        return(
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                <FandangoVIPHeader/>
                {/*<p>This is inside Purchase History</p>*/}
                <div>
                    {
                        _.map(this.props.purchases.history, Purch => {
                            console.log(Purch)
                        return <TransactionCard purchase={Purch}/> ;
                        }
                        )
                    }
                </div>
                <Footer/>
                {/*Utility Footer*/}
                <UtilityFooter/>
            </div>
        )
    }
}




function mapStateToProps(store) {
    return ({purchases:store.purchases, user : store.getUser});
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({purchaseHistory}, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Purchases)

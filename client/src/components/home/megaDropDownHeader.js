import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import {getSearchedMoviesUser} from "../../actions/vishalActions";


class MegaDropDownHeader extends Component {


    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };
    }

    handleSubmit = (evt) => {

        evt.preventDefault();
        swal(this.state.term)
        this.props.getSearchedMoviesUser(this.state.term);
    }


    render() {

        const enabled = this.state.term.length > 0;

        console.log(this.props.moviesSearchList);


        return (
            <div className="background-fandango">
                <div className="fandango-container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <Link to="/home">
                            <img className="megaDropDown-brand mt-1"
                                 src="https://images.fandango.com/mobile/web/img/assets/logo-fandango.svg"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <form className="form-inline ml-5 my-lg-0" onSubmit={this.handleSubmit}>
                                <input className="form-control font-size-14 mt-3 header-form-input" type="search"
                                       value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}
                                       placeholder="Search Movie"
                                       aria-label="Search"/>
                                <button

                                    className="my-2 my-sm-0 ml-4 header-button-go"
                                    type="submit" > GO
                                </button>
                            </form>

                            <ul className="navbar-nav ml-auto font-size-14">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown"
                                       role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="font-weight-700">MOVIES</span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <span className="text-uppercase text-white">Category 1</span>
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" href="#">Active</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" href="#">Active</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-3">
                                                    <a href="">
                                                        <img
                                                            src="https://dummyimage.com/200x100/ccc/000&text=image+link"
                                                            alt="" className="img-fluid"/>
                                                    </a>
                                                    <p className="text-white">Short image call to action</p>

                                                </div>

                                                <div className="col-md-3">
                                                    <a href="">
                                                        <img
                                                            src="https://dummyimage.com/200x100/ccc/000&text=image+link"
                                                            alt="" className="img-fluid"/>
                                                    </a>
                                                    <p className="text-white">Short image call to action</p>

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown"
                                       role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="font-weight-700">MOVIE TIMES + TICKETS</span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">


                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <span className="text-uppercase text-white">Category 2</span>
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" href="#">Active</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-4">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" href="#">Active</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-4">
                                                    <a href="">
                                                        <img
                                                            src="https://dummyimage.com/200x100/ccc/000&text=image+link"
                                                            alt="" className="img-fluid"/>
                                                    </a>
                                                    <p className="text-white">Short image call to action</p>

                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown"
                                       role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="font-weight-700">MY VIP ACCOUNT</span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">


                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <span className="text-uppercase text-white">Category 3</span>
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" href="#">Active</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-4">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" href="#">Active</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Link item</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-4">

                                                    <a href="">
                                                        <img
                                                            src="https://dummyimage.com/200x100/ccc/000&text=image+link"
                                                            alt="" className="img-fluid"/>
                                                    </a>
                                                    <p className="text-white">Short image call to action</p>

                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </li>

                            </ul>

                        </div>


                    </nav>
                </div>
            </div>
        )


    }
}


export default connect(null, {getSearchedMoviesUser})(MegaDropDownHeader);


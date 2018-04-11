import React, {Component} from 'react';
import {connect} from 'react-redux'


class MegaDropDownHeader extends Component {

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark background-fandango">
                    <img className="megaDropDown-brand" src="https://images.fandango.com/mobile/web/img/assets/logo-fandango.svg"/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Category</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    MOVIES
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-4">
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
                                                    <img src="https://dummyimage.com/200x100/ccc/000&text=image+link"
                                                         alt="" className="img-fluid"/>
                                                </a>
                                                <p className="text-white">Short image call to action</p>

                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Category 2
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
                                                    <img src="https://dummyimage.com/200x100/ccc/000&text=image+link"
                                                         alt="" className="img-fluid"/>
                                                </a>
                                                <p className="text-white">Short image call to action</p>

                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Category 3
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
                                                    <img src="https://dummyimage.com/200x100/ccc/000&text=image+link"
                                                         alt="" className="img-fluid"/>
                                                </a>
                                                <p className="text-white">Short image call to action</p>

                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>


                </nav>
            </div>
        )


    }
}

// function mapStateToProps(state) {
//     return {dashboard: state.dashboard}
// }

export default connect(null, null)(MegaDropDownHeader);
import React, {Component} from 'react';
import {connect} from "react-redux";
import "./movieTime.css"
import {getMoviesInSearchPage} from "../../actions/pranithActions";
import StarRatings from 'react-star-ratings';

class MovieTopSection extends Component {
    state = {
        movieSearch: ""
    }

    searchMovie() {
        // console.log("from submit search");
        console.log(this.state);
        this.props.getMoviesInSearchPage(this.state);
    }

    render() {
        // console.log(this.props);
        console.log(this.props.movietime.moviesTheatres.moviemap);
        console.log(this.props.movietime.moviesTheatres.moviemap[0].type);

        var divStyle = {
            //backgroundImage: 'url(http://image.tmdb.org/t/p/original/nIrDm42dy5PaXtUAzUfPmxM4mQm.jpg)',
            backgroundColor: "white"
        }
        console.log(this.props.movietime.moviesTheatres.moviemap.type);
        if (this.props.movietime.moviesTheatres.moviemap[0].type != "test") {


            return (
                <div className="background-movie-top" style={divStyle}>
                    <div className="fandango-container">
                        <div className="searchboxResults">
                            <section className="subnav">
                                <div className="row headerResultsPincode">
                                    <div className="width-100">
                                        <h1 className="subnav__title heading-style-1 heading-size-xl">

                                            Movie times + Tickets


                                            <span className="subnav__title--accent">
                        near
                        <span className="js-subnav__user-location">95126</span>
                    </span>


                                        </h1>

                                        <div className="headerSubMenuUL">
                                            <ul className="subnav__link-list">
                                                <li className="subnav__link-item">
                                                    <a className="subnav__link subnav__link--active"
                                                       href="/95126_movietimes?mode=general&amp;q=95126">
                                                        All theaters
                                                    </a>
                                                </li>
                                                <li className="subnav__link-item">
                                                    <a className="subnav__link"
                                                       href="/95126_movietimes?mode=general&amp;q=95126&amp;ticketedonly=true">
                                                        Fandango Ticketing Theaters
                                                    </a>
                                                </li>
                                                <li className="subnav__link-item">
                                                    <a className="subnav__link"
                                                       href="/95126_movietimes?mode=general&amp;q=95126&amp;mytheaters=true">
                                                        My theaters
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            </section>
                            <span>
                            <br/>
                            <div className="date-picker__location">
    <div className="date-picker__error js-date-picker__error hide"></div>



    <span className="date-picker__location-text">ENTER CITY, STATE OR ZIP CODE</span>
    <input className="date-picker__location-input js-date-input" placeholder="City, State or Zip Code" type="text"
           onChange={(event) => {
               this.setState({
                   movieSearch: event.target.value
               });
           }}/>
    <button type="button" onClick={() => {
        this.searchMovie()
    }} className="btn date-picker__location-submit js-date-picker-btn">GO</button>
</div>
                        </span>
                        </div>


                        {
                            this.props.movietime.moviesTheatres.moviemap.map((item) => {
                                return (
                                    <div className="moviesTheatres col-10" id="moviesTheatres">
                                        <ul>


                                            <div className="fd-theater__header">
                                                <div className="fd-theater__promoted-amenity-wrap">


                                <span
                                    className="icon icon-amenity-mobile-tickets fd-theater__promoted-amenity js-amenity"
                                    data-amenity-name="Mobile Tickets"
                                    data-amenity-desc="Send your ticket to your mobile device, go directly to the ticket taker and skip the box office line at many theaters.">Mobile Tickets
                                </span>

                                                    <span
                                                        className="icon icon-amenity-print-at-home-tickets fd-theater__promoted-amenity js-amenity"
                                                        data-amenity-name="Print at Home Tickets"
                                                        data-amenity-desc="Print your tickets, go directly to the ticket taker and skip the box office line at many theaters.">Print at Home Tickets
                                </span>


                                                </div>

                                                <div className="fd-theater__name-wrap">
                                                    <h3 className="fd-theater__name font-sans-serif font-lg font-300 uppercase">
                                                        <a className="light"
                                                           href="/towne-3-cinemas-AAFRF/theater-page">{item.type}
                                                            Cinemas</a>

                                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_addtheater&amp;action=addtheater&amp;id=AAFRF"
                                                           className="icon icon-follow-white fd-theater__follow-icon js-heartsAndStars-heart"
                                                           data-type="Theater" data-id="AAFRF"
                                                           data-name="Towne 3 Cinemas"
                                                           data-is-favorite="false">
                                                        </a>

                                                    </h3>
                                                </div>

                                                <div className="fd-theater__address-wrap">
                                                    {item.data[0].theatreCity}, {item.data[0].theatreState}, {item.data[0].theatreZip}
                                                </div>
                                                <div className="fd-theater__links">
                                                    <a href="//www.fandango.com/maps/DrivingDirections.aspx?tid=AAFRF"
                                                       target="_blank"
                                                       rel="nofollow" className="font-sans-serif-cond font-sm">MAP</a>

                                                    <a className="fd-theater__amenities js-amenity font-sans-serif-cond font-sm"
                                                       href="#"
                                                       data-amenity-name="Theater Amenities"
                                                       data-amenity-desc="<ul class=&quot;fd-theater__amenities-list&quot;><li>Mobile Tickets</li><li>Print at Home Tickets</li></ul>">AMENITIES</a>

                                                </div>
                                            </div>


                                            {item.data.map((movie) => {
                                                return (

                                                    <div className="fd-movie">
                                                        <div className="fd-movie__poster">
                                                            <a href={`/movie-overview/${movie.movie.movieId}`}>
                                                                <img
                                                                    src={`http://image.tmdb.org/t/p/w200${movie.movie.poster_path}`}
                                                                    className="image-carousel image"/>
                                                            </a>


                                                        </div>
                                                        <div className="fd-movie__details">
                                                            <h3 className="fd-movie__title font-sans-serif font-lg font-300 uppercase">
                                                                <a className="dark"
                                                                   href={`/movie-overview/${movie.movie.movieId}`}>{movie.movie.MovieName}</a>

                                                                <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_addmovie&amp;action=addmovie&amp;id=210358"
                                                                   className="icon icon-follow-gray fd-movie__follow-icon js-heartsAndStars-heart"
                                                                   data-type="Movie" data-id="210358"
                                                                   data-name="Mercury (2018)"
                                                                   data-is-favorite="false">
                                                                </a>

                                                            </h3>


                                                            <div className="fd-star-rating__container">
                                                                <div className="js-fd-star-rating fd-star-rating "
                                                                     data-star-rating="5">

                                                                    <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=210358&amp;rating=5"
                                                                       className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                                                       data-action="rate" data-id="210358"
                                                                       data-isnew="true"
                                                                       data-show-caption="true" data-value="5"
                                                                       title="Loved It">
                                                                    </a>

                                                                    <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=210358&amp;rating=4"
                                                                       className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                                                       data-action="rate" data-id="210358"
                                                                       data-isnew="true"
                                                                       data-show-caption="true" data-value="4"
                                                                       title="Really Liked It">
                                                                    </a>

                                                                    <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=210358&amp;rating=3"
                                                                       className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                                                       data-action="rate" data-id="210358"
                                                                       data-isnew="true"
                                                                       data-show-caption="true" data-value="3"
                                                                       title="Liked It">
                                                                    </a>

                                                                    <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=210358&amp;rating=2"
                                                                       className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                                                       data-action="rate" data-id="210358"
                                                                       data-isnew="true"
                                                                       data-show-caption="true" data-value="2"
                                                                       title="Disliked It">
                                                                    </a>

                                                                    <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=210358&amp;rating=1"
                                                                       className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                                                       data-action="rate" data-id="210358"
                                                                       data-isnew="true"
                                                                       data-show-caption="true" data-value="1"
                                                                       title="Hated It">
                                                                    </a>

                                                                </div>
                                                            </div>


                                                        </div>
                                                        <ul className="fd-movie__showtimes">


                                                            <li className="fd-movie__showtimes-variant">


                                                                <h3 className="fd-movie__showtimes__tick-headline font-serif">
                                                                    <span className="icon icon-ticket"></span>
                                                                    Select a movie time to buy Standard Showtimes
                                                                </h3>


                                                                <ul className="fd-movie__amentiy-list">


                                                                </ul>
                                                                <ol className="fd-movie__btn-list">

                                                                    <li className="fd-movie__btn-list-item">


                                            <span className="btn showtime-btn showtime-btn--expired js-amenity"
                                                  data-amenity-desc="Looks like this movie has already started – let’s try another showtime."
                                                  data-amenity-name="Ticket Availability">4:00p</span>


                                                                    </li>

                                                                    <li className="fd-movie__btn-list-item">


                                            <span className="btn showtime-btn showtime-btn--expired js-amenity"
                                                  data-amenity-desc="Looks like this movie has already started – let’s try another showtime."
                                                  data-amenity-name="Ticket Availability">6:15p</span>


                                                                    </li>

                                                                    <li className="fd-movie__btn-list-item">


                                                                        <a className="btn showtime-btn showtime-btn--available"
                                                                           href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=221139418&amp;tid=AAFRF&amp;sdate=2018-04-16+20:30&amp;mid=210358&amp;from=mov_det_showtimes">8:30p</a>


                                                                    </li>

                                                                    <li className="fd-movie__btn-list-item">


                                                                        <a className="btn showtime-btn showtime-btn--available"
                                                                           href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=221139419&amp;tid=AAFRF&amp;sdate=2018-04-16+22:45&amp;mid=210358&amp;from=mov_det_showtimes">10:45p</a>


                                                                    </li>

                                                                </ol>
                                                            </li>


                                                        </ul>
                                                    </div>

                                                )
                                            })}
                                        </ul>
                                    </div>
                                )

                            })}

                    </div>
                </div>
            )
        }
        else {
            return (<div id="initialLoad">
                <div className="searchboxResults">
                    <section className="subnav">
                        <div className="row headerResultsPincode">
                            <div className="width-100">
                                <h1 className="subnav__title heading-style-1 heading-size-xl">

                                    Movie times + Tickets


                                    <span className="subnav__title--accent">
                        near
                        <span className="js-subnav__user-location"></span>
                        </span>


                                </h1>

                                <div className="headerSubMenuUL">
                                    <ul className="subnav__link-list">
                                        <li className="subnav__link-item">
                                            <a className="subnav__link subnav__link--active"
                                               href="/95126_movietimes?mode=general&amp;q=95126">
                                                All theaters
                                            </a>
                                        </li>
                                        <li className="subnav__link-item">
                                            <a className="subnav__link"
                                               href="/95126_movietimes?mode=general&amp;q=95126&amp;ticketedonly=true">
                                                Fandango Ticketing Theaters
                                            </a>
                                        </li>
                                        <li className="subnav__link-item">
                                            <a className="subnav__link"
                                               href="/95126_movietimes?mode=general&amp;q=95126&amp;mytheaters=true">
                                                My theaters
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </section>
                    <span>
                        <br/>
                        <div className="date-picker__location">
                        <div className="date-picker__error js-date-picker__error hide"></div>



                        <span className="date-picker__location-text">ENTER CITY, STATE OR ZIP CODE</span>
                        <input className="date-picker__location-input js-date-input"
                               placeholder="City, State or Zip Code" type="text"
                               onChange={(event) => {
                                   this.setState({
                                       movieSearch: event.target.value
                                   });
                               }}/>
                        <button type="button" onClick={() => {
                            this.searchMovie()
                        }} className="btn date-picker__location-submit js-date-picker-btn">GO</button>
                        </div>
                        </span>
                </div>


            </div>)
        }
    }
}

function mapStateToProps(state) {
    return {movietime: state.moviesSearchPagePK}
}


export default connect(mapStateToProps, {getMoviesInSearchPage})(MovieTopSection);

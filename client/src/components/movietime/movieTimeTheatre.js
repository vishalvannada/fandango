import React, {Component} from 'react';
import {connect} from "react-redux";
import "./movieTime.css"

class MovieTopSection extends Component {

    render() {

        var divStyle = {
            //backgroundImage: 'url(http://image.tmdb.org/t/p/original/nIrDm42dy5PaXtUAzUfPmxM4mQm.jpg)',
            backgroundColor: "white"
        }

        return (
            <div className="background-movie-top" style={divStyle}>
                <div className="fandango-container">
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
                                    <a className="light" href="/towne-3-cinemas-AAFRF/theater-page">Towne 3 Cinemas</a>

                                    <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_addtheater&amp;action=addtheater&amp;id=AAFRF"
                                       className="icon icon-follow-white fd-theater__follow-icon js-heartsAndStars-heart"
                                       data-type="Theater" data-id="AAFRF" data-name="Towne 3 Cinemas"
                                       data-is-favorite="false">
                                    </a>

                                </h3>
                            </div>

                            <div className="fd-theater__address-wrap">

                                <span>1433 The Alameda,</span>

                                <span>

                                San Jose,


                                CA


                                95126

                        </span>
                            </div>
                            <div className="fd-theater__links">
                                <a href="//www.fandango.com/maps/DrivingDirections.aspx?tid=AAFRF" target="_blank"
                                   rel="nofollow" className="font-sans-serif-cond font-sm">MAP</a>

                                <a className="fd-theater__amenities js-amenity font-sans-serif-cond font-sm" href="#"
                                   data-amenity-name="Theater Amenities"
                                   data-amenity-desc="<ul class=&quot;fd-theater__amenities-list&quot;><li>Mobile Tickets</li><li>Print at Home Tickets</li></ul>">AMENITIES</a>

                            </div>
                        </div>

                        <li className="fd-movie">
                            <div className="fd-movie__poster">
                                <a href="/ameerpet-2-america-211110/movie-overview">
                                    <img
                                        src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images.fandango.com/ImageRenderer/100/0/redesign/static/img/default_poster.png/0/redesign/static/img/default_poster.png"
                                        alt=""/>
                                </a>


                            </div>
                            <div className="fd-movie__details">
                                <h3 className="fd-movie__title font-sans-serif font-lg font-300 uppercase">
                                    <a className="dark" href="/ameerpet-2-america-211110/movie-overview">AMEERPET 2
                                        AMERICA</a>

                                    <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_addmovie&amp;action=addmovie&amp;id=211110"
                                       className="icon icon-follow-gray fd-movie__follow-icon js-heartsAndStars-heart"
                                       data-type="Movie" data-id="211110" data-name="AMEERPET 2 AMERICA"
                                       data-is-favorite="false">
                                    </a>

                                </h3>


                                <div className="fd-star-rating__container">
                                    <div className="js-fd-star-rating fd-star-rating " data-star-rating="4">

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211110&amp;rating=5"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211110" data-isnew="true"
                                           data-show-caption="true" data-value="5" title="Loved It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211110&amp;rating=4"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211110" data-isnew="true"
                                           data-show-caption="true" data-value="4" title="Really Liked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211110&amp;rating=3"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211110" data-isnew="true"
                                           data-show-caption="true" data-value="3" title="Liked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211110&amp;rating=2"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211110" data-isnew="true"
                                           data-show-caption="true" data-value="2" title="Disliked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211110&amp;rating=1"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211110" data-isnew="true"
                                           data-show-caption="true" data-value="1" title="Hated It">
                                        </a>

                                    </div>
                                </div>

                                <p className="fd-movie__rating-runtime">
                                    2 hr <br/>
                                    Drama
                                </p>
                            </div>
                            <ul className="fd-movie__showtimes">


                                <div className="fd-movie__showtimes-variant">


                                    <h3 className="fd-movie__showtimes__tick-headline font-serif">
                                        <span className="icon icon-ticket"></span>
                                        Select a movie time to buy Standard Showtimes
                                    </h3>


                                    <ul className="fd-movie__amentiy-list">


                                        <li className="fd-movie__amenity-icon-wrap">
                                            <a href="#" className=" fd-movie__amenity-icon js-amenity"
                                               data-amenity-desc="This film is presented in Telugu."
                                               data-amenity-name="Telugu">Telugu</a>
                                        </li>


                                    </ul>
                                    <ol className="fd-movie__btn-list">

                                        <li className="fd-movie__btn-list-item">


                                            <a className="btn showtime-btn showtime-btn--available"
                                               href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=221139421&amp;tid=AAFRF&amp;sdate=2018-04-16+23:00&amp;mid=211110&amp;from=mov_det_showtimes">11:00p</a>


                                        </li>

                                    </ol>
                                </div>


                            </ul>
                        </li>

                        <li className="fd-movie">
                            <div className="fd-movie__poster">
                                <a href="/mercury-2018-210358/movie-overview">
                                    <img
                                        src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/210358/mercury-Vertical3.jpg"
                                        alt=""/>
                                </a>


                            </div>
                            <div className="fd-movie__details">
                                <h3 className="fd-movie__title font-sans-serif font-lg font-300 uppercase">
                                    <a className="dark" href="/mercury-2018-210358/movie-overview">Mercury (2018)</a>

                                    <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_addmovie&amp;action=addmovie&amp;id=210358"
                                       className="icon icon-follow-gray fd-movie__follow-icon js-heartsAndStars-heart"
                                       data-type="Movie" data-id="210358" data-name="Mercury (2018)"
                                       data-is-favorite="false">
                                    </a>

                                </h3>


                                <div className="fd-star-rating__container">
                                    <div className="js-fd-star-rating fd-star-rating " data-star-rating="5">

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=210358&amp;rating=5"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="210358" data-isnew="true"
                                           data-show-caption="true" data-value="5" title="Loved It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=210358&amp;rating=4"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="210358" data-isnew="true"
                                           data-show-caption="true" data-value="4" title="Really Liked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=210358&amp;rating=3"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="210358" data-isnew="true"
                                           data-show-caption="true" data-value="3" title="Liked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=210358&amp;rating=2"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="210358" data-isnew="true"
                                           data-show-caption="true" data-value="2" title="Disliked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=210358&amp;rating=1"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="210358" data-isnew="true"
                                           data-show-caption="true" data-value="1" title="Hated It">
                                        </a>

                                    </div>
                                </div>

                                <p className="fd-movie__rating-runtime">
                                    1 hr 48 min <br/>
                                    Drama, Suspense/Thriller
                                </p>
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
                        </li>

                        <li className="fd-movie">
                            <div className="fd-movie__poster">
                                <a href="/orayiram-kinakkalal-211126/movie-overview">
                                    <img
                                        src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images.fandango.com/ImageRenderer/100/0/redesign/static/img/default_poster.png/0/redesign/static/img/default_poster.png"
                                        alt=""/>
                                </a>


                            </div>
                            <div className="fd-movie__details">
                                <h3 className="fd-movie__title font-sans-serif font-lg font-300 uppercase">
                                    <a className="dark" href="/orayiram-kinakkalal-211126/movie-overview">Orayiram
                                        Kinakkalal</a>

                                    <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_addmovie&amp;action=addmovie&amp;id=211126"
                                       className="icon icon-follow-gray fd-movie__follow-icon js-heartsAndStars-heart"
                                       data-type="Movie" data-id="211126" data-name="Orayiram Kinakkalal"
                                       data-is-favorite="false">
                                    </a>

                                </h3>


                                <div className="fd-star-rating__container">
                                    <div className="js-fd-star-rating fd-star-rating " data-star-rating="">

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211126&amp;rating=5"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211126" data-isnew="true"
                                           data-show-caption="true" data-value="5" title="Loved It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211126&amp;rating=4"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211126" data-isnew="true"
                                           data-show-caption="true" data-value="4" title="Really Liked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211126&amp;rating=3"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211126" data-isnew="true"
                                           data-show-caption="true" data-value="3" title="Liked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211126&amp;rating=2"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211126" data-isnew="true"
                                           data-show-caption="true" data-value="2" title="Disliked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211126&amp;rating=1"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211126" data-isnew="true"
                                           data-show-caption="true" data-value="1" title="Hated It">
                                        </a>

                                    </div>
                                </div>

                                <p className="fd-movie__rating-runtime">
                                    2 hr 15 min <br/>
                                    Comedy
                                </p>
                            </div>
                            <ul className="fd-movie__showtimes">


                                <li className="fd-movie__showtimes-variant">


                                    <h3 className="fd-movie__showtimes__tick-headline font-serif">
                                        <span className="icon icon-ticket"></span>
                                        Select a movie time to buy Standard Showtimes
                                    </h3>


                                    <ul className="fd-movie__amentiy-list">


                                        <li className="fd-movie__amenity-icon-wrap">
                                            <a href="#" className=" fd-movie__amenity-icon js-amenity"
                                               data-amenity-desc="This film is presented in the Malayalam language."
                                               data-amenity-name="Malayalam">Malayalam</a>
                                        </li>


                                    </ul>
                                    <ol className="fd-movie__btn-list">

                                        <li className="fd-movie__btn-list-item">


                                            <a className="btn showtime-btn showtime-btn--available"
                                               href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=221139416&amp;tid=AAFRF&amp;sdate=2018-04-16+20:00&amp;mid=211126&amp;from=mov_det_showtimes">8:00p</a>


                                        </li>

                                    </ol>
                                </li>


                            </ul>
                        </li>

                        <li className="fd-movie">
                            <div className="fd-movie__poster">
                                <a href="/gultoo-211109/movie-overview">
                                    <img
                                        src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images.fandango.com/ImageRenderer/100/0/redesign/static/img/default_poster.png/0/redesign/static/img/default_poster.png"
                                        alt=""/>
                                </a>


                            </div>
                            <div className="fd-movie__details">
                                <h3 className="fd-movie__title font-sans-serif font-lg font-300 uppercase">
                                    <a className="dark" href="/gultoo-211109/movie-overview">Gultoo</a>

                                    <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_addmovie&amp;action=addmovie&amp;id=211109"
                                       className="icon icon-follow-gray fd-movie__follow-icon js-heartsAndStars-heart"
                                       data-type="Movie" data-id="211109" data-name="Gultoo" data-is-favorite="false">
                                    </a>

                                </h3>


                                <div className="fd-star-rating__container">
                                    <div className="js-fd-star-rating fd-star-rating " data-star-rating="">

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211109&amp;rating=5"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211109" data-isnew="true"
                                           data-show-caption="true" data-value="5" title="Loved It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211109&amp;rating=4"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211109" data-isnew="true"
                                           data-show-caption="true" data-value="4" title="Really Liked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211109&amp;rating=3"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211109" data-isnew="true"
                                           data-show-caption="true" data-value="3" title="Liked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211109&amp;rating=2"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211109" data-isnew="true"
                                           data-show-caption="true" data-value="2" title="Disliked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=211109&amp;rating=1"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="211109" data-isnew="true"
                                           data-show-caption="true" data-value="1" title="Hated It">
                                        </a>

                                    </div>
                                </div>

                                <p className="fd-movie__rating-runtime">
                                    <br/>
                                    Drama
                                </p>
                            </div>
                            <ul className="fd-movie__showtimes">


                                <li className="fd-movie__showtimes-variant">


                                    <h3 className="fd-movie__showtimes__tick-headline font-serif">
                                        <span className="icon icon-ticket"></span>
                                        Select a movie time to buy Standard Showtimes
                                    </h3>


                                    <ul className="fd-movie__amentiy-list">


                                        <li className="fd-movie__amenity-icon-wrap">
                                            <a href="#" className=" fd-movie__amenity-icon js-amenity"
                                               data-amenity-desc="This film is presented in the Kannada language."
                                               data-amenity-name="Kannada">Kannada</a>
                                        </li>


                                    </ul>
                                    <ol className="fd-movie__btn-list">

                                        <li className="fd-movie__btn-list-item">


                                            <span className="btn showtime-btn showtime-btn--expired js-amenity"
                                                  data-amenity-desc="Looks like this movie has already started – let’s try another showtime."
                                                  data-amenity-name="Ticket Availability">5:00p</span>


                                        </li>

                                        <li className="fd-movie__btn-list-item">


                                            <a className="btn showtime-btn showtime-btn--available"
                                               href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=221139417&amp;tid=AAFRF&amp;sdate=2018-04-16+20:00&amp;mid=211109&amp;from=mov_det_showtimes">8:00p</a>


                                        </li>

                                    </ol>
                                </li>


                            </ul>
                        </li>

                        <li className="fd-movie">
                            <div className="fd-movie__poster">
                                <a href="/rangasthalam-telugu-209878/movie-overview">
                                    <img
                                        src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images.fandango.com/ImageRenderer/100/0/redesign/static/img/default_poster.png/0/redesign/static/img/default_poster.png"
                                        alt=""/>
                                </a>


                            </div>
                            <div className="fd-movie__details">
                                <h3 className="fd-movie__title font-sans-serif font-lg font-300 uppercase">
                                    <a className="dark" href="/rangasthalam-telugu-209878/movie-overview">Rangasthalam
                                        (Telugu)</a>

                                    <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_addmovie&amp;action=addmovie&amp;id=209878"
                                       className="icon icon-follow-gray fd-movie__follow-icon js-heartsAndStars-heart"
                                       data-type="Movie" data-id="209878" data-name="Rangasthalam (Telugu)"
                                       data-is-favorite="false">
                                    </a>

                                </h3>


                                <div className="fd-star-rating__container">
                                    <div className="js-fd-star-rating fd-star-rating " data-star-rating="4.5">

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=209878&amp;rating=5"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="209878" data-isnew="true"
                                           data-show-caption="true" data-value="5" title="Loved It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=209878&amp;rating=4"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="209878" data-isnew="true"
                                           data-show-caption="true" data-value="4" title="Really Liked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=209878&amp;rating=3"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="209878" data-isnew="true"
                                           data-show-caption="true" data-value="3" title="Liked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=209878&amp;rating=2"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="209878" data-isnew="true"
                                           data-show-caption="true" data-value="2" title="Disliked It">
                                        </a>

                                        <a href="https://www.fandango.com/account/joinnow?from=https%3A%2F%2Fwww.fandango.com%2Fsan%2Bjose_ca_movietimes&amp;source=web_multiple_ratemovie&amp;action=ratereviewmovie&amp;id=209878&amp;rating=1"
                                           className="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star"
                                           data-action="rate" data-id="209878" data-isnew="true"
                                           data-show-caption="true" data-value="1" title="Hated It">
                                        </a>

                                    </div>
                                </div>

                                <p className="fd-movie__rating-runtime">
                                    2 hr 54 min <br/>

                                </p>
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
                                                  data-amenity-name="Ticket Availability">4:35p</span>


                                        </li>

                                        <li className="fd-movie__btn-list-item">


                                            <a className="btn showtime-btn showtime-btn--available"
                                               href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=221139420&amp;tid=AAFRF&amp;sdate=2018-04-16+22:50&amp;mid=209878&amp;from=mov_det_showtimes">10:50p</a>


                                        </li>

                                    </ol>
                                </li>


                            </ul>
                        </li>


                    </ul>

                </div>
            </div>
        )
    }
}


export default connect(null, null)(MovieTopSection);

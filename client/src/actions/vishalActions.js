import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';

export const DEMO = 'demo';

function sendDemo(payload) {
    return {
        type: DEMO,
        payload: payload
    }
}

export function demo() {
    return (dispatch) => {
        const response = axios.get('https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=aba59941e2c758715d351fcccc18d98e')
            .then(response => {
                console.log(response.data.results.length);
                // dispatch(sendDemo(response.data.results))
                _.map(response.data.results, movie => {
                    const response = axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=aba59941e2c758715d351fcccc18d98e&language=en-US&append_to_response=videos,release_dates,casts`)
                        .then(response => {
                            console.log(response.data.backdrop_path);
                            console.log(response.data.original_language);
                            console.log(response.data.title);
                            console.log(response.data.overview);
                            console.log(response.data.poster_path);
                            console.log(new Date(response.data.release_date));
                            console.log(response.data.runtime);
                            console.log(response.data.status);
                            console.log(response.data.tagline);
                            console.log(response.data.vote_average);
                            console.log(response.data.videos.results[0].key);
                            console.log(response.data.casts.cast.slice(0, 6));
                            console.log(response.data.casts.crew.slice(0, 6));


                            console.log(response.data.release_date);

                            console.log(new Date(response.data.release_date))

                            // var date = moment
                            // var time = moment.utc("09:25", "HH:mm");
                            // console.log(time.hour())


                            // const response1 = axios.post(`http://localhost:3001/dummyData`, {
                            //     'movieId' : movie.id,
                            //     'title': response.data.title,
                            //     'backdrop_path': response.data.backdrop_path,
                            //     'original_language': response.data.original_language,
                            //     'overview': response.data.overview,
                            //     'poster_path': response.data.poster_path,
                            //     'release_date': response.data.release_date,
                            //     'runtime': response.data.runtime,
                            //     'status': response.data.status,
                            //     'tagline': response.data.tagline,
                            //     'vote_average': response.data.vote_average,
                            //     'vote_count' : 100,
                            //     'youtube_trailer': response.data.videos.results[0].key,
                            //     'cast': response.data.casts.cast.slice(0, 6),
                            //     'crew' : response.data.casts.crew.slice(0, 6),
                            //     'rating' : 'PG-13',
                            //
                            // })
                            //     .then(response1 => {
                            //         console.log("done")
                            //     }).catch(error => {
                            //         console.log(error);
                            //     });


                        }).catch(error => {
                            console.log(error);
                        });
                })
            }).catch(error => {
                console.log(error);
            });
    }
}
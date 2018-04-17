import axios from 'axios';
export const DEMO = 'demo';

function sendDemo(payload){
    return{
        type : DEMO,
        payload : payload
    }
}

export function demo() {
    return (dispatch) => {
        const response = axios.get('https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=aba59941e2c758715d351fcccc18d98e')
            .then(response => {
                console.log(response.data.results);
                dispatch(sendDemo(response.data.results))
            }).catch(error => {
                console.log(error);
            });
    }
}
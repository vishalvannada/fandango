import {DEMO} from "../actions/homeActions";

//state may be object or array or anything that we want

const home = {
    movies : []
}

export default function (state = home, action) {
    switch (action.type) {
        case DEMO:
            return {
                movies: action.payload
            }
        default:
            return state;
    }
}

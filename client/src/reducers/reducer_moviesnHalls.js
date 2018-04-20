const home = {
    movies:{
        moviemap:[]
    }
    }

export default function (state = home, action) {
    switch (action.type) {
        case "MOVIES_SEARCH_DROPDOWN":
            return {
                movies: action.payload
            }
        default:
            return state;
    }
}
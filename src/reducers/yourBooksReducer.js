import { BOOKS_LOADING, SET_BOOKS } from "../actions/types";

const initialState = {
    books: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: action.payload
            };
        case BOOKS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}

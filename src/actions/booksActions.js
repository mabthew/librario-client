import axios from "axios";

import { BOOKS_LOADING, GET_ERRORS, SET_BOOKS } from "./types";

// Register User
export const getYourBooks = (userData) => dispatch => {
    axios
        .get("/api/users/books/", { params: userData })
        .then((books) => {
            // Set books
            dispatch(setYourBooks(books.data));
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
        );
};

// Set logged in user
export const setYourBooks = books => {
    return {
        type: SET_BOOKS,
        payload: books
    };
};

// Books loading
export const setYourBooksLoading = () => {
    return {
        type: BOOKS_LOADING
    };
};
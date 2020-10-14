import axios from "axios";

import { ACCOUNT_INFO_LOADING, GET_ERRORS, SET_ACCOUNT_INFO } from "./types";

// Get account info
export const getAccountInfo = (userData) => dispatch => {
    axios
        .get("/api/users/account_info/", { params: userData })
        .then((account) => {
            // Set account info
            dispatch(setAccountInfo(account.data));
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

// Set account info
export const setAccountInfo = accountInfo => {
    return {
        type: SET_ACCOUNT_INFO,
        payload: accountInfo
    };
};

// Account info loading
export const setAccountInfoLoading = () => {
    return {
        type: ACCOUNT_INFO_LOADING
    };
};
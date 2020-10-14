import { ACCOUNT_INFO_LOADING, SET_ACCOUNT_INFO } from "../actions/types";

const initialState = {
    accountInfo: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ACCOUNT_INFO:
            return {
                ...state,
                accountInfo: action.payload
            };
        case ACCOUNT_INFO_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}

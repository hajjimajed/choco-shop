import { CHOCOLATES_ACTION_TYPES } from "./chocolates.types";

const CHOCOLATES_INITIAL_STATE = {
    chocolates: [],
    isLoading: false,
    error: null
}

export const chocolatesReducer = (state = CHOCOLATES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CHOCOLATES_ACTION_TYPES.FETCH_CHOCOLATES_START:
            return {
                ...state,
                isLoading: true
            }
        case CHOCOLATES_ACTION_TYPES.FETCH_CHOCOLATES_SUCCESS:
            return {
                ...state,
                chocolates: payload,
                isLoading: false
            }
        case CHOCOLATES_ACTION_TYPES.FETCH_CHOCOLATES_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state;

    }
}
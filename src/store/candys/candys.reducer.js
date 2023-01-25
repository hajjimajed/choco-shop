import { CANDYS_ACTION_TYPES } from "./candys.types";

const CANDYS_INITIAL_STATE = {
    candys: [],
    isLoading: false,
    error: null
}

export const candysReducer = (state = CANDYS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CANDYS_ACTION_TYPES.FETCH_CANDYS_START:
            return {
                ...state,
                isLoading: true
            }
        case CANDYS_ACTION_TYPES.FETCH_CANDYS_SUCCESS:
            return {
                ...state,
                chocolates: payload,
                isLoading: false
            }
        case CANDYS_ACTION_TYPES.FETCH_CANDYS_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state;

    }
}
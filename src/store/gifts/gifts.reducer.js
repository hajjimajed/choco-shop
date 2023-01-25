import { GIFTS_ACTION_TYPES } from "./gifts.types"

const GIFTS_INITIAL_STATE = {
    gifts: [],
    isLoading: false,
    error: null
}

export const giftsReducer = (state = GIFTS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case GIFTS_ACTION_TYPES.FETCH_GIFTS_START:
            return {
                ...state,
                isLoading: true
            }
        case GIFTS_ACTION_TYPES.FETCH_GIFTS_SUCCESS:
            return {
                ...state,
                chocolates: payload,
                isLoading: false
            }
        case GIFTS_ACTION_TYPES.FETCH_GIFTS_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state;

    }
}
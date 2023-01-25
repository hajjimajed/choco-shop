import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { createAction } from "../../utils/reducer/reducer.utils";

import { CHOCOLATES_ACTION_TYPES } from "./chocolates.types";

export const fetchChocolatesStart = () =>
    createAction(CHOCOLATES_ACTION_TYPES.FETCH_CHOCOLATES_START)

export const fetchChocolatesSuccess = (chocolatesArray) =>
    createAction(CHOCOLATES_ACTION_TYPES.FETCH_CHOCOLATES_SUCCESS, chocolatesArray)

export const fetchChocolatesFailed = (error) =>
    createAction(CHOCOLATES_ACTION_TYPES.FETCH_CHOCOLATES_FAILED, error)

export const fetchChocolatesAsync = () => async (dispatch) => {
    dispatch(fetchChocolatesStart());

    try {
        const chocolatesArray = await getCategoriesAndDocuments('chocolates');
        dispatch(fetchChocolatesSuccess(chocolatesArray));
    } catch (error) {
        dispatch(fetchChocolatesFailed())
    }
}
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { createAction } from "../../utils/reducer/reducer.utils";

import { GIFTS_ACTION_TYPES } from "./gifts.types"

export const fetchGiftsStart = () =>
    createAction(GIFTS_ACTION_TYPES.FETCH_GIFTS_START)

export const fetchGiftsSuccess = (giftsArray) =>
    createAction(GIFTS_ACTION_TYPES.FETCH_GIFTS_SUCCESS, giftsArray)

export const fetchGiftsFailed = (error) =>
    createAction(GIFTS_ACTION_TYPES.FETCH_GIFTS_FAILED, error)

export const fetchGiftsAsync = () => async (dispatch) => {
    dispatch(fetchGiftsStart());

    try {
        const giftsArray = await getCategoriesAndDocuments('gifts');
        dispatch(fetchGiftsSuccess(giftsArray));
        console.log(giftsArray)
    } catch (error) {
        dispatch(fetchGiftsFailed())
    }
}
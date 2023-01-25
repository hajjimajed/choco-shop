import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { createAction } from "../../utils/reducer/reducer.utils";

import { CANDYS_ACTION_TYPES } from "./candys.types";

export const fetchCandysStart = () =>
    createAction(CANDYS_ACTION_TYPES.FETCH_CANDYS_START);

export const fetchCandysSuccess = (candysArray) =>
    createAction(CANDYS_ACTION_TYPES.FETCH_CANDYS_SUCCESS, candysArray);

export const fetchCandysFailed = (error) =>
    createAction(CANDYS_ACTION_TYPES.FETCH_CANDYS_FAILED, error);

export const fetchCandysAsync = () => async (dispatch) => {
    dispatch(fetchCandysStart());

    try {
        const candysArray = await getCategoriesAndDocuments('candys');
        dispatch(fetchCandysSuccess(candysArray));
    } catch (error) {
        dispatch(fetchCandysFailed())
    }
}
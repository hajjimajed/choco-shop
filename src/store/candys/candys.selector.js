import { createSelector } from "reselect";

const selectCandyReducer = (state) => state.candys;

export const selectCandys = createSelector(
    [selectCandyReducer],
    (candysSlice) => candysSlice.candys
)

export const selectCandysMap = createSelector(
    [selectCandys],
    (candys) => candys.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
)

export const selectCandysIsLoading = createSelector(
    [selectCandyReducer],
    (candysSlice) => candysSlice.isLoading
)
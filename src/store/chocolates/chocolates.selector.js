import { createSelector } from "reselect";

const selectChocolateReducer = (state) => state.chocolates;

export const selectChocolates = createSelector(
    [selectChocolateReducer],
    (chocolatesSlice) => chocolatesSlice.chocolates
)

export const selectChocolatesMap = createSelector(
    [selectChocolates],
    (chocolates) => chocolates.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
)

export const selectChocolatesIsLoading = createSelector(
    [selectChocolateReducer],
    (chocolatesSlice) => chocolatesSlice.isLoading
)
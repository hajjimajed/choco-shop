import { createSelector } from "reselect";

const selectGiftReducer = (state) => state.gifts;

export const selectGifts = createSelector(
    [selectGiftReducer],
    (giftsSlice) => giftsSlice.gifts
)

export const selectGiftsMap = createSelector(
    [selectGifts],
    (gifts) => gifts.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
)

export const selectGiftsIsLoading = createSelector(
    [selectGiftReducer],
    (giftsSlice) => giftsSlice.isLoading
)
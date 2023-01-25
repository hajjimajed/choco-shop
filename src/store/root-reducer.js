import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";

import { chocolatesReducer } from "./chocolates/chocolates.reducer";
import { candysReducer } from "./candys/candys.reducer";
import { giftsReducer } from "./gifts/gifts.reducer"

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    chocolates: chocolatesReducer,
    candys: candysReducer,
    gifts: giftsReducer
})

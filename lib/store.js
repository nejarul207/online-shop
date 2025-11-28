import { configureStore } from '@reduxjs/toolkit'
// /lib/store.js

import cartReducer from './features/cart/cartSlice'
import productReducer from './features/product/productSlice'
import addressReducer from './features/address/addressSlice' // ⬅️ এই বানানটি নিশ্চিত করুন
import ratingReducer from './features/rating/ratingSlice'     // ⬅️ এই বানানটিও নিশ্চিত করুন
// ...

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartReducer,
            product: productReducer,
            address: addressReducer,
            rating: ratingReducer,
        },
    })
}
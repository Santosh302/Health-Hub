import { configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice';

import razorpayReducer from './slices/razorPaySlice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        product:productReducer,
        
        razorpay: razorpayReducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../config/axiosInstance";
const  initialState = {
    productList:[]
}

export const getAllProducts = createAsyncThunk("/product/getAllProducts", async (data)=> {
    try {
        const response =axiosInstance.get("/products", data);
        toast.promise(response, {
            loading: 'Wait ! fetching all Products',
            success:(data)=>{
                return data?.data?.message;
            },
            error:'Failed to laod Products'
        });
        return (await response).data.products;
    } catch(error){
        console.log(error);
        toast.error(error?.response?.data?.message);
        
    }
})

export const createNewProduct = createAsyncThunk("./product/create", async(data)=>{
    try {
        let formData = new FormData();
        formData.append("title", data?.title);
        formData.append("description", data?.description);
        formData.append("price", data?.price);
        formData.append("thumbnail", data?.thumbnail);

        const response =axiosInstance.post("/products", formData);
        toast.promise(response, {
            loading:'Wait ! Creating new Products',
            success:(data)=>{
                return data?.data?.message;
            },
            error:'Failed to create product'
        });  
        return (await response).data;
    }catch(error){
        console.log(error);
        toast.error(error?.response?.data?.message);
    }
})

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            console.log(action.payload)
            if(action?.payload){
                state.productList=[...action.payload];
            }
        });
        builder.addCase(createNewProduct.fulfilled, (state, action)=>{
            if(action?.payload){
                state.productList.push(action.payload);
            }
        });
    },
});


export default productSlice.reducer;
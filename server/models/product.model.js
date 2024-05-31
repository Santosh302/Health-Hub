import {model, Schema } from 'mongoose';

const productSchema = new Schema(
    {
        thumbnail:{
            public_id:{
                type:String,
            },
            secure_url:{
                type:String,
            },
        },
        productName:{
            type:String,
            required:[true, 'Title is required'],
            
        },
        price:{
            type:Number,
            required:[true, 'Price must be required'],
        },
        oldPrice:{
            type:Number, 
            required:false
        },
        offer:{
            type:String,
            required:false
        },
        quantity:{
            type:Number,
            required:false
        },
        category:{
            type:String,
            required:[true, 'Category is required'],
        },
        description:{
            type:String,
            required:[true,'Description is required'],
            minlength:[10, 'Description must be atleast 10 character long'],
        },
       
    },
    {
        timestamps:true,
    }
);

const Product =model('Product', productSchema);

export default Product;
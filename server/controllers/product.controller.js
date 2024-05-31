import fs from 'fs/promises';
import path from 'path';

import cloudinary from 'cloudinary';

import asyncHandler from '../middlewares/asyncHandler.middleware.js';
import Product from '../models/product.model.js';
import AppError from '../utils/appError.js';


/**
 * @ALL_PRODUCTS
 * @ROUTE @GET {{URL}}/api/v1/products
 * @ACCESS Public
 */

export const getAllProducts = asyncHandler( async (_req, res, next)=>{
    //Find all the products
    const products = await Product.find({})

    res.status(200).json({
        success:true,
        message:'All Products',
        products,
    });
});

/**
 * @CREATE_PRODUCT
 * @ROUTE @POST {{URL}}/api/v1/products
 * @ACCESS Private (admin only)
 */

export const createProduct =asyncHandler(async (req, res, next)=>{
    const { productName, description, category, price} =req.body;

    if(!productName || !description || !category || !price){
        return next (new AppError('All fileds are required', 400));
    }

    const product = await Product.create({
        productName,
        description,
        category,
        price,
    });
    if(!product){
        return next(
            new AppError('Product could not be created, please try again', 400)
        );      
    }

    //Run only if user sends a file
    if(req.file){
        try{
            const result= await cloudinary.v2.uploader.upload(req.file.path, {
                folder:'lms', //Save files in a folder named lms
            });

            //If success
            if(result){
                product.thumbnail.public_id = result.public_id;
                product.thumbnail.secure_url = result.secure_url;
            }

            //After successful upload remove the file from local storage
            fs.rm(`uploads/${req.file.filename}`);
        }catch(error){
            //Empty the  uploads directory without deleting the uploads directory
            for( const file of await fs.readdir('uploads/')){
                await fs.unlink(path.join('uploads/', file));
            }
            
            //send the error message
            return  next(
                new AppError(
                    JSON.stringify(error) || 'File not uploaded, please try again ',
                    400
                )
            );
        }
    }
    //Save the changes
    await product.save();

    res.status(201).json({
        success:true,
        message:'Product Created successfully',
        product,
    });
});

/**
 * @UPDATE_PRODUCT_BY_ID
 * @ROUTE @PUT {URL}/api/v1/products/:id
 * @ACCESS Private (admin only)
 */

export const updateProductById =asyncHandler(async (req, res, next)=>{
    //Extracting the products id from the request params
    const {id}= req.params;

    //Finding the product using the product  id
    const product = await Product.findByIdAndUpdate(
        id,
        {
            $set:req.body, //This will only update the fields which are present
        },
        {
            runValidators:true, //This will run the validation checks on the new data 
        }
    );

    //If no product found then send the response for the same
    if (!product){
        return next(new AppError('Invalid product id or products not found.', 400));
    }

    //Sending the response after success
    res.status(200).json({
        success:true,
        message:'Product updated successfully',
    });
});

/**
 * @DELETE_PRODUCT_BY_ID
 * @ROUTE @DELETE {URL}/api/v1/products/:id
 * @ACCESS Private (Admin only)
 */

export const deleteProductById = asyncHandler( async (req, res, next)=>{
    //Extracting id from the request parameters
    const { id }= req.params;

    // Finding the product via the product_ID
    const product = await Product.findById(id);

    //If course not find send the message as stated below
    if(!product){
        return next(new AppError('Product with given id does not exit.', 404));        
    }
    //Remove course
    await course.remove();

    //Send the message as response
    res.status(200).json({
        success:true,
        message:'Product deleted successfully',
    });
});
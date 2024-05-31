import { Router } from 'express';
import {
    createProduct,
    deleteProductById,
    getAllProducts, 
    updateProductById,
} from '../controllers/product.controller.js';
import {
    authorizeRoles,
    isLoggedIn,
} from '../middlewares/auth.middleware.js';
import upload from '../middlewares/multer.middleware.js';

const router =Router();

router
    .route('/')
    .get(getAllProducts)
    .post(
        isLoggedIn,
        //authorizeRoles('ADMIN'),
        upload.single('thumbnail'),
        createProduct
    )
    
router
    .route('/:id')
    .put(isLoggedIn, authorizeRoles('ADMIN'), updateProductById)
    .delete(isLoggedIn, authorizeRoles('ADMIN'), deleteProductById); 

export default router;
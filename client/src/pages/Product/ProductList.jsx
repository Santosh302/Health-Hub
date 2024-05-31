import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/Cart/ProductCard.jsx'
import HomeLayout from '../../layouts/HomeLayout';
import { getAllProducts } from '../../redux/slices/productSlice';

function CourseList() {
    const dispatch = useDispatch();
    const { productList } = useSelector((state) => state.product);

    async function loadProducts() {
        await dispatch(getAllProducts());
    }

    useEffect(() => {
        loadProducts();
    }, [dispatch]);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
                <h1 className="text-center text-4xl font-semibold mb-5">
                    Explore Cow Product's
                </h1>
                <div className="mb-10 flex flex-wrap gap-14">
                    {productList?.map((element) => (
                        <ProductCard key={element._id} data={element} />
                    ))}
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseList;

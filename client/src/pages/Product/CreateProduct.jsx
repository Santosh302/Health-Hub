import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../layouts/HomeLayout";
import { createNewProduct } from "../../redux/slices/productSlice"; // Assuming you have a product slice

function CreateProduct() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [userInput, setUserInput] = useState({
        name: "",
        description: "",
        
        price: "",
        image: null, // file
        previewImage: ""
    });

    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function() {
                setUserInput({
                    ...userInput,
                    image: uploadedImage,
                    previewImage: this.result
                });
            });
        }
    }

    function handleUserInput(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if(!userInput.name || !userInput.description  || !userInput.price || !userInput.image) {
            toast.error("All fields are mandatory");
            return;
        }
        const response = await dispatch(createNewProduct(userInput));
        console.log(response);
        if(response?.payload?.success) {
            setUserInput({
                name: "",
                description: "",
               
                price: "",
                image: null, // file
                previewImage: ""
            });
            navigate("/productList");
        }
    }

    return (
        <HomeLayout>
            <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>

                <form
                    onSubmit={onFormSubmit}
                    className="d-flex flex-column justify-content-center gap-3 p-4 text-white bg-dark rounded shadow-lg"
                    style={{ height: "500px", width: "700px", margin: "auto" }}
                >   
                    <Link onClick={() => navigate(-1)} className="position-absolute top-0 mt-3 ml-3 text-white cursor-pointer">
                        <AiOutlineArrowLeft size={24} />
                    </Link>
                    <h1 className="text-center">Create New Product</h1>

                    <div className="row gap-3">
                        {/* Left */}
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="image_uploads" className="form-label cursor-pointer">
                                    {userInput?.previewImage ? (
                                        <img 
                                            src={userInput?.previewImage}
                                            className="img-fluid border"
                                            alt="Product Thumbnail"
                                        />
                                    ): (
                                        <div className="d-flex align-items-center justify-content-center border" style={{ height: "180px" }}>
                                            <h1 className="text-center">Upload Product Image</h1>
                                        </div>
                                    )}
                                </label>
                                <input 
                                    className="form-control d-none"
                                    type="file"
                                    id="image_uploads"
                                    accept=".jpg, .png, .jpeg, .svg"
                                    name="image_uploads"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Product Name</label>
                                <input 
                                    required
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter the name of the product"
                                    onChange={handleUserInput}
                                    value={userInput.name}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        {/* Right */}
                        <div className="col">
                            {/* <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <input 
                                    required
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter the category of the product"
                                    onChange={handleUserInput}
                                    value={userInput.category}
                                    className="form-control"
                                />
                            </div> */}

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input 
                                    required
                                    type="text"
                                    name="price"
                                    id="price"
                                    placeholder="Enter the price of the product"
                                    onChange={handleUserInput}
                                    value={userInput.price}
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea 
                                    required
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter the description of the product"
                                    onChange={handleUserInput}
                                    value={userInput.description}
                                    className="form-control"
                                    style={{ height: "120px", resize: "none" }}
                                />
                            </div>

                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-warning w-100 mt-3"
                    >
                        Create Product
                    </button>
                </form>

            </div>
        </HomeLayout>
    );
}

export default CreateProduct;

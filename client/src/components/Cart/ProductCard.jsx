import {Link, useNavigate } from "react-router-dom";

function CourseCard({ data }) {
    const navigate = useNavigate();

    return (
        <div className="card " style={{width: '18rum' }} >
                <img 
                    alt="Product  thumbnail"
                    src={data?.thumbnail?.secure_url}
                    className="card-img-top"
                    style={{ height: '12rem', objectFit: 'cover', transition: 'transform 0.3s' }}
                />
            
            <div className="card-body">
                <h5 className="card-title text-warning">
                    {data?.title}
                </h5>
                <p className="card-text">
                    {data?.description}
                </p>
                
                <p className="card-text">
                    <strong>Price:</strong> <span className="text-warning">{data?.price}</span>
                </p>
                <Link 
                    onClick={() => navigate("/product/description", { state: { ...data } })}
                    className="btn btn-success mt-3"
                >
                     Product Description
                </Link> &nbsp;
                <Link 
                    onClick={() => navigate("/product/Checkout", { state: { ...data } })}
                    className="btn btn-success mt-3"
                >
                    Buy Product
                </Link>
            </div>
           
        </div>
    );
}

export default CourseCard;

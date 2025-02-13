import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className="col">
            <div className="card mb-5" style={{ width: "18rem" }}>
                <img src={product.images[0].image} className="card-img-top" alt="..." />
                <div className="card-body">
                <Link to={'/products/'+product._id} className="text-dark" style={{ textDecoration: "none" }}>{product.name}</Link>
                    <p className="card-text mt-2">${product.price}</p>
                    <Link to={'/products/'+product._id} className="btn btn-warning">View More</Link>
                </div>
            </div>
        </div>
    )                               
}

export default ProductCard
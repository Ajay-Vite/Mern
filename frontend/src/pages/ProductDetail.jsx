import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const ProductDetail = ({ cartItems, setCartItems }) => {

  const [product, setProduct] = useState(null)
  const [qty, setQty] = useState(1)
  const { id } = useParams()

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/products/' + id)
      .then(res => res.json())
      .then(res => {
        console.log('API Response:', res); // Log the API response
        setProduct(res.products);
      })
      .catch(error => console.error('Error fetching product:', error)); // Log any errors
  }, [id])

  function addToCart() {
    const itemExist = cartItems.find((item) => item.product._id == product._id)
    if (!itemExist) {
      const newItem = { product, qty }
      setCartItems((state) => [...state, newItem]);
      toast.success("Added To Cart To Successfully")
    }
  }

  function increaseQty() {
    if (product.stock == qty) {
      return;
    }
    setQty((state) => state + 1)
  }

  return product && (
    <>
      <div className="container container-fluid">
        <div className="row f-flex justify-content-around">
          <div className="col-12 col-lg-5 img-fluid" id="product_image">
            <img src={product.images[0].image} alt={product.name} height="500" width="500" />
          </div>

          <div className="col-12 col-lg-5 mt-5">
            <h3>{product.name}</h3>
            <p id="product_id">Product # {product._id}</p>

            <h3 id="product_price">${product.price}</h3>
            <br />
            <div className="stockCounter d-inline">
              <span className="btn btn-danger minus" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</span>

              <input type="number" className="form-control count d-inline" value={qty} onChange={(e) => setQty(e.target.value)} />

              <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
            </div>
            <br />
            <br />
            <button type="button" onClick={addToCart} id="cart_btn" className="btn btn-warning d-inline ml-4">Add to Cart</button>

            <hr />

            <h5>Status: <span id="stock_status" className={product.stock > 0 ? 'text-success' : 'text-danger'}>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></h5>

            <hr />

            <h4 className="mt-2">Description:</h4>
            <p>{product.description}</p>
            <hr />
            <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>

            <div className="rating w-50"></div>

          </div>

        </div>

      </div>
    </>
  )
}

export default ProductDetail
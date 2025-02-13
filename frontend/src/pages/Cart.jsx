import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = ({ cartItems, setCartItems }) => {

  const [complete, setComplete] = useState(false)

  function increaseQty(item) {
    if (item.product.stock === item.qty) {
      return;
    }
    const updatedItems = cartItems.map((i) => {
      if (i.product._id === item.product._id) {
        return { ...i, qty: i.qty + 1 };
      }
      return i;
    });
    setCartItems(updatedItems);
  }

  function decreaseQty(item) {
    if (item.qty > 1) {
      const updatedItems = cartItems.map((i) => {
        if (i.product._id === item.product._id) {
          return { ...i, qty: i.qty - 1 };
        }
        return i;
      });
      setCartItems(updatedItems);
    }
  }

  function removeItem(item) {
    const updatedItems = cartItems.filter((i) => i.product._id !== item.product._id);
    setCartItems(updatedItems);
  }

  function placeOrderHandeler() {
    fetch(import.meta.env.VITE_API_URL + '/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartItems)
    }).then(() => {
      setCartItems([])
      setComplete(true)
      toast.success("Order Placed Successfully")
    })
  }

  return cartItems.length > 0 ? (
    <>
      <div className="container container-fluid">
        <h2 className="mt-5 text-center">Your Cart : <b>{cartItems.length}</b> Items</h2>

        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-8">
            {cartItems.map((item, index) => (
              <React.Fragment key={index}>
                <hr />
                <div className="cart-item">
                  <div className="row">
                    <div className="col-4 col-lg-3">
                      <img src={item.product.images[0].image} alt="Laptop" height="90" width="115" />
                    </div>

                    <div className="col-5 col-lg-3">
                      <Link to={`/products/${item.product._id}`} className="text-dark" style={{ textDecoration: 'none' }}>{item.product.name}</Link>
                    </div>

                    <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                      <p id="card_item_price" className="text-warning">${item.product.price}</p>
                    </div>

                    <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                      <div className="stockCounter d-inline">
                        <span className="btn btn-danger minus" onClick={() => decreaseQty(item)}>-</span>
                        <input type="number" className="form-control count d-inline" value={item.qty} readOnly />
                        <span className="btn btn-primary plus" onClick={() => increaseQty(item)}>+</span>
                      </div>
                    </div>

                    <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                      <p className="btn btn-danger" onClick={() => removeItem(item)}>
                        <img src={'/images/products/bin_icon.png'} style={{ width: 20 }} alt="" />
                      </p>
                    </div>

                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="col-12 col-lg-3 my-4">
            <div id="order_summary">
              <h4>Order Summary</h4>
              <hr />
              <p>Subtotal: <span className="order-summary-values">{cartItems.reduce((acc, item) => (acc + item.qty), 0)} (Units)</span></p>
              <p>Est. total: <span className="order-summary-values">${cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)}</span></p>
              <hr />
              <button id="checkout_btn" className="btn btn-primary btn-block" onClick={placeOrderHandeler}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (!complete ? <h2 className='mt-5 text-center'>Your Cart Is Empty!</h2> :
    <><h2 className='mt-5 text-center'>Your Order Has Been Placed Successfully</h2>
    </>)
}

export default Cart;
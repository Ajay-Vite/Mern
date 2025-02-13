import React, { useEffect, useState } from 'react'
import '../pages/Home.css'
import ProductCard from '../components/ProductCard'

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/products')
      .then(res => res.json())
      .then(res => setProducts(res.product))
  }, [])


  return (
    <>


      <section>
        <h5 className="display-5 text-center mt-2 mb-5" style={{ fontWeight: "bolder" }}>Latest Products</h5>

        {/* Cards */}

        <div className="container">
          <div className="row">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Fotter */}



    </>
  )
}

export default Home

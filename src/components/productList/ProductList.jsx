import "./productList.css"
import Product from "../product/Product";
import { products } from "../../data";
import React from 'react'

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Creation & inspiration</h1>
        <p className="pl-desc">
        Voici mon portfolio, vous y trouverez les principaux sites web auxquels j'ai participé.
        </p>
      </div>
      <div className="pl-list">
        {products.map((product) => (
          <Product key={product.id} img={product.img} link={product.link} />
          
        ))}
      </div>
    </div>
  );
};

export default ProductList

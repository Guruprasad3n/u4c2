import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({ proData }) => {
  return (
    <div data-testid="products-container">
      {proData.map((ele) => {
  
          <ProductItem
            key={ele.id}
            avatar={ele.image}
            price={ele.price}
            title={ele.title}
            category={ele.category} 
            />;
      })}
    </div>
  );
};

// export
export default ProductList;

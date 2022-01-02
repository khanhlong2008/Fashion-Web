import React from 'react';
import ProductItem from '../ProductItem';

const ProductList = ({ list }) => {
  return (
    <div className="product__container">
      {list.map(item => (
        <ProductItem key={item._id} {...item} />
      ))}
    </div>
  );
};

export default ProductList;

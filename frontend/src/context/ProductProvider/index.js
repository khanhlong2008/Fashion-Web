import React, { useEffect, useState } from 'react';
import ProductCtx from './ProductCtx';

const ProductProvider = props => {
  const [menList, setMenList] = useState([]);
  const [womenList, setWomenList] = useState([]);
  const products = womenList.concat(menList);

  useEffect(() => {
    let isMounted = true;

    fetch('http://localhost:5000/fashionapp/product_male')
      .then(reponse => reponse.json())
      .then(data => {
        if (isMounted) setMenList(data.product);
      });
    fetch('http://localhost:5000/fashionapp/product_female')
      .then(reponse => reponse.json())
      .then(data => {
        if (isMounted) setWomenList(data.product);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ProductCtx.Provider value={{ menList, womenList, products }}>
      {props.children}
    </ProductCtx.Provider>
  );
};

export default ProductProvider;

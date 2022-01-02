import React, { useContext, useEffect, useState } from 'react';
import ProductCtx from '../../context/ProductProvider/ProductCtx';
import ProductList from '../ProductList';

const listProduct = [
  {
    id: 'h1',
    name: '8 Granddad Shirt',
    originPrice: 30,
    price: 23,
    star: 4,
    front: 'image/product-1-front.png',
    back: 'image/product-1-back.png',
  },
  {
    id: 'h2',
    name: 'Aloha Shirt For Men',
    originPrice: 36,
    price: 34,
    star: 0,
    front: 'image/product-2-front.png',
    back: 'image/product-2-back.png',
  },
  {
    id: 'h3',
    name: 'Epaulette Shirt',
    originPrice: 74,
    price: 65,
    star: 5,
    front: 'image/product-3-front.png',
    back: 'image/product-3-back.png',
  },
  {
    id: 'h4',
    name: 'Fancy Shirt For Women',
    originPrice: 0,
    price: 98,
    star: 0,
    front: 'image/product-4-front.png',
    back: 'image/product-4-back.png',
  },
  {
    id: 'h5',
    name: 'Formal Grey Shirt',
    originPrice: 0,
    price: 54,
    star: 0,
    front: 'image/product-5-front.png',
    back: 'image/product-5-back.png',
  },
  {
    id: 'h6',
    name: 'Girls Formal Shirt',
    originPrice: 51,
    price: 45,
    star: 4,
    front: 'image/product-6-front.png',
    back: 'image/product-6-back.png',
  },
  {
    id: 'h7',
    name: 'Jersey Shirt',
    originPrice: 0,
    price: 54,
    star: 4,
    front: 'image/product-7-front.png',
    back: 'image/product-7-back.png',
  },
  {
    id: 'h8',
    name: 'Lumberjack Shirt',
    originPrice: 38,
    price: 34,
    star: 4,
    front: 'image/product-8-front.png',
    back: 'image/product-8-back.png',
  },
];

const TopProduct = () => {
  const { menList, womenList } = useContext(ProductCtx);

  return (
    <section className="container top-product__wrapper py-5 d-block">
      <h2 className="text-center">TOP PRODUCTS</h2>
      <div
        className="nav nav-tabs nav-tabs-logo mb-3 align-items-center justify-content-center border-0"
        id="nav-tab"
        role="tablist"
      >
        <button
          className="nav-link active bg-transparent"
          id="men-tab"
          data-bs-toggle="tab"
          data-bs-target="#men"
          type="button"
          role="tab"
          aria-controls="men"
          aria-selected="true"
        >
          MEN
        </button>
        <button
          className="nav-link bg-transparent"
          id="women-tab"
          data-bs-toggle="tab"
          data-bs-target="#women"
          type="button"
          role="tab"
          aria-controls="women"
          aria-selected="false"
        >
          WOMEN
        </button>
      </div>
      <div className="tab-content mb-5" id="nav-tabContent">
        <div
          className="tab-pane fade show active "
          id="men"
          role="tabpanel"
          aria-labelledby="men-tab"
        >
          <ProductList
            list={menList.length >= 8 ? menList.slice(0, 8) : menList}
          ></ProductList>
        </div>
        <div
          className="tab-pane fade"
          id="women"
          role="tabpanel"
          aria-labelledby="women-tab"
        >
          <ProductList
            list={womenList.length >= 8 ? womenList.slice(0, 8) : womenList}
          />
        </div>
      </div>
    </section>
  );
};

export default TopProduct;

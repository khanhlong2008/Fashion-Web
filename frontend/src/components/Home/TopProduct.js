import React from 'react';
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
          id="featured-tab"
          data-bs-toggle="tab"
          data-bs-target="#featured"
          type="button"
          role="tab"
          aria-controls="featured"
          aria-selected="true"
        >
          FEATURED
        </button>
        <button
          className="nav-link bg-transparent"
          id="new-arrivals-tab"
          data-bs-toggle="tab"
          data-bs-target="#new-arrivals"
          type="button"
          role="tab"
          aria-controls="new-arrivals"
          aria-selected="false"
        >
          NEW ARRIVALS
        </button>
        <button
          className="nav-link bg-transparent"
          id="best-seller-tab"
          data-bs-toggle="tab"
          data-bs-target="#best-seller"
          type="button"
          role="tab"
          aria-controls="best-seller"
          aria-selected="false"
        >
          BEST SELLER
        </button>
      </div>
      <div className="tab-content mb-5" id="nav-tabContent">
        <div
          className="tab-pane fade show active "
          id="featured"
          role="tabpanel"
          aria-labelledby="featured-tab"
        >
          <ProductList list={listProduct} />
        </div>
        <div
          className="tab-pane fade"
          id="new-arrivals"
          role="tabpanel"
          aria-labelledby="new-arrivals-tab"
        >
          <ProductList list={listProduct} />
        </div>
        <div
          className="tab-pane fade"
          id="best-seller"
          role="tabpanel"
          aria-labelledby="best-seller-tab"
        >
          <ProductList list={listProduct} />
        </div>
      </div>
    </section>
  );
};

export default TopProduct;

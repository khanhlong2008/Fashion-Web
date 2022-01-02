import React, { useContext } from 'react';
import ProductCtx from '../../context/ProductProvider/ProductCtx';
import ProductList from '../Product/ProductList';

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

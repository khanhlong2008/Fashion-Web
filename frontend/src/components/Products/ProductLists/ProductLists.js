import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCtx from '../../../context/ProductProvider/ProductCtx';
import ProductList from '../../Product/ProductList';
import ProductModal from '../../Product/ProductModal';

import ProductFilter from '../ProductFilter/ProductFilter';
import './ProductList.css';

export default function ProductLists() {
  const { param } = useParams();
  const { menList, womenList } = useContext(ProductCtx);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="product-list">
        <div className="product-list-item-left">
          <ProductFilter />
        </div>
        <div className="product-list-item-right">
          <ProductList
            list={
              param === 'men' ? menList : param === 'women' ? womenList : []
            }
          />
        </div>
      </div>
      <ProductModal />
    </div>
  );
}

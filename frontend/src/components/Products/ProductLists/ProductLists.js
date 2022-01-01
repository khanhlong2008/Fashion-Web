import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCtx from '../../../context/ProductProvider/ProductCtx';
import ProductList from '../../ProductList';
import ProductModal from '../../ProductModal';
import ProductFilter from '../ProductFilter/ProductFilter';
import './ProductList.css';

export default function ProductLists() {
  const { param } = useParams();
  const { menList, womenList } = useContext(ProductCtx);

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

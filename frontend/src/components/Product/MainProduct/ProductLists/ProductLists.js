import { useContext, useEffect, useReducer, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductCtx from '../../../../context/ProductProvider/ProductCtx';
import ProductModal from '../../ProductDetail/ProductModal';
import ProductList from '../../TopProduct/ProductList';
import Filter from '../Filter';
import './ProductList.css';

const selectReducer = (state, action) => {
  switch (action.type) {
    case 'CHECK':
      return {
        ...state,
        availability: [...state[action.version], action.option],
      };
    case 'UNCHECK':
      return {
        ...state,
        availability: state[action.version].filter(s => s !== action.option),
      };
    case 'PRICE':
      return {
        ...state,
        [action.version]: [action.option],
      };

    case 'SORT_BY':
      return {
        ...state,
        sort_by: [action.payload],
      };
    default:
      return state;
  }
};

export default function ProductLists() {
  const { param } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterMode = {
    availability: [],
    priceGte: [],
    priceLte: [],
    color: [],
    size: [],
    sort_by: '',
  };

  for (let key in filterMode) {
    let searchState = queryParams.getAll(key);
    if (searchState.length > 0) filterMode[key] = searchState;
    else filterMode[key] = [];
  }
  const { menList, womenList } = useContext(ProductCtx);
  const [products, setProducts] = useState([]);
  const [selectOption, dispatch] = useReducer(selectReducer, filterMode);
  const pages = Math.ceil(products.length / 8);

  useEffect(() => {
    let products = param === 'men' ? menList : womenList;
    for (let key in filterMode) {
      if (key === 'availability') {
        if (filterMode[key].length === 2 || filterMode[key].length === 0)
          continue;
        else
          products = products.filter(product =>
            filterMode[key][0] === '1'
              ? product.quantity > 0
              : product.quantity === 0
          );
      }
      if (key === 'priceGte') {
        if (filterMode[key].length === 0) continue;
        if (filterMode[key].length === 1)
          products = products.filter(
            product => product.price > filterMode[key][0]
          );
      }
      if (key === 'priceLte') {
        if (filterMode[key].length === 0) continue;
        if (filterMode[key].length === 1)
          products = products.filter(
            product => product.price < filterMode[key][0]
          );
      }

      if (key === 'color') {
        if (filterMode[key].length === 0) continue;
        else {
          for (let c of filterMode[key]) {
            products = products.filter(product => product.color[c]);
          }
        }
      }

      if (key === 'size') {
        if (filterMode[key].length === 0) continue;
        else {
          for (let s of filterMode[key]) {
            products.filter(product => product.size[s]);
          }
        }
      }
    }

    setProducts(products);

    // eslint-disable-next-line
  }, [menList, womenList, param]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="product-list">
        <div className="product-list-item-left">
          <Filter selectOption={selectOption} />
        </div>
        <div className="product-list-item-right">
          <ProductList list={products} />
        </div>
      </div>
      <ProductModal />
    </div>
  );
}

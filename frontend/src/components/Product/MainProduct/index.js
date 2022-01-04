import { useContext, useEffect, useReducer, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import ProductCtx from '../../../context/ProductProvider/ProductCtx';
import ProductModal from '../ProductDetail/ProductModal';
import ProductList from '../TopProduct/ProductList';
import CustomSelect from './CustomSelect';
import Filter from './Filter';

const selectReducer = (state, action) => {
  switch (action.type) {
    case 'CHECK':
      return {
        ...state,
        [action.version]: [...state[action.version], action.option],
      };
    case 'UN_CHECK':
      return {
        ...state,
        [action.version]: state[action.version].filter(
          s => s !== action.option
        ),
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
    case 'CLEAR':
      return {
        availability: [],
        priceGte: [],
        priceLte: [],
        color: [],
        size: [],
        sort_by: [],
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
  const navigate = useNavigate();

  useEffect(() => {
    let products = param === 'men' ? menList : womenList;
    for (let key in selectOption) {
      if (key === 'availability') {
        if (selectOption[key].length === 2 || selectOption[key].length === 0)
          continue;
        else
          products = products.filter(product =>
            selectOption[key][0] === '1'
              ? product.quantity > 0
              : product.quantity === 0
          );
      }
      if (key === 'priceGte') {
        if (selectOption[key].length === 0) continue;
        if (selectOption[key].length === 1)
          products = products.filter(
            product => product.price > selectOption[key][0]
          );
      }
      if (key === 'priceLte') {
        if (selectOption[key].length === 0) continue;
        if (selectOption[key].length === 1 && +selectOption[key] > 0)
          products = products.filter(
            product => product.price < selectOption[key][0]
          );
      }

      if (key === 'color') {
        if (selectOption[key].length === 0) continue;
        else {
          products = products.filter(product => {
            for (let col in product.color) {
              if (product.color[col]) {
                if (selectOption[key].includes(col)) return true;
              }
            }
            return false;
          });
        }
      }

      if (key === 'size') {
        if (selectOption[key].length === 0) continue;
        else {
          products = products.filter(product => {
            for (let siz in product.size) {
              if (product.size[siz]) {
                if (selectOption[key].includes(siz)) return true;
              }
            }
            return false;
          });
        }
      }

      if (key === 'sort_by') {
        if (selectOption[key].length === 0) continue;
        if (selectOption[key][0] === 'az')
          products = products.sort((a, b) => a.title.localeCompare(b.title));
        if (selectOption[key][0] === 'za')
          products = products.sort((a, b) => b.title.localeCompare(a.title));
        if (selectOption[key][0] === 'lowtohigh')
          products = products.sort((a, b) => a.price - b.price);
        if (selectOption[key][0] === 'hightolow')
          products = products.sort((a, b) => b.price - a.price);
        if (selectOption[key][0] === 'oldtonew')
          products = products.sort((a, b) => a.date - b.date);
        if (selectOption[key][0] === 'oldtonew')
          products = products.sort((a, b) => b.date - a.date);
      }
    }

    setProducts(products);

    // eslint-disable-next-line
  }, [menList, womenList, param, selectOption]);

  const handleCheck = (type, version, option) => {
    dispatch({ type, version, option });
  };

  const handleSortBy = style => {
    dispatch({ type: 'SORT_BY', payload: style });
  };

  const handleInputPrice = (version, option) => {
    dispatch({ type: 'PRICE', version, option });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let link = '';

    for (let type in selectOption) {
      for (let option of selectOption[type]) {
        if (option) {
          if (link === '') link += `?${type}=${option}`;
          else link += `&${type}=${option}`;
        }
      }
    }
    navigate(`${location.pathname}${link}`);
    // eslint-disable-next-line
  }, [selectOption]);

  return (
    <div className="container product-list">
      <Filter
        selectOption={selectOption}
        handleCheck={handleCheck}
        handleInputPrice={handleInputPrice}
        handleClear={handleClear}
      />
      <div>
        <CustomSelect
          handleSortBy={handleSortBy}
          style={selectOption.sort_by[0]}
        />
        <ProductList list={products} />
      </div>

      <ProductModal />
    </div>
  );
}

import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/layout/LoadingSpiner';
import PageController from '../components/Product/MainProduct/PageController';
import ProductList from '../components/Product/TopProduct/ProductList';
import ProductCtx from '../context/ProductProvider/ProductCtx';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const onPage = queryParams.get('page');
  const search = queryParams.get('q');
  const [searchField, setSearchField] = useState('');
  const navigate = useNavigate();
  const { products, loaded } = useContext(ProductCtx);
  const [results, setResults] = useState({ list: [], pages: 0, onShow: 1 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSearchField(search);
    setLoading(true);
  }, [search]);

  useEffect(() => {
    if (loaded) {
      if (search) {
        const searchReg = new RegExp(search.trim().toLowerCase(), 'gi');
        let list = products.filter(({ title }) => searchReg.test(title));
        const pages = Math.ceil(list.length / 8);
        if (!onPage) {
          list = list.slice(0, 8);
        } else {
          list = list.slice((onPage - 1) * 8, onPage * 8);
        }

        setResults({
          list,
          pages,
          onShow: onPage,
        });
      } else {
        let list = [];
        const pages = Math.ceil(products.length / 8);
        if (!onPage) {
          list = products.slice(0, 8);
        } else {
          list = products.slice((onPage - 1) * 8, onPage * 8);
        }

        setResults({
          list,
          pages,
          onShow: onPage,
        });
      }

      setTimeout(() => setLoading(false), 500);
    }

    // eslint-disable-next-line
  }, [search, loaded, products, onPage]);

  const handleChangePage = page => {
    navigate(`/search?q=${searchField}&page=${page}`);
    window.scrollTo(0, 0);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    navigate(`/search?q=${searchField}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="search-page__container">
      <div className="search-bar__wrapper container my-0 d-block">
        <form className="search-bar__container" onSubmit={handleSubmit}>
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search..."
            value={searchField}
            onChange={e => setSearchField(e.target.value)}
          />
          <i
            className={`bi bi-x-circle-fill ${searchField ? 'show' : ''}`}
            onClick={() => setSearchField('')}
          ></i>
        </form>
      </div>
      <div className=" container result-container d-block">
        {loading && <LoadingSpinner />}
        {results.list.length === 0 && !loading && (
          <p className="no-product">No products found</p>
        )}
        {results.list.length > 0 && !loading && (
          <ProductList list={results.list} />
        )}
        {results.pages > 1 && !loading && (
          <PageController
            page={results.pages}
            onShow={onPage}
            handleChangePage={handleChangePage}
          />
        )}
      </div>
    </div>
  );
};

export default SearchPage;

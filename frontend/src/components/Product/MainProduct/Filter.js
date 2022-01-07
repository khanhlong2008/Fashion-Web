import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCtx from '../../../context/ProductProvider/ProductCtx';
import InputGroup from '../../CheckoutPage/InputGroup';

const Filter = ({
  selectOption,
  handleCheck,
  handleInputPrice,
  handleClear,
  showFilter,
  toggleFilter,
  filterMode,
}) => {
  const { param } = useParams();
  const { menList, womenList } = useContext(ProductCtx);
  const [gte, setGte] = useState(
    filterMode.priceGte[0] ? filterMode.priceGte[0] : ''
  );
  const [lte, setLte] = useState(
    filterMode.priceLte[0] ? filterMode.priceLte[0] : ''
  );

  const handleCheckForm = e => {
    const element = e.target;
    handleCheck(
      element.checked ? 'CHECK' : 'UN_CHECK',
      element.name,
      element.value
    );
  };

  const handlePriceForm = (e, type) => {
    const element = e.target;

    if (type === 'gte') setGte(element.value);
    if (type === 'lte') setLte(element.value);

    handleInputPrice(element.name, element.value);
  };

  const checkForm = e => {
    if (
      isNaN(+e.target.value) ||
      +e.target.value < 0 ||
      e.target.value === ''
    ) {
      if (e.target.name === 'priceGte') {
        setGte('');
        handleInputPrice(e.target.name, '');
      }
      if (e.target.name === 'priceLte') {
        setLte('');
        handleInputPrice(e.target.name, '');
      }
    }
  };

  const list = param === 'men' ? menList : womenList;
  const inStock = list.reduce(
    (total, item) => (item.quantity > 0 ? total + 1 : total),
    0
  );
  const outOfStock = list.length - inStock;
  let colors = [];
  let sizes = {};

  for (let item of list) {
    colors.push(...Object.keys(item.color));
    for (let size in item.size) {
      if (item.size[size]) {
        if (sizes[size]) sizes[size] += 1;
        else sizes[size] = 1;
      }
    }
  }

  colors = Array.from(new Set(colors));
  const colorSelector = [];
  const sizeSelector = [];

  for (let c of colors) {
    colorSelector.push(
      <>
        <input
          type="checkbox"
          name="color"
          id={`color-${c}`}
          value={c}
          checked={selectOption.color.includes(c)}
          onChange={handleCheckForm}
        />
        <label
          htmlFor={`color-${c}`}
          className="square color"
          style={{ backgroundColor: c }}
        ></label>
      </>
    );
  }

  for (let s in sizes) {
    sizeSelector.push(
      <div>
        <input
          type="checkbox"
          id={`size-${s}`}
          value={s}
          name="size"
          checked={selectOption.size.includes(s)}
          onChange={handleCheckForm}
        />
        <label htmlFor={`size-${s}`}>
          {s.toUpperCase()} ({sizes[s]})
        </label>
      </div>
    );
  }

  return (
    <div>
      <div className={`filter__container ${showFilter ? 'show' : ''}`}>
        <p className="title">Filter by</p>
        <button
          className="btn btn-primary d-none d-lg-block"
          onClick={handleClear}
        >
          CLEAR ALL
        </button>
        <div className="avalability">
          <p>Availability</p>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="1"
              value="1"
              name="availability"
              checked={selectOption.availability.includes('1')}
              onChange={handleCheckForm}
            />
            <label htmlFor="1">In stock ({inStock})</label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="0"
              value="0"
              name="availability"
              checked={selectOption.availability.includes('0')}
              onChange={handleCheckForm}
            />
            <label htmlFor="0">Out of stock ({outOfStock})</label>
          </div>
        </div>
        <div className="price">
          <p className="mb-0">Price</p>
          <div>
            <div>
              <span className="me-1">$</span>
              <InputGroup
                label="From"
                value={gte}
                name="priceGte"
                onChange={e => handlePriceForm(e, 'gte')}
                type="number"
                onBlur={checkForm}
              />
            </div>

            <div>
              <span className="me-1">$</span>
              <InputGroup
                label="To"
                type="number"
                name="priceLte"
                value={lte}
                onChange={e => handlePriceForm(e, 'lte')}
                onBlur={checkForm}
              />
            </div>
          </div>
        </div>
        <div className="color-container">
          <p>Color</p>
          <div className="color-options">{colorSelector}</div>
        </div>
        <div className="size-container">
          <p>Size</p>
          <div className="size-options">{sizeSelector}</div>
        </div>
        <div className="btn-container">
          <button
            className="btn btn-primary d-block d-lg-none"
            onClick={() => {
              handleClear();
              toggleFilter();
            }}
          >
            CLEAR ALL
          </button>
          <button
            className="btn btn-primary d-block d-lg-none"
            onClick={toggleFilter}
          >
            APPLY
          </button>
        </div>
      </div>

      <div className="backdrop" onClick={toggleFilter}></div>
    </div>
  );
};

export default Filter;

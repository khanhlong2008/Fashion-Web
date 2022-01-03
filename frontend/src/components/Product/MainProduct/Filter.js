import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCtx from '../../../context/ProductProvider/ProductCtx';
import InputGroup from '../../CheckoutPage/InputGroup';

const Filter = ({ selectOption }) => {
  const { param } = useParams();
  const { menList, womenList } = useContext(ProductCtx);
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
    console.log(c);
    colorSelector.push(
      <>
        <input
          type="checkbox"
          name="color"
          id={`color-${c}`}
          value={`color-${c}`}
        />
        <label
          for={`color-${c}`}
          className="square color"
          style={{ backgroundColor: c }}
        ></label>
      </>
    );
  }

  for (let s in sizes) {
    sizeSelector.push(
      <div>
        <input type="checkbox" id={`size-${s}`} value={`size-${s}`} />
        <label htmlFor={`size-${s}`}>
          {s.toUpperCase()} ({sizes[s]})
        </label>
      </div>
    );
  }

  return (
    <div className="filter__container">
      <p className="title">Filter by</p>
      <button className="btn btn-primary">CLEAR ALL</button>
      <div className="avalability">
        <p>Availability</p>
        <div className="checkbox-group">
          <input type="checkbox" id="1" checked />
          <label htmlFor="1">In stock ({inStock})</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="0" />
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
              value=""
              onChange={() => {}}
              type="number"
            />
          </div>

          <div>
            <span className="me-1">$</span>
            <InputGroup label="To" value="" onChange={() => {}} type="number" />
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
    </div>
  );
};

export default Filter;

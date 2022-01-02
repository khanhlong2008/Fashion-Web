import React from "react";
import "./ProductFilterBy.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductFilterBy = () => {
  const [products, setProduct] = useState([]);
  const { param } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      param === "men"
        ? await fetch("http://localhost:5000/fashionapp/product_male")
            .then((reponse) => reponse.json())
            .then((data) => {
              setProduct(data.product);
            })
        : await fetch("http://localhost:5000/fashionapp/product_female")
            .then((reponse) => reponse.json())
            .then((data) => {
              setProduct(data.product);
            });
    };
    fetchData();
  }, [param]);

  const colors = [
    "color-1",
    "color-2",
    "color-3",
    "color-4",
    "color-5",
    "color-6",
    "color-7",
    "color-8",
    "color-9",
  ];

  return (
    <div className="product-filter-fby-container">
      <h2>Filter by</h2>
      <div className="checkbox">
        <button>Clear all</button>
        <span>Availability</span>
        <div className="checkbox-input">
          <label>
            <input type="checkbox" />
            In stock ({products.quantity})
          </label>
        </div>
        <div className="checkbox-input">
          <label>
            <input type="checkbox" />
            Out of stock (12)
          </label>
        </div>
      </div>

      <div className="color">
        <span>Color</span>
        <div className="div-color">
          <ul>
            {colors.map((color, index) => {
              return <li className={color} key={index}></li>;
            })}
          </ul>
        </div>
      </div>

      <div className="size">
        <span>Size</span>
        <div className="div-size">
          <ul>
            <li>
              <label>
                <input type="checkbox" /> S
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterBy;

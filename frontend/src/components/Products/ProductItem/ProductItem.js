import ItemProduct from "./ItemProduct";
import "./ProductItem.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  const [products, setProduct] = useState([]);
  const { param } = useParams();
  useEffect(() => {
    const fetchData = async () => {

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
  return (
    <div className="product-item">
      <div className="product-item-sortby">
        <p>Sort by</p>
        <select className="select-bsorby">
          <option>Alphabetically, A-Z</option>
          <option>Alphabetically, Z-A</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
        </select>
      </div>
      <div className="ItemProduct-container">

        {products.map((item, index) => {
        return (
          <ItemProduct products={item} key={index} param={param} />
        );
        })}
    </div>
    </div>
  );
};

export default ProductItem;

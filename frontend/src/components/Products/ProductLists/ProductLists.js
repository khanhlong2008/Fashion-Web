import ProductFilter from "../ProductFilter/ProductFilter";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";



export default function ProductLists() {


  return (
    <div className="container">
      <div className="product-list">
        <div className="product-list-item-left">
          <ProductFilter />
        </div>
        <div className="product-list-item-right">

          <ProductItem />

        </div>
      </div>
    </div>
  );


};



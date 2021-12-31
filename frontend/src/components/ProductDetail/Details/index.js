import ProductRight from "../ProductRight";
import ProductLeft from "../ProductLeft";
import "./Details.css";
const Details = () => {
    return (
        <div className="container product-detail__wrapper">
            <ProductLeft />
            <ProductRight />
        </div>
    )
}
export default Details;
import ProductRight from "../ProductRight";
import ProductLeft from "../ProductLeft";
import "./Details.css";
import { useParams } from "react-router-dom";

const Details = () => {

    const { id } = useParams();
    console.log(id)
    return (
        <div className="container product-detail__wrapper">
            <ProductLeft />
            <ProductRight />
        </div>
    )
}
export default Details;
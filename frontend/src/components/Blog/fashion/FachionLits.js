import { NavLink } from "react-bootstrap";
import "./FachionLits.css";

const FachionLits = (props) => {
  const productList = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0054/0567/1479/products/19_d6bcca69-9828-45eb-a43c-1c00bb3f079e_940x.png?v=1605252142",
      print: "54.000",
      title: "Formal gray shirt",
    },
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0054/0567/1479/products/14_afe20215-a171-49c5-a89b-627c883401ba_940x.png?v=1605251808",
      print: "54.000",
      title: "Formal gray shirt",
    },
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0054/0567/1479/products/3_ceb60b66-9914-4eb0-a48f-828bd9a3f718_940x.png?v=1605250850",
      print: "54.000",
      title: "Formal gray shirt",
    },
  ];
  return (
    <div className="mar">
      <div className="container-left-mian">
        <div className="left-mian-top">
          <h2>{props.title}</h2>
        </div>
        <div className="left-mian-lits">
          <div className="row">
            {productList.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <img src={item.img} alt="/" />
                  <div className="col-title">
                    <span>{item.title}</span>
                    <p>{item.print}</p>
                    <span className="col-title-span-icons">
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="sss">
              <NavLink>VIEW ALL PRODUCTS</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FachionLits;

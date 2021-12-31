import { NavLink } from "react-router-dom";
import "./BlogItem.css";

const BlogItem = (props) => {
  return (
    <div className="blog-container">
      {/* <div className="blog-item"></div> */}
      {props.blogdata.map((item) => {
        return (
          <div className="card-items-container" key={item.id}>
            <div className="card-item-img">
              <img src={item.image} alt="/" />
            </div>
            <div className="card-item-title">
              <div>
                <h2>{item.title}</h2>
                <span className="card-item-title-span">
                  <ion-icon name="calendar-outline"></ion-icon>
                  {item.date}
                </span>
                <span className="card-item-title-span">
                  <ion-icon name="person-outline"></ion-icon>
                  {item.themes}
                </span>
              </div>
              <div className="div-content">
                <p>{item.content}</p>
              </div>
              <NavLink to={`/blog/fashion/${item.title}`}>Read more</NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogItem;

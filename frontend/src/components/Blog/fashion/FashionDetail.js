import FachionLits from "./FachionLits";
import "./FashionDetail.css";

const FashionDetail = () => {
  return (
    <div className="container">
      <div className="container-left">
        <div className="container-left-mian">
          <FachionLits title="Featured Collection" />
          <FachionLits title="Special Collection" />
        </div>
      </div>
      <div className="container-right">
        <div className="right-top">
          <h2>Viderer voluptatum te eum</h2>
          <div>
            <span className="card-item-title-span">
              <ion-icon name="calendar-outline"></ion-icon>
              06 Nov 2020
            </span>
            <span className="card-item-title-span">
              <ion-icon name="person-outline"></ion-icon>
              Ishi Themes
            </span>
          </div>
        </div>
        <div className="right-img">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/0567/1479/articles/8_749x.png?v=1604644306"
            alt="/"
          />
        </div>
        <div className="right-content">
          <p>
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit. Accessorize with a straw hat and
            you're ready for summer!
          </p>
          <h4>Sample Unordered List</h4>
          <ul>
            <li>Comodous in tempor ullamcorper miaculis</li>
            <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
            <li>Divamus sit amet purus justo. </li>
            <li>
              Proin molestie egestas orci ac suscipit risus posuere loremou.
            </li>
          </ul>
          <h4>Sample Ordered List</h4>
          <ol>
            <li>Comodous in tempor ullamcorper miaculis</li>
            <li>Pellentesque vitae neque mollis urna mattis laoreet</li>
            <li>Divamus sit amet purus justo.</li>
            <li>
              Proin molestie egestas orci ac suscipit risus posuere loremous
            </li>
          </ol>
          <h4>Sample Paragraph Text</h4>
          <blockquote>
            <p>
              Faded short sleeves t-shirt with high neckline. Soft and stretchy
              material for a comfortable fit. Accessorize with a straw hat and
              you're ready for summer!Faded short sleeves t-shirt with high
              neckline. Soft and stretchy material for a comfortable fit.
              Accessorize with a straw hat and you're ready for summe!
            </p>
          </blockquote>
        </div>
        <div className="right-comment">
          <h2>Leave a comment</h2>

          <div className="right-comment-form">
            <form>
              <div className="from-input">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <textarea class="form-comment" placeholder="Comment"></textarea>
              </div>
              <p>
                Please note, comments need to be approved before they are
                published.
              </p>
              <div>
                <button className="btn-from">Post comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionDetail;

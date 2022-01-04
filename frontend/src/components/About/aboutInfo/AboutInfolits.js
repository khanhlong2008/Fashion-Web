import { Row, Col } from 'react-bootstrap';

const AboutInfo = props => {
  return (
    <Row className={props.className}>
      <Col xs={6} className="col-mobile">
        <div className="about-us-main-imge">
          <img src={props.img} alt="/" />
        </div>
      </Col>
      <Col xs={6} className="col-mobile">
        <div className="about-us-main">
          <div className="information-container">
            <div>
              <div className="title-container">
                <h3>We Have Everything You Need ?</h3>
              </div>
              <div className="information-container-list">
                <p>
                  Faded short sleeves t-shirt with high neckline. Soft and
                  stretchy material for a comfortable fit. Accessorize with a
                  straw hat and you're ready for summer!
                </p>
                <h4>Sample Unordered List</h4>
                <ul>
                  <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                  <li>
                    Dummy text used in laying out print, graphic or web designs
                  </li>
                  <li>The passage is attributed to.</li>
                  <li>
                    Proin molestie egestas orci ac suscipit risus posuere
                    loremou.
                  </li>
                  <li>
                    Dummy text used in laying out print, graphic or web designs
                  </li>
                </ul>
              </div>
              <div className="information-container-btn">
                <button className="btn-css" type="submit">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AboutInfo;

import { Row, Col } from "react-bootstrap";
import "./AboutTitle.css";

const AboutTitle = () => {
  return (
    <div className="about-Title-container">
      <Row>
        <Col xs={6} md={4}>
          <div>
            <ion-icon name="speedometer-outline"></ion-icon>
          </div>
          <h3>FREE RESOURCES</h3>
          <p>
            Bring to the table win-win survival strategies to ensure proactive
            domination.
          </p>
        </Col>
        <Col xs={6} md={4}>
          <div>
            <ion-icon name="aperture-outline"></ion-icon>
          </div>
          <h3>MULTI PURPOSE</h3>
          <p>
            Bring to the table win-win survival strategies to ensure proactive
            domination.
          </p>
        </Col>
        <Col xs={6} md={4}>
          <div>
            <ion-icon name="bulb-outline"></ion-icon>
          </div>
          <h3>FULLY RESPONSIVE</h3>
          <p>
            Bring to the table win-win survival strategies to ensure proactive
            domination.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutTitle;

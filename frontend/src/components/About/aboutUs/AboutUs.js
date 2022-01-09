import AboutInfo from '../aboutInfo/AboutInfolits';
import AboutTitle from '../aboutTitle/AboutTitle';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container">
      <div className="about-us-container">
        <h1 className="about-us-til">About Us</h1>
        <AboutInfo img="//cdn.shopify.com/s/files/1/0054/0567/1479/files/aboutusbanner1.png?v=1604639157" />
        <div className="ishiservices">
          <div>
            <h2 className="about-us-til">Our Services</h2>
          </div>
          <AboutTitle />
          <AboutInfo
            className="right"
            img="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/aboutusbanner2.png?v=1604639176"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

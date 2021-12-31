import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container d-block">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Contact information
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <ul className="accordion-body pt-0">
                <li className="d-flex align-items-center mb-3">
                  <div className="icon-container me-3 ">
                    <i className="bi bi-geo-alt-fill" />
                  </div>
                  <div>
                    <p className="mb-0 fw-bold">Address</p>
                    <p className="mb-0">4005, Silver Bussiness Point India</p>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <div className="icon-container me-3">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <p className="mb-0 fw-bold">Phone</p>
                    <p className="mb-0">01234566617</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="icon-container me-3">
                    <i className="bi bi-geo-alt-fill" />
                  </div>
                  <div>
                    <p className="mb-0 fw-bold">Email</p>
                    <p className="mb-0">info@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Your Account
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <ul className="accordion-body pt-0">
                <li>
                  <a href="/" target="_blank">
                    Personal Info
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Credit Slips
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Address
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    My wishlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Your Account
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <ul className="accordion-body pt-0">
                <li>
                  <a href="/" target="_blank">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Our Company
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <ul className="accordion-body pt-0">
                <li>
                  <a href="/" target="_blank">
                    New Product
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Special
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Best Product
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Price drop
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Delivery
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Extra
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <ul className="accordion-body pt-0">
                <li>
                  <a href="/" target="_blank">
                    Our store
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary py-3">
        <p className="text-center mb-0 text-white">
          &copy; 2021, Aveda Sectioned Shopify Theme
        </p>
      </div>
    </footer>
  );
};

export default Footer;

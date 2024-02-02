import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="col">
          <h1>Avez .</h1>
        </div>
        <div className="col">
          <h4>Company</h4>
          <ul>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Privacy</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4>Resources</h4>
          <ul>
            <li>
              <p>Resource 1</p>
            </li>
            <li>
              <p>Resource 2</p>
            </li>
            <li>
              <p>Resource 3</p>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4>Solutions</h4>
          <ul>
            <li>
              <p>Solution 1</p>
            </li>
            <li>
              <p>Solution 2</p>
            </li>
            <li>
              <p>Solution 3</p>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4>Products</h4>
          <ul>
            <li>
              <p>Product 1</p>
            </li>
            <li>
              <p>Product 2</p>
            </li>
            <li>
              <p>Product 3</p>
            </li>
          </ul>
        </div>
        <div className="col social">
          <h4>Socials</h4>
          <ul>
            <li>
              <p>
                <i className="bx bxl-facebook"></i>
              </p>
            </li>
            <li>
              <p>
                <i className="bx bxl-instagram"></i>
              </p>
            </li>
            <li>
              <p>
                <i className="bx bxl-linkedin"></i>
              </p>
            </li>
            <li>
              <p>
                <i className="bx bxl-youtube"></i>
              </p>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

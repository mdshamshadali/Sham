import React from 'react'
import './Footer.css'
import inst from "../../img/insta.jpeg";
import face from "../../img/face.png";
import link from "../../img/link.png";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <a href="#">watch</a>
              </li>
              <li>
                <a href="#">bag</a>
              </li>
              <li>
                <a href="#">shoes</a>
              </li>
              <li>
                <a href="#">dress</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="https://www.instagram.com/mdaarif.raza16/">
                <img src={inst} alt="Not found"  />
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/mdaarif.raza.16/">
                <img src={face} alt="Not found"  />
                <i class="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/md-aarif-raza-5a9656224/"
              >
                <img src={link} alt="Not found"  />
                <i class="fab fa-linkedin"></i>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer

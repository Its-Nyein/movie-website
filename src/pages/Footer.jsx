import React from "react";
import "./footer.css";
import FooterNavItem from "../components/FooterNavItem";

function Footer() {
  const usefulLinks = [
    "Home",
    "Movie",
    "My List",
    "Terms of Service",
    "Privacy Policy",
  ];
  const locations = [
    "Dolorum optio",
    "Non rem rerum",
    "Cras fermentum odio",
    "Justo eget",
    "Fermentum iaculis",
  ];
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>CINEMA</span>
              </a>
              <p>
                Cras fermentum odio eu feugiat lide par narso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful links</h4>
              <ul>
                {usefulLinks.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Cinemas</h4>
              <ul>
                {locations.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Street Name <br />
                City Name, State 125689 <br />
                Australia <br />
                <strong>Phone:</strong> + 2356 858 958 <br />
                <strong>Email:</strong> info@gmail.com <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright {""}
          <strong>
            <span>Dstudio Technology</span>. All Rights Reserved
          </strong>
        </div>
        <div className="credits">
          Designed by <a href="#">Dstudio Technology</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

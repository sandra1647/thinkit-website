import Link from "next/link";
const Footer1 = ({ bg, className, logo }) => {
  return (
    <footer
      className={`${
        className ? className : "footer-area footer-default black-bg footer-map"
      }`}
    >
      <div className="container">
        <div className="footer-widget pt-165 pb-35">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget about-widget mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="logo mb-35">
                  <Link href="/">
                    <a>
                      <img
                        src={`assets/images/logo/logo-${logo ? logo : "white"}.svg`}
                        width="158"
                        alt="ThinkIt logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="about-content">
                  <h4 className="text-underline">
                    Kompletna poslovna podrška.
                  </h4>
                  <ul>
                    <li>
                      <i className="far fa-envelope" />
                      <span>
                        <a href="mailto:info@thinkit.rs">info@thinkit.rs</a>
                      </span>
                    </li>
                    <li>
                      <i className="far fa-map-marker-alt" />
                      <span>BW Arcadia, Hercegovačka 21</span>
                      <span>11 000 Beograd, Srbija</span>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <span>
                        <a href="tel:+381600300518">+381 (0)60 0 300 518</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h4 className="widget-title">ThinkIT Kompanija</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <a href="#">Zašto thinkIT?</a>
                  </li>
                  <li>
                    <a href="#">Upoznajte naš tim</a>
                  </li>
                  <li>
                    <a href="#">Outstaffing model</a>
                  </li>
                  <li>
                    <a href="#">Karijera u ThinkIT-u</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <h4 className="widget-title">Naše Usluge</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <a href="#">Softverska rešenja</a>
                  </li>
                  <li>
                    <a href="#">Grafički dizajn</a>
                  </li>
                  <li>
                    <a href="#">Professional Members</a>
                  </li>
                  <li>
                    <a href="#">Digitalni marketing</a>
                  </li>
                  <li>
                    <a href="#">Izrada web sajtova</a>
                  </li>
                  <li>
                    <a href="#">Izrada web prodavnica</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h4 className="widget-title">Naši Proizvodi</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <a href="#">Gokinder</a>
                  </li>
                  <li>
                    <a href="#">GoFitness</a>
                  </li>
                  <li>
                    <a href="#">Firmica</a>
                  </li>
                  <br/>
                  <span>
                  Brendirana web i mobilna rešenja prilagođena vašem poslovanju.
                  </span>

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-md-8">
              <div className="text">
                <p>
                  Copyright © {new Date().getFullYear()} ThinkIT. Sva prava
                  zadržana.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="social-link float-md-right float-sm-none">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;

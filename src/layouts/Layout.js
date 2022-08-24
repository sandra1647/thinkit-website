import niceSelect from "niceselectwithsabuj";
import React, { Fragment, useEffect } from "react";
import BackToTop from "../components/BackToTop";
import ImageView from "../components/ImageView";
import Newsletter from "../components/Newsletter";
import VideoPopup from "../components/VideoPopup";
import { animation, stickyNav } from "../utils";
import Footer from "./footers/Footer";
import Header from "./headers/Header";

const Layout = ({ children, noHeader, noFooter }) => {
  useEffect(() => {
    niceSelect();
    animation();

    window.addEventListener("scroll", stickyNav);
    if (window.location.href.includes("dark-e-wallet")) {
      document.querySelector("body").classList.add("dark-e-wallet");
    } else {
      document.querySelector("body").classList.remove("dark-e-wallet");
    }
  }, []);

  return (
    <Fragment>
      <ImageView />
      <VideoPopup />
      {!noHeader && <Header />}
      {children}
      {!noFooter && (
        <Fragment>
          <Newsletter />
          <Footer />
        </Fragment>
      )}
      <BackToTop />
    </Fragment>
  );
};
export default Layout;

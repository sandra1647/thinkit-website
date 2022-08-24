import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Header1 from "../src/layouts/headers/Header1";
import Footer1 from "../src/layouts/footers/Footer1";
import Layout from "../src/layouts/Layout";

const index = () => {
  return (
    <Layout noFooter noHeader>
      <Header1 />
      {/*====== End Header Section ======*/}
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div className="hero-wrapper-six">
          <div className="hero-bg">
            <img src="assets/images/hero/hero-shape.png" alt="" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <span
                    className="sub-title blue-light wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    MI ČINIMO STVARI MOGUĆIM
                  </span>
                  <h1 className="wow fadeInUp" data-wow-delay=".5s">
                    Kompletna poslovna podrška.
                  </h1>
                  <p>
                    {`ThinkIT kompanija je specijalizovan za pružanje usluga razvoja
                      softvera, outstaffing-a, marketinga i dizajna.`}
                  </p>
                  <ul className="button wow fadeInUp" data-wow-delay=".6s">
                    <li>
                      <a href="/usluge" className="main-btn">
                        Usluge
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a href="/proizvodi" className="main-btn filled-btn">
                        Proizvodi
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-img wow fadeInRight" data-wow-delay=".7s">
                  <img
                    src="assets/images/hero/hero-seven_img-1.png"
                    alt="Hero Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="fancy-about fancy-about-one pt-130 position-relative pb-45">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="about-img-box mb-50 wow fadeInLeft">
                <img src="assets/images/block/outstaffing.svg" alt="About image" width="660"/>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text-wrapper mb-50 wow fadeInRight">
                <div className="section-title mb-20">
                  <h2 className="text-transform">
                    ThinkIT kompanija
                  </h2>
                </div>
                <p>Mi smo kompanija koja vam nudi rešenja u oblastima razvoja softvera, marketinga i dizajna.</p>
                <p>Ako razmišljate da pokrenete start-up kompaniju i prilagodite vaše poslovanje najnovijim digitalnim trendovima – 
                   na pravom ste mestu! Naš tim talentovanih i posvećenih ljudi će pomoći da vaše ideje što pre postanu stvarnost. 
                   Oslonite se na nas.
                </p>
                <Link href="/about">
                  <a className="main-btn">Saznajte više o nama</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Text Block Section ======*/}
      <section
        className="fancy-text-block fancy-text-block-three bg_cover pt-220 pb-200"
        style={{ height: "700px" }}
      >
      </section>
      {/*====== End Text Block Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-area service-style-three pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="block-style-fourteen white-bg mb-30 d-flex wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-11.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details"><a>Softverska rešenja</a></Link>
                  </h3>
                  <p>
                    This article is intended to help define the data scientist
                    role, including typical skills, qualifications, education,
                    experience
                  </p>
                  <Link href="/service-details"><a className="btn-link">Saznaj više</a></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="block-style-fourteen white-bg mb-30 d-flex wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-12.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details"><a>Grafički dizajn</a></Link>
                  </h3>
                  <p>
                    This article is intended to help define the data scientist
                    role, including typical skills, qualifications, education,
                    experience
                  </p>
                  <Link href="/service-details"><a className="btn-link">Saznaj više</a></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="block-style-fourteen white-bg mb-30 d-flex wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-13.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details"><a>Digitalni marketing</a></Link>
                  </h3>
                  <p>
                    This article is intended to help define the data scientist
                    role, including typical skills, qualifications, education,
                    experience
                  </p>
                  <Link href="/service-details"><a className="btn-link">Saznaj više</a></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="block-style-fourteen white-bg mb-30 d-flex wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-14.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details"><a>Izrada web sajtova</a></Link>
                  </h3>
                  <p>
                    This article is intended to help define the data scientist
                    role, including typical skills, qualifications, education,
                    experience
                  </p>
                  <Link href="/service-details"><a className="btn-link">Saznaj više</a></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="block-style-fourteen white-bg mb-30 d-flex wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-13.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details"><a>Održavanje web sajtova</a></Link>
                  </h3>
                  <p>
                    This article is intended to help define the data scientist
                    role, including typical skills, qualifications, education,
                    experience
                  </p>
                  <Link href="/service-details"><a className="btn-link">Saznaj više</a></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="block-style-fourteen white-bg mb-30 d-flex wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-14.png" alt="" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link href="/service-details"><a>Izrada internet prodavnica</a></Link>
                  </h3>
                  <p>
                    This article is intended to help define the data scientist
                    role, including typical skills, qualifications, education,
                    experience
                  </p>
                  <Link href="/service-details"><a className="btn-link">Saznaj više</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Section ======*/}
      <section
        className="team-area team-style-two team-style-two-bg bg_cover pt-205 pb-100"
        style={{ backgroundImage: "url(assets/images/block/block-bg-1.jpg)" }}
      >
      </section>
      {/*====== End Section ======*/}
            {/*====== Start Fancy Block Section ======*/}
            <section className="fancy-text-block fancy-text-block-seven pt-130 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="fancy-img mb-50 wow fadeInLeft">
                <img src="assets/images/block/outstaffing.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-wrapper mb-50">
                <div className="section-title mb-20 wow fadeInUp">
                  <h2>Želite da nadogradite nivo svog poslovanja?</h2>
                </div>
                <p>
                  {`Dajemo vam razlog više zbog kojeg bi odmah trebalo da 
                  počnete da koristite naša softverska rešenja za firme.`}
                </p>
                <div className="content-box wow fadeInUp">
                  <Tab.Container defaultActiveKey={"mission"}>
                    <div className="content-tab-list mb-30">
                      <Nav as={"ul"} className="nav nav-tabs">
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            eventKey={"mission"}
                            className="nav-link"
                            data-toggle="tab"
                            href="#mission"
                          >
                            GoKinder
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            eventKey={"vision"}
                            className="nav-link"
                            data-toggle="tab"
                            href="#vision"
                          >
                            Gofitness
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            eventKey={"values"}
                            className="nav-link"
                            data-toggle="tab"
                            href="#values"
                          >
                            Firmica
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <Tab.Content className="tab-content">
                      <Tab.Pane
                        eventKey={"mission"}
                        className="tab-pane fade"
                        id="mission"
                      >
                        <div className="fancy-box-item d-flex">
                          <div className="icon">
                            <img
                              src="assets/images/app/gokinder-app.png"
                              alt="Icon Image"
                            />
                          </div>
                          <div className="text">
                            <p>
                              GoKinder je sveobuhvatna platforma za vrtiće i predškolske ustanove koja se sastoji iz 
                              web aplikacije, kao i brendirane mobilne aplikacije za pristup roditelja. 
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey={"vision"}
                        className="tab-pane fade"
                        id="vision"
                      >
                        <div className="fancy-box-item d-flex">
                          <div className="icon">
                            <img
                              src="assets/images/app/gofitness-app.png"
                              alt="Icon Image"
                            />
                          </div>
                          <div className="text">
                            <p>
                            GoFitness je moćna platforma napravljena specijalno za fitness i wellness centre, 
                            personalne trenere, školice sporta i sportske centre, korišćena od strane preko 200 kompanija.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey={"values"}
                        className="tab-pane fade"
                        id="values"
                      >
                        <div className="fancy-box-item d-flex">
                          <div className="icon">
                            <img
                              src="assets/images/app/firmica-app.png"
                              alt="Icon Image"
                            />
                          </div>
                          <div className="text">
                            <p>
                            Firmica je softver koji nudi rešenje za sve vrste firmi u kojima će i poslodavci i zaposleni imati koristi. 
                            Poslodavci su u mogućnosti da nadgledaju tok rada, izveštaje i zadatke.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fancy Block Section ======*/}

      {/*====== Start Footer ======*/}
      <Footer1 />
    </Layout>
  );
};
export default index;

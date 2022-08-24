import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">It Company</Link>
    </li>
    <li>
      <Link href="/it-agency">It Agency</Link>
    </li>
    <li>
      <Link href="/it-company">Software Company</Link>
    </li>
    <li>
      <Link href="/help-desk">Help Desk</Link>
    </li>
    <li>
      <Link href="/home-development">Home Development</Link>
    </li>
    <li>
      <Link href="/data-science">Data Science</Link>
    </li>
    <li>
      <Link href="/dark-e-wallet">Dark E-Wallet</Link>
    </li>
  </Fragment>
);
export const About = () => (
  <Fragment>
    <li>
      <Link href="/about">Zašto ThinkIT?</Link>
    </li>
    <li>
      <Link href="/team">Naš tim</Link>
    </li>
    <li>
      <Link href="/nasi-klijenti">Klijenti</Link>
    </li>
    <li>
      <Link href="/career">Karijera</Link>
    </li>
  </Fragment>
);
export const Usluge = () => (
  <Fragment>
    <li>
      <Link href="/service-1">Softverska rešenja</Link>
    </li>
    <li>
      <Link href="/service-2">Grafički dizajn</Link>
    </li>
    <li>
      <Link href="/service-2">Digitalni marketing</Link>
    </li>
    <li>
      <Link href="/service-2">Izrada web sajtova</Link>
    </li>
    <li>
      <Link href="/service-2">Održavanje web sajtova</Link>
    </li>
    <li>
      <Link href="/service-2">Izrada internet prodavnica</Link>
    </li>
  </Fragment>
);
export const Proizvodi = () => (
  <Fragment>
    <li>
      <Link href="#0">GoKinder</Link>
    </li>
    <li>
      <Link href="#0">GoFitness</Link>
    </li>
    <li>
      <Link href="#0">Firmica</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/pricing">Pricing</Link>
    </li>
    <li>
      <Link href="/faq">FAQ</Link>
    </li>
    <li>
      <Link href="/404">404</Link>
    </li>
  </Fragment>
);

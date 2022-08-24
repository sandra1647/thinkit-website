import Link from "next/link";
import React from "react";
import { About, Usluge, Proizvodi, Home, Pages } from "./Menus";

const MainMenu = ({ search, setShow }) => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-item has-children">
          <a href="/">Početna</a>
          <ul className="sub-menu">
            <Home />
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">O nama</a>
          <ul className="sub-menu">
            <About />
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">Usluge</a>
          <ul className="sub-menu">
            <Usluge />
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">Proizvodi</a>
          <ul className="sub-menu">
            <Proizvodi />
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Outstaffing</a>
        </li>
        <li className="menu-item">
          <a href="/project-1">Portfolio</a>
        </li>
        <li className="menu-item">
          <a href="/blog-standard">Blog</a>
        </li>
        <li className="menu-item has-children">
          <Link href="/contact">
            <a>Kontakt</a>
          </Link>
          <ul className="sub-menu">
            <Pages />
          </ul>
        </li>
        {!search && (
          <li className="search-item">
            <a
              href="#"
              data-toggle="modal"
              data-target="#search-modal"
              onClick={() => setShow()}
            >
              <i className="fas fa-search" />
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default MainMenu;

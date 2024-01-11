import React, { useState } from "react";
import "./header.css";
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import Search from "../components/Search";
import Button from "../components/Button";

function Header({ scroll }) {
  const [navLists, setNavLists] = useState(navListData);

  const handleNavClick = (id) => {
    const newNavList = navLists.map((nav) => {
      nav.active = false;
      if (nav.id === id) {
        nav.active = true;
      }
      return nav;
    });
    setNavLists(newNavList);
  };

  return (
    <header className={`${scroll > 100 ? "scrolled" : undefined}`}>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navLists.map((nav) => (
          <NavListItem key={nav.id} nav={nav} onClick={handleNavClick} />
        ))}
      </ul>
      <Search />
      <Button
        icon={<ion-icon name="log-in-outline"></ion-icon>}
        name="Sign In"
      />
    </header>
  );
}

export default Header;

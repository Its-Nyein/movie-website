import React from "react";
import "./navListItem.css";

function NavListItem({ nav, onClick }) {
  return (
    <li>
      <a
        href={nav.link}
        className={`${nav.active ? "active" : undefined}`}
        onClick={() => {
          onClick(nav.id);
        }}
      >
        {nav.name}
      </a>
    </li>
  );
}

export default NavListItem;

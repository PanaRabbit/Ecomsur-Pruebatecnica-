import React from "react";
import { CarIcon } from "../CarIcon/Carlcon";
import { Link } from "react-router-dom";
import '../Header/Header.css';

export const Header = ({ counter }) => {
  return (
    <header className="header padding">
      <nav className="header-nav">
        <ul className="flex-space-between header-nav-browser">
          <Link to="/">
            <li>EcomsurTech</li>
          </Link>
          <Link to="/car">
            <CarIcon counter={`${counter}`} />
          </Link>
        </ul>
      </nav>
     
    </header>
  );
};
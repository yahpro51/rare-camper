import React from "react";
import { Navbarcontainer } from "./style";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbarcontainer>
      <Link to={'/motor'}>
        <div>motor</div>
      </Link>
      <Link to={'/caravan'}>
        <div>caravan</div>
      </Link>
      <Link to={'/tuning'}>
        <div>tuning</div>
      </Link>
      <Link to={'/usedcar'}>
        <div>used car</div>
      </Link>
      <Link to={'/campingplace'}>
        <div>camping place</div>
      </Link>
    </Navbarcontainer>
  );
};

export default NavbarComponent;
import React from "react";

function Navbar() {
  let links = ["Home", "About", "Contact"];
  return (
    <div className=" navbar ">
      <ul className="nav-list">
        {links.map((link, index) => (
          <li>{link}</li>
        ))}
      </ul>
      <h2 className="heading">Landing</h2>
      <button className=" nav-button ">Buy Now</button>
    </div>
  );
}

export default Navbar;

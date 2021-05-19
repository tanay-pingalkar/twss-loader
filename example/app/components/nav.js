import style from "../style.twss";
import React from "react";
function Nav() {
  return (
    <nav className={style.nav}>
      <h1 className={style.name}>TWSS-LOADER</h1>
      <img
        src="https://img-premium.flaticon.com/png/512/25/25231.png?token=exp=1621419565~hmac=83757bde06646dce8fc8f696927ac7f0"
        className={style.github}
      ></img>
    </nav>
  );
}

export default Nav;

import style from "../style.twss";
import React from "react";
import Nav from "./nav";
import Logo from "./logo";
function App() {
  return (
    <div className={style.mainDiv}>
      <Nav></Nav>
      <div className={style.body}>
        <p className={style.title}>Tailwind css is complete now</p>
        <Logo></Logo>
      </div>
      <div>
        <div>tailwind in its own file with super productive features</div>
        <div>div</div>
      </div>
    </div>
  );
}

export default App;

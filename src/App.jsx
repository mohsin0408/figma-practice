import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import img1 from "../src/assets/Group.png";
import img2 from "../src/assets/Login.png";
import img3 from "../src/assets/Happy.png";
import img4 from "../src/assets/Social.png";
import img5 from "../src/assets/Undraw.png";

const App = () => {
  const imageArr = [img1, img2, img3, img4, img5];
  return (
    <div className="main">
      <Navbar />
      {imageArr.map((img, index) => (
        <Card image={img} index={index} />
      ))}
    </div>
  );
};

export default App;

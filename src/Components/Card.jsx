import React from "react";
import Button from "./Button";
import CardChild from "./CardChild";

function Card({ image, index }) {
  let btnTxt = ["Purchase UI Kit", "Learn More"];
  let childText = ["Title Goes Here", "Title Goes There"];
  return (
    <div className={`cards ${index <= 1 ? "row-reverse" : "row"}`}>
      <img src={image} className="card-images" />
      <div className="card-item">
        <h1>Light,Fast and Powerful</h1>
        <p className="card-content">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
          <br></br>
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim.
        </p>
        <div className="inner-card">
          {index === 0
            ? btnTxt.map((text, idx) => (
                <Button text={text} key={idx} color={"blue"} />
              ))
            : null}
          {index === 4 ? <Button text="Purchase Now" color={"blue"} /> : null}
          {index === 1
            ? childText.map((text, idx) => <CardChild text={text} key={idx} />)
            : null}
        </div>
      </div>
    </div>
  );
}

export default Card;

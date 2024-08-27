import React from "react"
import dayImg from "../assets/day.svg"
import eveningImg from "../assets/evening.svg"
import nightImg from "../assets/night.svg"

const Greeting = () => {
  const currentTime = new Date().getHours();
  let greetingText = "";
  let imageSrc = "";

  if (currentTime >= 6 && currentTime < 12) {
    greetingText = "Good Morning!";
    imageSrc = dayImg;
  } else if (currentTime >= 12 && currentTime < 17) {
    greetingText = "Good Afternoon!";
    imageSrc = dayImg;
  } else if (currentTime >= 17 && currentTime < 21) {
    greetingText = "Good Evening!";
    imageSrc = eveningImg;
  } else {
    greetingText = "Good Night!";
    imageSrc = nightImg;
  }

  return (
    <h1 className="greeting">
      <img src={imageSrc} alt="Greeting Icon" />
      {greetingText}
    </h1>
  );
};

export default Greeting;

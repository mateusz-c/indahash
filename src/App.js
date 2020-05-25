import React, { useRef, useState } from "react";
import "./App.scss";
import Team from "./components/Team/Team";
import MembersSlider from "./components/MembersSlider/MembersSlider";

const App = () => {
  const sliderRef = useRef(null);
  const [sliderVisible, setSliderVisibility] = useState(false);

  const openSlider = (slideIndex) => {
    setSliderVisibility(true);
    sliderRef.current.slickGoTo(slideIndex);
  };

  const closeSlider = () => {
    setSliderVisibility(false);
  };

  return (
    <div className="app">
      <div className="container">
        <header className="app__header">Meet our team</header>
        <Team openSlider={openSlider} />
        <MembersSlider
          ref={sliderRef}
          visible={sliderVisible}
          closeSlider={closeSlider}
        />
      </div>
    </div>
  );
};

export default App;

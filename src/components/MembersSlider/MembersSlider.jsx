import React from "react";
import './MembersSlider.scss'
import Slider from "react-slick";
import { teamMembers } from "../consts/team-members";
import classNames from 'classnames';

const MembersSlider = React.forwardRef(({ visible, closeSlider }, ref) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={classNames("slider", { "slider--visible": visible })}>
      <div className="slider__content">
        <div
          className="slider__close"
          onClick={closeSlider}
        />

        <Slider ref={ref} {...settings} >
          {teamMembers.map(({id, position, name}) => (
            <div className="slider__item" key={id}>
              <div className="slider__box">
                <div className="slider__position">{position}</div>
                <div className="slider__name">{name}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
})

export default MembersSlider;

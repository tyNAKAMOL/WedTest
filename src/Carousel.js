import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import JSONDATA from "../src/components/Data.json";

class CustomSlide extends Component {
  render() {
    const { picture, name, index, ...props } = this.props;
    return (
      <Link
        style={{
          textDecoration: "none",
        }}
        to={{
          pathname: "/chord",
          params: { song: name },
        }}
        {...props}
        key={index}
        className="app-boxmusic"
      >
        <img class="img" src={picture} />
        <h1 className="nemeMusic">{name}</h1>
      </Link>
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      // initialSlide: 0,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {JSONDATA.map((value) => {
            return (
              <CustomSlide
                // index={index}
                name={value.name}
                picture={value.data.picture}
              ></CustomSlide>
            );
          })}
        </Slider>
      </div>
    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";

const data = [
  { picture: "/img1/อยู่ในสาย.jpg", name: "อยู่ในสาย" },
  { picture: "/img1/ฝนตกไฟม.jpg", name: "ฝนตกไหม" },
  { picture: "/img1/เดาไม่เก่ง.jpg", name: "เดาไม่เก่ง" },
  { picture: "/img1/คุยคนเดียวเก่ง.jpg", name: "คุยคนเดียวเก่ง" },
  { picture: "/img1/ถ้าเธอรักฉันจริง.jpg", name: "ถ้าเธอรักฉันจริง" },
  { picture: "/img1/ฝันถึงแฟนเก่า1.jpg", name: "ฝันถึงแฟนเก่า" },
  { picture: "/img1/ไปเถอะเธอ.jpg", name: "ไปเถอะเธอ" },
  { picture: "/img1/ทีมรอเธอ.jpg", name: "ทีมรอเธอ" },
  { picture: "/img1/เลือกคนที่เขารักเรา.jpg", name: "เลือกคนที่เขารักเรา" },
  { picture: "/img1/ข้างกัน.jpg", name: "ข้างกัน" },
];

class CustomSlide extends Component {
  render() {
    const { picture, name, index, ...props } = this.props;
    return (
      <div {...props} key={index} className="app-boxmusic">
        <img class="img" src={picture} />
        <h1 className="nemeMusic">{name}</h1>
      </div>
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
          breakpoint: 1224,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {data.map((value, index) => {
            return (
              <CustomSlide
                index={index}
                name={value.name}
                picture={value.picture}
              ></CustomSlide>
            );
          })}
        </Slider>
      </div>
    );
  }
}

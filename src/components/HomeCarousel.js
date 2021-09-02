import React from "react";
import Carousel from "fade-carousel";
import "../stylesheets/HomeCarousel.css";

const HomeCarousel = () => {
  const urls = [
    "https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  ];
  const tags = ["gigs in berlin", "join the community"];

  const divStyle = {
    position: "relative",
    top: "-90px",
    height: "100vh",
    width: "100%",
    zIndex: "-3",
    backgroundColor: "#f2f2f2",
  };
  const imageStyle = {
    height: "100%",
    width: "auto",
    justifySelf: "center",
  };
  return (
    <Carousel divStyle={divStyle} delay={6000} mode={"fade"}>
      {urls.map((url, index) => (
        <>
          {" "}
          <div key={index} style={imageStyle}>
            <img
              src={url}
              style={{ width: "100%", height: "auto" }}
              alt="asdada"
            />
          </div>
        </>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;

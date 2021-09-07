import React, { useState, useRef } from "react";
import HomeCarousel from "../components/HomeCarousel";
import News from "../components/News";

function HomeScreen(props) {
  const [filename, setfilename] = useState(null);

  const handleChange = (event) => {
    console.log(filename);
    setfilename(event.target.files[0].name);
  };
  return (
    <>
      <HomeCarousel />
      <News />
      <div classname="inputContainer">
        <form
          style={{
            marginLeft: "200px",
            marginTop: "200px",
            marginBottom: "200px",
            width: "1000px",
          }}
        >
          {" "}
          <label for="name">Anschreiben</label>
          <div
            className="inputContainer"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <input
              type="text"
              id="name"
              placeholder={filename}
              style={{
                marginTop: "10px",
                width: "50%",
                height: "40px",
                backgroundColor: "rgb(226, 226, 226)",
                border: "none",
                outline: "none",
              }}
            ></input>
            <span
              style={{
                textAlign: "center",
                lineHeight: "40px",
                height: "40px",
                marginLeft: "5px",
                marginTop: "11px",
                width: "100px",
                fontWeight: "600",
                backgroundColor: "white",
                border: "1px solid black",
                pointerEvents: "none",
              }}
            >
              öffnen
            </span>
            <input
              type="file"
              id="getFile"
              style={{
                height: "60px",
                width: "100px",
                opacity: "0",
                position: "absolute",
                marginLeft: "33%",
              }}
              onChange={handleChange}
            />{" "}
          </div>
        </form>
      </div>
    </>
  );
}
export default HomeScreen;

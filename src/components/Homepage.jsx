import React from "react";
import NavBar from "./NavBar";
import Caraousel from "./Caraousel";
import Acc from "./Acc";
import CardGrps from "./CardGrps";
import Gallery from "./Gallery";

function Homepage() {
  return (
    <>
      <NavBar />
      <Caraousel />
      <br />
      <Acc />
      <br />
      <CardGrps />
      <br />
      <Gallery />
    </>
  );
}

export default Homepage;

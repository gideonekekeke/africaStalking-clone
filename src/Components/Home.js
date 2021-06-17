import React from "react";
import MainBody from "./Body1/MainBody";

import GenBody from "./GenBody/GenBody";
import Hero from "./Hero";
import LogoPage from "./LogoPage/LogoPage";
import Map from "./Map/Mao";
import MainServ from "./Services/MainServ";
import Videobody from "./Videodiv/Videobody";

function Home() {
  return (
    <div>
      <Hero />
      <MainBody />
      <MainServ />
      <Videobody />
      <LogoPage />
      <GenBody />
      <Map />
    </div>
  );
}

export default Home;

import React from "react";
//Import Navbar
import Nav from "../components/navbar";
import TentangSaya from "../components/tentang_saya";
import Pengalaman from "../components/pengalaman";
import Keahlian from "../components/keahlian";

const MainPage = () => {
  return (
  <>
    <Nav/>
    <TentangSaya/>
    <Pengalaman/>
    <Keahlian/>
  </>
  );
};

export default MainPage;

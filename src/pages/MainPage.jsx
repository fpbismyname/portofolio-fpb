import React from "react";
//Import Navbar
import Nav from "../components/navbar";
import TentangSaya from "../components/tentang_saya";
import Pengalaman from "../components/pengalaman";
import Keahlian from "../components/keahlian";

const MainPage = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col p-24 gap-10">
        <TentangSaya />
        <Pengalaman />
        <Keahlian />
      </div>
    </>
  );
};

export default MainPage;

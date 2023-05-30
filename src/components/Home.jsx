// import { About } from "./About";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { Showcase } from "./Showcase";
import React from "react";

export const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <Showcase />
      <FooterComponent />
    </div>
  )
}

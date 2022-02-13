import React from "react";
import { Header, Footer } from "../components";
import { Homescreen } from "./home";

const Routerscreen = () => <Homescreen />;

export default function Mainscreen() {
  return (
    <div>
      <Header />
      <Routerscreen />
      <Footer />
    </div>
  );
}

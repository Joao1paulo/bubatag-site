import Image from "next/image";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";

import { minhaFonte } from "./font.js";
import "./globals.css";
import Sobre from "./components/Sobre.js";

export default function Home() {
  return (
    <>
          <Navbar/>
          <Header/>
          <Sobre/>
    </>
  );
}

import Image from "next/image";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";

import { minhaFonte } from "./font.js";
import "./globals.css";
import Sobre from "./components/Sobre.js";
import Problematica from "./components/Problematica.js";
import Solucao from "./components/Solucao.js";
import Pitch from "./components/Pitch.js";
import Footer from "./components/Footer.js";

export default function Home() {
  return (
    <>
          <Navbar/>
          <Header/>
          <Sobre/>
          <Problematica/>
          <Solucao/>
          <section><Footer/></section>
          
    </>
  );
}

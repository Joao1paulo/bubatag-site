import Image from "next/image";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Sobre from "./components/Sobre.js";
import Problematica from "./components/Problematica.js";
import Solucao from "./components/Solucao.js";
import Pitch from "./components/Pitch.js"; // Novo componente
import Footer from "./components/Footer.js";
import AOSWrapper from "./components/AOSWrapper.js";

import { minhaFonte } from "./font.js";
import "./globals.css";


export default function Home() {
  return (
    <>
    <AOSWrapper>
          <Navbar/>
          
          {/* --- SEÇÕES COM IDs PARA SCROLL --- */}
          
          {/* O Header geralmente fica no topo. O ID 'home' é opcional. */}
          <section id="home"> 
            <Header/>
          </section>
          
          {/* ID: #sobre */}
          <section id="sobre">
            <Sobre/>
          </section>
          
          {/* ID: #problematica */}
          <section id="problematica">
            <Problematica/>
          </section>
          
          {/* ID: #solucao */}
          <section id="solucao">
            <Solucao/>
          </section>
          
          {/* O Footer não precisa de ID para navegação, mas mantenha a tag section */}
          <section> 
            <Footer/>
          </section>
          
    </AOSWrapper>
    </>
  );
}
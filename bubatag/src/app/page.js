import Image from "next/image";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Sobre from "./components/Sobre.js";
import Problematica from "./components/Problematica.js";
import Solucao from "./components/Solucao.js";
import Pitch from "./components/Pitch.js"; 
import Footer from "./components/Footer.js";
import AOSWrapper from "./components/AOSWrapper.js";

import { minhaFonte } from "./font.js";
import "./globals.css";

export default function Home() {
  return (
    <AOSWrapper>
      {/* 1. Transformamos a tag principal em flexbox com altura mínima da tela */}
      <main className="flex flex-col min-h-screen">
        
        {/* 2. O flex-grow faz essa div expandir o máximo possível, 
               empurrando tudo o que estiver abaixo dela (o Footer) pro final */}
        <div className="flex-grow">
          <Navbar/>
          
          <section id="home"> 
            <Header/>
          </section>
          
          <section id="sobre">
            <Sobre/>
          </section>
          
          <section id="problematica">
            <Problematica/>
          </section>
          
          <section id="solucao">
            <Solucao/>
          </section>
        </div>

        {/* 3. O Footer fica fora da div "flex-grow", colando perfeitamente na base */}
        <Footer/>

      </main>
    </AOSWrapper>
  );
}
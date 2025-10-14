import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
    data-aos="fade-down" data-aos-easing="ease" data-aos-duration="800"
      className="w-full relative bg-gradient-to-b from-[#0A0601] to-[#050300] 
                 flex flex-col md:flex-row items-center md:items-start justify-between 
                 px-6 md:px-16 py-12 border-t-4 border-[#E0830F] overflow-hidden"
    >
      {/* Linha de luz animada */}
      <div className="absolute top-0 left-0 w-full h-[4px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD38A] to-transparent animate-lightSweep opacity-80" />
      </div>

      {/* LOGO à esquerda */}
      <div className="flex-shrink-0 mb-8 md:mb-0 animate-float">
        <Image
          src="/imgs/krono-logo.svg"
          alt="Logo"
          width={140}
          height={140}
          className="object-contain"
        />
      </div>

      {/* Informações no centro */}
      <div className="flex flex-col md:flex-row gap-[15vh] text-white text-center md:text-left">
        {/* Endereço */}
        <div className="animate-fadeSlide delay-[0.2s]">
          <h3 className="text-[#E0830F] text-lg font-semibold mb-2">
            Endereço
          </h3>
          <hr />
          <p className="text-sm leading-relaxed pt-2">
            Rua das Palmeiras, 123
            <br />
            Centro – Vale do Ribeira
            <br />
            São Paulo, SP
          </p>
        </div>

        {/* Redes sociais */}
        <div className="animate-fadeSlide delay-[0.4s]">
          <h3 className="text-[#E0830F] text-lg font-semibold mb-2">
            Redes Sociais
          </h3>
          <hr />
          <div className="flex justify-center md:justify-start items-center gap-4 pt-2">
            <Link
              href="#"
              className="transform transition-transform hover:scale-125 hover:text-[#E0830F]"
            >
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="transform transition-transform hover:scale-125 hover:text-[#E0830F]"
            >
              <FaFacebook className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="transform transition-transform hover:scale-125 hover:text-[#E0830F]"
            >
              <FaWhatsapp className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Contato */}
        <div className="animate-fadeSlide delay-[0.6s]">
          <h3 className="text-[#E0830F] text-lg font-semibold mb-2">Contato</h3>
          <hr />
          <p className="text-sm leading-relaxed pt-2">
            contato@raffus.com.br
            <br />
            (13) 99999-9999
          </p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";

export default function Header() {
  return (
    <section 
    data-aos="fade-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"
      className="relative flex h-[85vh] w-full items-center justify-center bg-cover bg-center  p-10"
      style={{ backgroundImage: "url('/imgs/header.png')" }}
    >


          <div className="flex items-center gap-[15vh] md:flex-row" id="1">
  <div className="w-full text-center md:w-1/2 md:text-left">
    <h2 className="h-auto pt-[10vh] text-left text-4xl font-bold font-[Fonarto] mb-10 bg-gradient-to-r from-[#d1d1d1] to-[#f4f4f4] bg-clip-text text-transparent md:text-6xl">
      
      {/* Envolvemos a primeira linha com um span para evitar a quebra */}
      <span className="whitespace-nowrap">
        Conectando{' '}
        <b className="bg-gradient-to-r from-[#04a501] to-[#06D001] bg-clip-text text-transparent">
          Tradição
        </b>
      </span>
      <br />
      e{' '}
      <b className="whitespace-nowrap bg-gradient-to-r from-[#04a501] to-[#06D001] bg-clip-text text-transparent">
        Inovação
      </b>{' '}
      no Vale
      
    </h2>
  </div>
  <div className="relative h-82 w-full md:h-[25rem] md:w-[55vh]">
    <Image
      src="/imgs/bubatag.svg"
      alt="Ilustração do sistema de monitoramento"
      fill
      className="object-contain [filter:drop-shadow(0_0px_10px_rgba(5,218,0,0.2))]"
      priority
    />
  </div>
</div>





{/* 
      <div className="relative w-full h-100 md:w-full md:h-70">
        <Image
          src="/imgs/header-texto.svg"
          alt="Texto de destaque do header"
          fill
          className="object-contain"
          priority
        />
      </div> */}

    </section>
  );
}

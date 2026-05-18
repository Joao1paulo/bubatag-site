import Image from "next/image";

export default function Header() {
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      className="relative flex w-full min-h-[60vh] md:min-h-[70vh] items-center mt-[74px] overflow-hidden"
    >
      {/* 1. VÍDEO DE FUNDO */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/imgs/video-header2.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/imgs/header.png"
      />

      {/* 2. OVERLAY GRADIENTE */}
      <div className="absolute inset-0 z-10 bg-black/30"></div>
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "linear-gradient(to top, #2f3e46 0%, transparent 90%)",
        }}
      ></div>

      {/* 3. CONTEÚDO DO HEADER - CONTAINER PRINCIPAL */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12 gap-10">
        
        {/* --- DIV 1: LADO ESQUERDO (TEXTO) --- */}
        {/* Aumentado de w-1/2 para w-[60%] no desktop para dar mais espaço ao texto */}
        <div className="w-full md:w-[60%] flex justify-start text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Fonarto] leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
            
            {/* Linha 1: Protegida com whitespace-nowrap para não quebrar no meio */}
            <span className="inline-block whitespace-nowrap">
              <span className="text-white">Conectando </span>
              <span className="text-[#06D001]">Tradição</span>
            </span>
            
            <br />
            
            {/* Linha 2 */}
            <span className="inline-block whitespace-nowrap">
              <span className="text-white">e </span>
              <span className="text-[#06D001]">Inovação</span>
              <span className="text-white"> no Vale</span>
            </span>

          </h2>
        </div>

        {/* --- DIV 2: LADO DIREITO (IMAGEM BUBATAG) --- */}
        {/* Reduzido para w-[40%] para compensar o aumento do texto */}
        <div className="hidden md:flex w-full md:w-[40%] justify-center md:justify-end">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]">
            <Image
              src="/imgs/bubatag.svg"
              alt="Logo Bubatag"
              fill
              className="object-contain drop-shadow-[0_0px_15px_rgba(5,218,0,0.2)]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
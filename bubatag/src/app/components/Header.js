import Image from "next/image";

export default function Header() {
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      className="relative flex w-full items-center justify-center p-4 md:p-10 overflow-hidden mt-[4vh]"
    >
      {/* 1. VÍDEO DE FUNDO */}
      <video
        className="absolute inset-0 w-full max-h-[60vh]  md:max-h-[70vh] object-cover z-0"
        src="/imgs/video-header2.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/imgs/header.png"
      />

      {/* 2. OVERLAY GRADIENTE */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "linear-gradient(to top, #2f3e46 0%, transparent 90%)",
        }}
      ></div>

      {/* 3. CONTEÚDO DO HEADER */}
      <div
        className="relative z-20 flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-[15vh] w-full max-w-6xl"
        id="home"
      >
        {/* Título */}
        <div className="w-full text-left md:w-1/2">
          <h2 className="relative h-auto text-3xl sm:text-4xl md:text-6xl font-bold font-[Fonarto] mb-6 sm:mb-10 leading-snug">
            {/* Linha 1 */}
            <span className="relative inline-block">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 z-0 select-none whitespace-nowrap"
                style={{
                  transform: "translate(0px, 6px)",
                  color: "#000",
                  filter: "blur(20px)",
                  opacity: "0.9",
                }}
              >
                Conectando&nbsp;
                <b className="whitespace-nowrap">Tradição</b>
              </span>
              <span className="relative z-10 whitespace-nowrap bg-gradient-to-r from-[#d1d1d1] to-[#f4f4f4] bg-clip-text text-transparent">
                Conectando&nbsp;
                <b className="bg-gradient-to-r from-[#04a501] to-[#06D001] bg-clip-text text-transparent">
                  Tradição
                </b>
              </span>
            </span>

            <br />

            {/* Linha 2 */}
            <span className="relative inline-block">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 z-0 select-none whitespace-nowrap"
                style={{
                  transform: "translate(0px, 6px)",
                  color: "#000",
                  filter: "blur(20px)",
                  opacity: "0.9",
                }}
              >
                e <b className="whitespace-nowrap">Inovação</b> no Vale
              </span>
              <span className="relative z-10 bg-gradient-to-r from-[#d1d1d1] to-[#f4f4f4] bg-clip-text text-transparent">
                e{" "}
                <b className="whitespace-nowrap bg-gradient-to-r from-[#04a501] to-[#06D001] bg-clip-text text-transparent">
                  Inovação
                </b>{" "}
                no Vale
              </span>
            </span>
          </h2>
        </div>

        {/* Imagem lateral — escondida em mobile */}
        <div className="hidden md:block relative h-64 sm:h-80 md:h-[25rem] md:w-[55vh]">
          <Image
            src="/imgs/bubatag.svg"
            alt="Ilustração do sistema de monitoramento"
            fill
            className="object-contain [filter:drop-shadow(0_0px_10px_rgba(5,218,0,0.2))]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

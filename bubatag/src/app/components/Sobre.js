import Image from "next/image";

export default function Sobre() {
  return (
    <>
      <div
        className="flex w-full justify-center px-4 py-0 pb-[15vh] font-[Lato]"
        id="sobre"
      >
        <div className="flex max-w-6xl flex-col ">
          {/* --- Primeira Seção --- */}
          <div
            data-aos="fade-down"
            data-aos-easing="ease"
            data-aos-duration="800"
            className="flex flex-col items-center gap-10 md:flex-row md:gap-[15vh]"
            id="1"
          >
            {/* Título e texto — sempre primeiro no mobile */}
            <div className="order-1 w-full text-left md:order-none md:w-1/2">
              <h2 className="h-auto text-4xl sm:text-5xl md:text-6xl font-bold font-[Fonarto] bg-gradient-to-r from-[#05a702] to-[#06D001] bg-clip-text text-transparent mb-6 sm:mb-10">
                Sobre o Projeto
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                O projeto traz um sistema mobile e web inovador para criadores
                de búfalos. Nosso sistema utiliza tags inteligentes na orelha
                dos animais para rastrear localização, monitorar batimentos
                cardíacos e níveis de estresse.
              </p>
            </div>

            {/* Imagem */}
            <div className="relative h-64 sm:h-80 w-full md:h-[25rem] md:w-[65vh] order-2 md:order-none">
              <Image
                src="/imgs/sobre1.png"
                alt="Ilustração do sistema de monitoramento"
                fill
                className="object-contain [filter:drop-shadow(0_0px_10px_rgba(5,218,0,0.2))]"
                priority
              />
            </div>
          </div>

          {/* --- Segunda Seção --- */}
          <div
            data-aos="fade-down"
            data-aos-easing="ease"
            data-aos-duration="800"
            className="flex flex-col items-center gap-10 md:flex-row md:gap-[15vh]"
            id="2"
          >
            {/* Imagem */}
            <div className="relative h-64 sm:h-80 w-full md:h-[32rem] md:w-1/2">
              <Image
                src="/imgs/sobre2.png"
                alt="Ilustração de tags inteligentes"
                fill
                className="object-contain [filter:drop-shadow(0_0px_5px_rgba(5,218,0,0.2))]"
              />
            </div>

            {/* Texto */}
            <div className="w-full text-left md:order-last md:w-1/2">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                O sistema envia alertas em tempo real sempre que surgir algum
                risco, garantindo que o criador mantenha saúde, segurança e
                controle total do rebanho na palma da mão, trazendo mais
                eficiência e tranquilidade ao manejo diário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

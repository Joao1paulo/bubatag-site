import Image from "next/image";

export default function Sobre() {
  return (
    <>
      <div 
      className="flex w-full justify-center px-4 py-0 pb-[15vh] font-[Lato]" id="sobre">

        <div className="flex max-w-6xl flex-col ">
            
          {/* --- Primeira Seção --- */}
          <div data-aos="fade-down" data-aos-easing="ease" data-aos-duration="800"
            className="flex flex-col-reverse items-center md:flex-row gap-[15vh]" id="1">
            <div className="w-full text-center md:w-1/2 md:text-left">

              <h2 className="h-auto text-left text-5xl md:text-6xl font-bold font-[Fonarto] bg-gradient-to-r from-[#05a702] to-[#06D001] bg-clip-text text-transparent mb-10">
                Sobre o Projeto
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                O projeto traz um sistema mobile e web inovador para criadores
                de búfalos. Nosso sistema utiliza tags inteligentes na orelha
                dos animais para rastrear localização, monitorar batimentos
                cardíacos e níveis de estresse.
              </p>
              
            </div>
            <div className="relative h-82 w-full md:h-[25rem] md:w-[65vh]">
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
          <div data-aos="fade-down" data-aos-easing="ease" data-aos-duration="800" 
           className="flex flex-col items-center gap-[15vh] md:flex-row  " id="2">
            <div className="relative h-72 w-full md:h-[32rem] md:w-1/2">
              <Image
                src="/imgs/sobre2.png"
                alt="Ilustração de tags inteligentes"
                fill
                // A sombra foi adicionada aqui
                className="object-contain [filter:drop-shadow(0_0px_5px_rgba(5,218,0,0.2))]"
              />
            </div>
            <div className="w-full text-center md:order-last md:w-1/2 md:text-left">
              <p className="text-lg md:text-xl leading-relaxed">
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

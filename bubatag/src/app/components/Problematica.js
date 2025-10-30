import Image from "next/image";

export default function Problematica() {
  return (
    <>
      <div className="flex w-full justify-center px-4 py-0 pb-[10vh]" id="problematica">
        <div className="flex max-w-6xl flex-col gap-0">
          {/* --- Primeira Seção --- */}
          <div className="flex flex-col items-start gap-10 md:flex-row md:gap-[15vh] font-[Lato]" id="1">
            {/* Texto — sempre primeiro no mobile */}
            <div className="order-1 w-full text-left md:order-none md:w-1/2">
              <h2
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration="800"
                className="h-auto text-4xl sm:text-5xl md:text-6xl font-bold font-[Fonarto] bg-gradient-to-r from-[#06D001] to-[#048f02] bg-clip-text text-transparent mb-6 sm:mb-10"
              >
                Problematica
              </h2>
              <p
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration="1100"
                className="text-base sm:text-lg md:text-xl leading-relaxed"
              >
                A criação de búfalos no Brasil enfrenta dificuldades devido ao temperamento agressivo e à força desses animais, que frequentemente escapam dos cercados. 
                Isso gera prejuízos materiais, riscos de acidentes e danos a propriedades vizinhas. Além disso, o estresse dos búfalos compromete a qualidade dos seus 
                produtos derivados.
              </p>
            </div>

            {/* Imagem */}
            <div
              data-aos="fade-right"
              data-aos-easing="ease"
              data-aos-duration="800"
              className="relative h-64 sm:h-80 w-full md:h-[32rem] md:w-[65vh] order-2 md:order-none"
            >
              <Image
                src="/imgs/problematica.png"
                alt="Ilustração do sistema de monitoramento"
                fill
                className="object-contain [filter:drop-shadow(0_0px_10px_rgba(150,147,78,0.2))]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

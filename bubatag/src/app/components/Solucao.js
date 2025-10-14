import Image from "next/image";


export default function Solucao() {
  return (
    <>
<div className="flex w-full justify-center px-4 py-0 pb-[30vh]" id="solucao">

  {/* O container 'max-w-6xl' agora envolve tanto a seção de texto/imagem quanto o vídeo */}
  <div className="flex max-w-6xl flex-col gap-y-16">

    {/* --- Seção de Texto e Imagem --- */}
    <div className="flex flex-col-reverse items-center gap-[15vh] md:flex-row font-[Lato]">
      <div className="w-full text-center md:w-1/2 md:text-left">
        <h2 data-aos="fade-right" data-aos-easing="ease" data-aos-duration="800" className="h-auto text-left text-5xl md:text-6xl font-bold font-[Fonarto] bg-gradient-to-r from-[#05a802] to-[#06D001] bg-clip-text text-transparent mb-10">
          Solução
        </h2>
        <p data-aos="fade-right" data-aos-easing="ease" data-aos-duration="1100" className="text-lg md:text-xl leading-relaxed">
          Nosso app mobile foi criado para ajudar com esse problema, o criador acompanha a localização dos búfalos em tempo real e recebe alertas instantâneos se algum animal fugir,
          mostrando por onde o búfalo escapou. Assim, é mais rápido reencaminhar o animal ao cercado, evitando prejuízos e economizando tempo.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration="800" className="relative h-82 w-full md:h-[32rem] md:w-[65vh]">
        <Image
          src="/imgs/solucao.png"
          alt="Ilustração do sistema de monitoramento"
          fill
          className="object-contain [filter:drop-shadow(0_0px_10px_rgba(150,147,78,0.2))]"
          priority
        />
      </div>
    </div>

    {/* --- Container do Vídeo (agora dentro do mesmo max-w-6xl) --- */}
    <div data-aos="fade-up" data-aos-easing="ease" data-aos-duration="800" className="relative w-full overflow-hidden rounded-xl pt-[56.25%] border-3 border-[rgba(5,213,0,0.0)] 
    hover:border-[rgba(5,213,0,0.5)] transition-colors duration-300 ease-in-out
    shadow-md p-4" id="pitch">
      <iframe
        className="absolute inset-0 h-full w-full"
        src="https://www.youtube.com/embed/LrFOk0pyt7c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>

  </div>
</div>
    </>
    )
}
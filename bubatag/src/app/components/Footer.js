export default function Footer() {
  return (
    <footer className="w-full bg-[#3A3A3A] text-white relative">
      <style>{`
        @keyframes neon-line-glow {
          0%, 100% {
            box-shadow: 0 0 6px #E0830F, 0 0 15px rgba(224, 131, 15, 0.4);
            background-color: #E0830F;
          }
          50% {
            box-shadow: 0 0 12px #FCB460, 0 0 25px rgba(224, 131, 15, 0.8);
            background-color: #FCB460;
          }
        }
        .animate-neon-line {
          animation: neon-line-glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full h-[4px] animate-neon-line" aria-hidden="true" />

      {/* Padding reduzido no mobile para compensar telas pequenas */}
      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-12">
        
        {/* Gap reduzido no mobile (gap-6) e ampliado no desktop (lg:gap-8) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8 items-center text-center">
          
          <div className="flex items-center justify-center">
            <img src="/imgs/krono-logo.svg" alt="Krono" className="h-16 lg:h-20 w-auto" />
          </div>

          <div className="flex flex-col items-center mt-4 sm:mt-0">
            <h3 className="font-sans font-bold text-base text-white mb-1">Nosso endereço</h3>
            <p className="font-sans text-sm text-white/90">Av. Clara Gionotti de Souza 257</p>
            <p className="font-sans text-sm text-white/90">Registro-SP</p>
          </div>

          <div className="flex flex-col items-center mt-4 md:mt-0">
            <h3 className="font-sans font-bold text-base text-white mb-1">Nessas redes sociais</h3>
            <p className="font-sans text-sm text-white/90">@Krono</p>
            <p className="font-sans text-sm text-white/90">Para todas as redes</p>
          </div>

          <div className="flex flex-col items-center max-w-[130px] mx-auto mt-4 md:mt-0">
            <h3 className="font-sans font-bold text-base text-white mb-1">Número para contato</h3>
            <p className="font-sans text-sm text-white/90">(55) +13 98195-2523</p>
          </div>

        </div>

        <div className="mt-10 lg:mt-12 flex items-center justify-center">
          <p className="font-sans text-xl lg:text-2xl tracking-wider text-white">@Krono</p>
        </div>

      </div>
    </footer>
  );
}
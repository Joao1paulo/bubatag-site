'use client'; 
// Esta diretiva é OBRIGATÓRIA para usar o useEffect e o AOS

import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSWrapper({ children }) {
  useEffect(() => {
    // 1. Inicializa o AOS com configurações globais
    AOS.init({
      // Duração padrão da animação (em milissegundos)
      duration: 800, 
      
      // A animação acontece APENAS uma vez (ótimo para performance)
      once: true,     
      
      // Para fazer a animação resetar e refazer ao rolar para cima/baixo, use 'false'
      // reset: true, 
    });

    // 2. Garante que o AOS recalcule as posições após o carregamento da página 
    // (Útil para conteúdo carregado dinamicamente ou imagens)
    AOS.refresh();
  }, []);

  return <>{children}</>;
}
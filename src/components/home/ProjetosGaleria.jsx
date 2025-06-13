import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projetos = [
  {
    id: 'reforma-eletrica-espaco-vip',
    titulo: 'Reforma Elétrica Completa do Espaço Vip - Cururupu',
    categoria: 'Engenharia Civil',
    descricao: 'Modernização completa da infraestrutura elétrica de um espaço de eventos premium, integrando sistemas de iluminação sofisticados e garantindo segurança e eficiência energética.',
    imagens: [
      '/images/projetos/reforma_eletrica_espaco_vip_1.jpg',
      '/images/projetos/reforma_eletrica_espaco_vip_2.jpg',
      '/images/projetos/reforma_eletrica_espaco_vip_3.jpg',
    ]
  },
  {
    id: 'vistoria-manutencao-energia-solar-torres',
    titulo: 'Vistoria e Manutenção de Sistema de Energia Solar em Torres de Transmissão',
    categoria: 'Energia Solar',
    descricao: 'Garantia do funcionamento contínuo de sistemas de energia solar que alimentam torres de transmissão de sinal telefônico em áreas remotas, essenciais para a comunicação de comunidades isoladas.',
    imagens: [
      '/images/projetos/energia_solar_torres_1.jpg',
      '/images/projetos/energia_solar_torres_2.jpg',
      '/images/projetos/energia_solar_torres_3.jpg',
    ]
  },
  {
    id: 'projeto-arquitetonico-escola-confiar',
    titulo: 'Projeto Arquitetônico da Nova Sede da Escola Confiar - Cururupu-MA',
    categoria: 'Engenharia Civil',
    descricao: 'Desenvolvimento de um projeto arquitetônico inovador para a primeira e maior instituição de ensino multidisciplinar da região, com necessidades específicas para atender diversos públicos, incluindo alunos com necessidades especiais.',
    imagens: [
      '/images/projetos/escola_confiar_1.jpg',
      '/images/projetos/escola_confiar_2.jpg',
      '/images/projetos/escola_confiar_3.jpg',
    ]
  },
  {
    id: 'projeto-estrutural-fachada-torres-igreja-sao-jorge',
    titulo: 'Projeto Estrutural da Nova Fachada e Torres da Igreja Matriz da Paróquia São Jorge',
    categoria: 'Engenharia Civil',
    descricao: 'Desenvolvimento de um projeto estrutural para uma fachada monumental com duas torres de mais de 15 metros de altura, garantindo estabilidade, segurança e fidelidade à concepção arquitetônica sacra original.',
    imagens: [
      '/images/projetos/igreja_sao_jorge_1.jpg',
      '/images/projetos/igreja_sao_jorge_2.jpg',
      '/images/projetos/igreja_sao_jorge_3.jpg',
    ]
  },
  {
    id: 'projeto-basico-legal-ampliacao-igreja-sao-joao-batista',
    titulo: 'Projeto Básico-Legal da Ampliação da Igreja Matriz da Paróquia de São João Batista',
    categoria: 'Engenharia Civil',
    descricao: 'Desenvolvimento de um projeto de ampliação para uma edificação histórica, respeitando suas características originais enquanto atendendo às necessidades atuais da comunidade religiosa e às exigências legais.',
    imagens: [
      '/images/projetos/igreja_sao_joao_batista_1.jpg',
      '/images/projetos/igreja_sao_joao_batista_2.jpg',
      '/images/projetos/igreja_sao_joao_batista_3.jpg',
    ]
  },
];

export default function ProjetosGaleria() {
  const [projetoAtivo, setProjetoAtivo] = useState(0);
  const [imagemAtiva, setImagemAtiva] = useState(0);

  const proximoProjeto = () => {
    setProjetoAtivo((prev) => (prev + 1) % projetos.length);
    setImagemAtiva(0);
  };

  const projetoAnterior = () => {
    setProjetoAtivo((prev) => (prev - 1 + projetos.length) % projetos.length);
    setImagemAtiva(0);
  };

  const proximaImagem = () => {
    setImagemAtiva((prev) => (prev + 1) % projetos[projetoAtivo].imagens.length);
  };

  const imagemAnterior = () => {
    setImagemAtiva((prev) => (prev - 1 + projetos[projetoAtivo].imagens.length) % projetos[projetoAtivo].imagens.length);
  };

  return (
    <section className="section projetos">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Projetos</h2>
          <p>Conheça alguns dos nossos principais projetos realizados</p>
        </div>
        
        <div className="projetos-container">
          <div className="projeto-galeria">
            <div className="projeto-imagem-principal">
              <div className="imagem-wrapper">
                <Image 
                  src={projetos[projetoAtivo].imagens[imagemAtiva]} 
                  alt={projetos[projetoAtivo].titulo} 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="controles-galeria">
                <button 
                  onClick={imagemAnterior}
                  className="controle-btn"
                  aria-label="Imagem anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="contador-imagens">
                  <span>{imagemAtiva + 1} / {projetos[projetoAtivo].imagens.length}</span>
                </div>
                
                <button 
                  onClick={proximaImagem}
                  className="controle-btn"
                  aria-label="Próxima imagem"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="miniaturas-galeria">
              {projetos[projetoAtivo].imagens.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setImagemAtiva(idx)}
                  className={`miniatura ${imagemAtiva === idx ? 'ativa' : ''}`}
                  aria-label={`Ver imagem ${idx + 1}`}
                >
                  <div className="miniatura-wrapper">
                    <Image 
                      src={img} 
                      alt={`Miniatura ${idx + 1}`} 
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="projeto-info">
            <div className="projeto-detalhes">
              <div className="projeto-categoria-container">
                <span className="projeto-categoria">
                  {projetos[projetoAtivo].categoria}
                </span>
              </div>
              
              <h3 className="projeto-titulo">{projetos[projetoAtivo].titulo}</h3>
              
              <p className="projeto-descricao">
                {projetos[projetoAtivo].descricao}
              </p>
              
              <div className="projeto-navegacao">
                <button 
                  onClick={projetoAnterior}
                  className="navegacao-btn"
                  aria-label="Projeto anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Projeto anterior
                </button>
                
                <button 
                  onClick={proximoProjeto}
                  className="navegacao-btn"
                  aria-label="Próximo projeto"
                >
                  Próximo projeto
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="projetos-cta">
          <Link href="/projetos" className="btn btn-primary">
            Ver todos os projetos
          </Link>
        </div>
      </div>
    </section>
  );
}



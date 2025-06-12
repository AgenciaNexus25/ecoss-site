import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projetos = [
  {
    id: 'projeto-1',
    titulo: 'Residencial Villa Verde',
    categoria: 'Incorporação Imobiliária',
    descricao: 'Condomínio horizontal com 24 unidades residenciais, utilizando metodologia BIM.',
    imagens: [
      '/images/projetos/incorporacao_1.jpg',
      '/images/projetos/incorporacao_2.jpg',
      '/images/projetos/incorporacao_3.jpg',
    ]
  },
  {
    id: 'projeto-2',
    titulo: 'Usina Fotovoltaica Empresarial',
    categoria: 'Energia Solar',
    descricao: 'Instalação de sistema fotovoltaico de 75kWp para indústria de alimentos.',
    imagens: [
      '/images/projetos/solar_1.jpg',
      '/images/projetos/solar_2.jpg',
      '/images/projetos/solar_3.jpg',
    ]
  },
  {
    id: 'projeto-3',
    titulo: 'Estação de Tratamento de Efluentes',
    categoria: 'Engenharia Ambiental',
    descricao: 'Projeto e execução de estação de tratamento para indústria têxtil.',
    imagens: [
      '/images/projetos/ambiental_1.jpg',
      '/images/projetos/ambiental_2.jpg',
      '/images/projetos/ambiental_3.jpg',
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

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const areas = [
  {
    id: 'engenharia-civil',
    title: 'Engenharia Civil',
    description: 'Projetos completos em engenharia civil com metodologia BIM, garantindo precisão, integração e excelência técnica.',
    image: '/images/areas/engenharia_civil_construcao.jpeg',
    link: '/servicos/engenharia-civil',
    badge: 'BIM'
  },
  {
    id: 'energia-solar',
    title: 'Energia Solar',
    description: 'Soluções completas em energia fotovoltaica para residências e empresas, incluindo sistemas conectados à rede e autônomos.',
    image: '/images/areas/energia_solar_paineis.jpeg',
    link: '/servicos/energia-solar'
  },
  {
    id: 'engenharia-ambiental',
    title: 'Engenharia Ambiental',
    description: 'Licenciamento ambiental e soluções sustentáveis para projetos de todos os portes, com foco em conformidade legal e responsabilidade socioambiental.',
    image: '/images/areas/engenharia_ambiental_sustentabilidade.jpeg',
    link: '/servicos/engenharia-ambiental'
  },
  {
    id: 'incorporacao-imobiliaria',
    title: 'Incorporação Imobiliária',
    description: 'Projetos residenciais unifamiliares e multifamiliares com opções de financiamento personalizadas e metodologia BIM para máxima qualidade.',
    image: '/images/areas/incorporacao_imobiliaria.jpg',
    link: '/servicos/incorporacao-imobiliaria'
  },
  {
    id: 'construcao-civil',
    title: 'Construção Civil',
    description: 'Execução de obras residenciais, comerciais e institucionais com excelência técnica, cumprimento de prazos e transparência em todas as etapas.',
    image: '/images/areas/construcao_civil.jpg',
    link: '/servicos/construcao-civil'
  }
];

export default function AreasAtuacao() {
  return (
    <section className="section areas">
      <div className="container">
        <div className="section-title">
          <h2>Áreas de Atuação</h2>
          <p>A Ecoss Engenharia é um hub completo de serviços e soluções em engenharia</p>
        </div>
        
        <div className="grid grid-cols-3">
          {areas.map((area) => (
            <Link href={area.link} key={area.id}>
              <div className="area-card">
                <div className="area-card-image">
                  <Image 
                    src={area.image} 
                    alt={area.title} 
                    fill
                    className="object-cover"
                  />
                  {area.badge && (
                    <div className="badge-bim">
                      {area.badge}
                    </div>
                  )}
                </div>
                <div className="area-card-content">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Saiba mais</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



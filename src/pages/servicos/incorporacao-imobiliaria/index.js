import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function IncorporacaoImobiliaria() {
  return (
    <Layout>
      <Head>
        <title>Incorporação Imobiliária - Ecoss Engenharia</title>
        <meta name="description" content="Serviços de Incorporação Imobiliária da Ecoss Engenharia. Desenvolvimento de empreendimentos, gestão de projetos e consultoria especializada." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Incorporação Imobiliária</h1>
          <p>Desenvolvimento de empreendimentos com excelência e sustentabilidade</p>
        </div>

        <div className="content-section">
          <h2>Nossos Serviços em Incorporação Imobiliária</h2>
          <p>A Ecoss Engenharia oferece serviços completos de incorporação imobiliária, desde a concepção até a entrega de empreendimentos.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Desenvolvimento de Empreendimentos</h3>
              <p>Concepção e desenvolvimento de empreendimentos residenciais, comerciais e mistos.</p>
            </div>
            
            <div className="service-card">
              <h3>Gestão de Projetos</h3>
              <p>Coordenação e gestão integrada de projetos imobiliários, garantindo qualidade e cumprimento de prazos.</p>
            </div>
            
            <div className="service-card">
              <h3>Viabilidade Econômica</h3>
              <p>Estudos de viabilidade econômica e financeira para empreendimentos imobiliários.</p>
            </div>
            
            <div className="service-card">
              <h3>Regularização Imobiliária</h3>
              <p>Assessoria completa para regularização de empreendimentos junto aos órgãos competentes.</p>
            </div>
          </div>
        </div>
        
        <div className="projects-preview">
          <h2>Conheça Nossos Empreendimentos</h2>
          <p>Veja alguns dos nossos projetos de incorporação imobiliária já realizados.</p>
          <a href="/projetos" className="btn btn-secondary">Ver Projetos</a>
        </div>
        
        <div className="cta-section">
          <h2>Tem um projeto imobiliário em mente?</h2>
          <p>Entre em contato conosco para uma avaliação personalizada do seu empreendimento.</p>
          <a href="/contato" className="btn btn-primary">Solicitar Consultoria</a>
        </div>
      </div>
    </Layout>
  );
}

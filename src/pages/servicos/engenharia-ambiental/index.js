import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function EngenhariaAmbiental() {
  return (
    <Layout>
      <Head>
        <title>Engenharia Ambiental - Ecoss Engenharia</title>
        <meta name="description" content="Licenciamento ambiental e soluções sustentáveis para projetos de todos os portes, com foco em conformidade legal e responsabilidade socioambiental." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Engenharia Ambiental</h1>
          <p>Licenciamento ambiental e soluções sustentáveis para projetos de todos os portes, com foco em conformidade legal e responsabilidade socioambiental.</p>
        </div>

        <div className="content-section">
          <h2>Nossos Serviços em Engenharia Ambiental</h2>
          <p>A Ecoss Engenharia oferece serviços completos de engenharia ambiental, com foco em conformidade legal e responsabilidade socioambiental. Nossa equipe especializada possui mais de 10 anos de experiência em processos de licenciamento, garantindo agilidade na aprovação e conformidade com todas as exigências legais.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Licenciamento Ambiental</h3>
              <p>Condução completa do processo junto aos órgãos competentes.</p>
            </div>
            
            <div className="service-card">
              <h3>Estudos de Impacto Ambiental (EIA/RIMA)</h3>
              <p>Análise detalhada dos impactos de empreendimentos.</p>
            </div>
            
            <div className="service-card">
              <h3>Planos de Controle Ambiental (PCA)</h3>
              <p>Medidas para mitigação de impactos ambientais.</p>
            </div>
            
            <div className="service-card">
              <h3>Gestão de Resíduos</h3>
              <p>Planos de gerenciamento e destinação adequada.</p>
            </div>
            
            <div className="service-card">
              <h3>Tratamento de Efluentes</h3>
              <p>Projetos de sistemas para tratamento de águas residuais.</p>
            </div>
            
            <div className="service-card">
              <h3>Recuperação de Áreas Degradadas</h3>
              <p>Planos e execução de recuperação ambiental.</p>
            </div>
            
            <div className="service-card">
              <h3>Consultoria em Sustentabilidade</h3>
              <p>Estratégias para certificações ambientais e práticas sustentáveis.</p>
            </div>
          </div>
        </div>
        
        <div className="sustainability-section">
          <h2>Compromisso com a Sustentabilidade</h2>
          <p>Na Ecoss Engenharia, acreditamos que o desenvolvimento sustentável é o único caminho para o futuro. Nossos projetos são desenvolvidos com foco na preservação ambiental e no uso racional dos recursos naturais.</p>
        </div>
        
        <div className="cta-section">
          <h2>Precisa de soluções ambientais para seu projeto?</h2>
          <p>Entre em contato conosco para uma avaliação personalizada das suas necessidades.</p>
          <a href="/contato" className="btn btn-primary">Solicitar Orçamento</a>
        </div>
      </div>
    </Layout>
  );
}



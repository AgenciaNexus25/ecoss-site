import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function EngenhariaAmbiental() {
  return (
    <Layout>
      <Head>
        <title>Engenharia Ambiental - Ecoss Engenharia</title>
        <meta name="description" content="Serviços de Engenharia Ambiental da Ecoss Engenharia. Licenciamento ambiental, gestão de resíduos, estudos de impacto e soluções sustentáveis." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Engenharia Ambiental</h1>
          <p>Soluções sustentáveis para um futuro melhor</p>
        </div>

        <div className="content-section">
          <h2>Nossos Serviços em Engenharia Ambiental</h2>
          <p>A Ecoss Engenharia oferece serviços completos de engenharia ambiental, com foco em sustentabilidade e conformidade com a legislação.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Licenciamento Ambiental</h3>
              <p>Assessoria completa para obtenção de licenças ambientais junto aos órgãos competentes.</p>
            </div>
            
            <div className="service-card">
              <h3>Gestão de Resíduos</h3>
              <p>Desenvolvimento e implementação de planos de gerenciamento de resíduos sólidos.</p>
            </div>
            
            <div className="service-card">
              <h3>Estudos de Impacto Ambiental</h3>
              <p>Elaboração de EIA/RIMA e outros estudos para avaliação de impactos ambientais.</p>
            </div>
            
            <div className="service-card">
              <h3>Recuperação de Áreas Degradadas</h3>
              <p>Projetos de recuperação e revitalização de áreas degradadas e passivos ambientais.</p>
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

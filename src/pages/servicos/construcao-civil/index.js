import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function ConstrucaoCivil() {
  return (
    <Layout>
      <Head>
        <title>Construção Civil - Ecoss Engenharia</title>
        <meta name="description" content="Serviços de Construção Civil da Ecoss Engenharia. Execução de obras residenciais, comerciais e industriais com qualidade e sustentabilidade." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Construção Civil</h1>
          <p>Execução de obras com excelência e sustentabilidade</p>
        </div>

        <div className="content-section">
          <h2>Nossos Serviços em Construção Civil</h2>
          <p>A Ecoss Engenharia oferece serviços completos de construção civil, desde o planejamento até a entrega final da obra.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Construção Residencial</h3>
              <p>Execução de obras residenciais, desde casas unifamiliares até edifícios multifamiliares.</p>
            </div>
            
            <div className="service-card">
              <h3>Construção Comercial</h3>
              <p>Execução de obras comerciais, como lojas, escritórios e galpões empresariais.</p>
            </div>
            
            <div className="service-card">
              <h3>Construção Industrial</h3>
              <p>Execução de obras industriais, com foco em funcionalidade e segurança.</p>
            </div>
            
            <div className="service-card">
              <h3>Reformas e Ampliações</h3>
              <p>Serviços de reforma, ampliação e retrofit de edificações existentes.</p>
            </div>
          </div>
        </div>
        
        <div className="sustainability-section">
          <h2>Construção Sustentável</h2>
          <p>Na Ecoss Engenharia, adotamos práticas sustentáveis em todas as nossas obras, desde a escolha de materiais até a gestão de resíduos.</p>
        </div>
        
        <div className="cta-section">
          <h2>Pronto para iniciar sua obra?</h2>
          <p>Entre em contato conosco para uma avaliação personalizada do seu projeto.</p>
          <a href="/contato" className="btn btn-primary">Solicitar Orçamento</a>
        </div>
      </div>
    </Layout>
  );
}

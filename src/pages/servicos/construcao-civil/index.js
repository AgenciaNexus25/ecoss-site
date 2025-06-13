import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function ConstrucaoCivil() {
  return (
    <Layout>
      <Head>
        <title>Construção Civil - Ecoss Engenharia</title>
        <meta name="description" content="Execução de obras residenciais, comerciais e institucionais com excelência técnica, cumprimento de prazos e transparência em todas as etapas." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Construção Civil</h1>
          <p>Execução de obras residenciais, comerciais e institucionais com excelência técnica, cumprimento de prazos e transparência em todas as etapas.</p>
        </div>

        <div className="content-section">
          <h2>Nossos Serviços em Construção Civil</h2>
          <p>A Ecoss Engenharia oferece serviços completos de construção civil, desde o planejamento até a entrega final da obra. Nosso compromisso é com prazos, qualidade e transparência em todas as etapas da obra. Utilizamos metodologias modernas de gestão de projetos e controle de qualidade, garantindo resultados que superam as expectativas dos clientes.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Construção Residencial</h3>
              <p>Casas, sobrados e pequenos edifícios residenciais.</p>
            </div>
            
            <div className="service-card">
              <h3>Construção Comercial</h3>
              <p>Lojas, escritórios e espaços corporativos.</p>
            </div>
            
            <div className="service-card">
              <h3>Construção Institucional</h3>
              <p>Escolas, igrejas e espaços comunitários.</p>
            </div>
            
            <div className="service-card">
              <h3>Reformas e Ampliações</h3>
              <p>Modernização e expansão de edificações existentes.</p>
            </div>
            
            <div className="service-card">
              <h3>Instalações Elétricas Especiais</h3>
              <p>Reformas e implementações de alto padrão.</p>
            </div>
            
            <div className="service-card">
              <h3>Gerenciamento de Obras</h3>
              <p>Coordenação de equipes, cronogramas e orçamentos.</p>
            </div>
            
            <div className="service-card">
              <h3>Fiscalização Técnica</h3>
              <p>Acompanhamento de obras executadas por terceiros.</p>
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



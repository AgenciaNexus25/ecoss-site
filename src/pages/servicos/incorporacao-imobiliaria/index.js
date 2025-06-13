import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function IncorporacaoImobiliaria() {
  return (
    <Layout>
      <Head>
        <title>Incorporação Imobiliária - Ecoss Engenharia</title>
        <meta name="description" content="Projetos residenciais unifamiliares e multifamiliares com opções de financiamento personalizadas e metodologia BIM para máxima qualidade." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Incorporação Imobiliária</h1>
          <p>Projetos residenciais unifamiliares e multifamiliares com opções de financiamento personalizadas e metodologia BIM para máxima qualidade.</p>
        </div>

        <div className="content-section">
          <h2>Nossos Serviços em Incorporação Imobiliária</h2>
          <p>A Ecoss Engenharia oferece serviços completos de incorporação imobiliária, desde a concepção até a entrega de empreendimentos, com foco em funcionalidade, estética e segurança. Todos os projetos são desenvolvidos com metodologia BIM (Building Information Modeling), garantindo maior precisão, integração entre disciplinas e redução de incompatibilidades, resultando em economia de tempo e recursos durante a execução.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Empreendimentos Residenciais Unifamiliares</h3>
              <p>Projetos completos para residências individuais, com opções de financiamento via bancos públicos (Caixa Econômica Federal) e alternativas de financiamento via bancos privados com taxas competitivas. Acompanhamento de todo o processo de aprovação e construção, com calculadora integrada para simulação de financiamento.</p>
            </div>
            
            <div className="service-card">
              <h3>Empreendimentos Multifamiliares</h3>
              <p>Projetos horizontais (condomínios) e verticais (até 3 pavimentos), com opções de crédito e financiamento imobiliário via bancos privados, crédito imobiliário, financiamento imobiliário e capital de giro. Gestão completa do empreendimento e possibilidade de execução com capital próprio.</p>
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



import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function EngenhariaCivil() {
  return (
    <Layout>
      <Head>
        <title>Engenharia Civil - Ecoss Engenharia</title>
        <meta name="description" content="Projetos completos em engenharia civil com metodologia BIM, garantindo precisão, integração e excelência técnica." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Engenharia Civil</h1>
          <p>Projetos completos em engenharia civil com metodologia BIM, garantindo precisão, integração e excelência técnica.</p>
        </div>

        <div className="content-section">
          <h2>Nossos Serviços em Engenharia Civil</h2>
          <p>A Ecoss Engenharia oferece serviços completos de engenharia civil com foco em funcionalidade, estética e segurança. Todos os projetos são desenvolvidos com metodologia BIM (Building Information Modeling), garantindo maior precisão, integração entre disciplinas e redução de incompatibilidades, resultando em economia de tempo e recursos durante a execução.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Projetos Arquitetônicos</h3>
              <p>Desenvolvimento de projetos residenciais, comerciais e institucionais com foco em funcionalidade e estética.</p>
            </div>
            
            <div className="service-card">
              <h3>Projetos Estruturais</h3>
              <p>Dimensionamento e detalhamento de estruturas em concreto armado, metálicas e mistas.</p>
            </div>
            
            <div className="service-card">
              <h3>Projetos Hidrossanitários</h3>
              <p>Sistemas de água fria, água quente, esgoto sanitário e águas pluviais.</p>
            </div>
            
            <div className="service-card">
              <h3>Projetos Elétricos</h3>
              <p>Instalações elétricas de baixa tensão, iluminação, SPDA e sistemas de proteção.</p>
            </div>
            
            <div className="service-card">
              <h3>Projetos Complementares</h3>
              <p>Prevenção e combate a incêndio, climatização, automação e outros.</p>
            </div>
            
            <div className="service-card">
              <h3>Consultoria Técnica</h3>
              <p>Análise de viabilidade, laudos técnicos e perícias.</p>
            </div>
            
            <div className="service-card">
              <h3>Regularização Fundiária</h3>
              <p>Documentação e processos para regularização de imóveis e terrenos.</p>
            </div>
            
            <div className="service-card">
              <h3>Acompanhamento de Obras</h3>
              <p>Fiscalização e gerenciamento de execução conforme projetos aprovados.</p>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <h2>Precisa de um projeto de engenharia civil?</h2>
          <p>Entre em contato conosco para uma avaliação personalizada do seu projeto.</p>
          <a href="/contato" className="btn btn-primary">Solicitar Orçamento</a>
        </div>
      </div>
    </Layout>
  );
}



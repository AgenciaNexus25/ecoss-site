import React from 'react';

export default function VideoExplicativo() {
  return (
    <section className="section video">
      <div className="container">
        <div className="section-title">
          <h2>Conheça a Ecoss Engenharia</h2>
          <p>Veja como trabalhamos e nossa metodologia para entregar projetos de excelência</p>
        </div>
        
        <div className="video-container">
          <div className="video-frame">
            <iframe 
              src="https://www.youtube.com/embed/VIDEO_ID" 
              title="Ecoss Engenharia - Conheça nossa empresa" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="video-content">
            <div className="grid grid-cols-1 gap-6">
              <div className="qualidade-item">
                <div className="qualidade-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3>Qualidade Garantida</h3>
                  <p>
                    Todos os nossos projetos seguem rigorosos padrões de qualidade e são desenvolvidos com metodologia BIM.
                  </p>
                </div>
              </div>
              
              <div className="qualidade-item">
                <div className="qualidade-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3>Prazo Respeitado</h3>
                  <p>
                    Comprometimento com os prazos estabelecidos, garantindo a entrega pontual de todos os projetos.
                  </p>
                </div>
              </div>
              
              <div className="qualidade-item">
                <div className="qualidade-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3>Eficiência Energética</h3>
                  <p>
                    Projetos desenvolvidos com foco em sustentabilidade e máxima eficiência energética.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import Image from 'next/image';

export default function CalculadoraSolar() {
  const [consumo, setConsumo] = useState('');
  const [resultado, setResultado] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dadosContato, setDadosContato] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: ''
  });

  const calcularEconomia = (e) => {
    e.preventDefault();
    
    const consumoMensal = parseFloat(consumo);
    const custoKWh = 0.85; // Valor médio de R$/kWh
    const economiaPercentual = 0.85; // 85% de economia média

    const economiaAnualReais = consumoMensal * 12 * custoKWh * economiaPercentual;
    const valorSistema = consumoMensal * 900; // R$ 900 por kWh de consumo mensal
    const potenciaSistema = consumoMensal / 150; // kWp aproximado
    const retornoInvestimento = valorSistema / economiaAnualReais;
    
    setResultado({
      economiaAnual: economiaAnualReais,
      valorSistema,
      retornoInvestimento,
      potenciaSistema
    });
    
    setFormSubmitted(true);
  };

  const enviarContato = (e) => {
    e.preventDefault();
    // Aqui seria a integração com o banco de dados
    alert('Obrigado! Em breve nossa equipe entrará em contato.');
  };

  return (
    <section className="section calculadora">
      <div className="container">
        <div className="section-title">
          <h2>Calculadora Solar</h2>
          <p>Descubra quanto você pode economizar com energia solar</p>
        </div>
        
        <div className="calculadora-container">
          <div className="calculadora-form">
            {!formSubmitted ? (
              <form onSubmit={calcularEconomia}>
                <div className="mb-6">
                  <label>
                    Qual seu consumo médio mensal (kWh)?
                  </label>
                  <input
                    type="number"
                    value={consumo}
                    onChange={(e) => setConsumo(e.target.value)}
                    placeholder="Ex: 500"
                    required
                  />
                  <p className="text-sm">
                    Você encontra essa informação na sua conta de luz
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Calcular minha economia
                </button>
              </form>
            ) : (
              <div>
                <div className="resultado-simulacao">
                  <h3>Resultado da simulação</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="resultado-item">
                      <strong>Economia anual estimada</strong>
                      <p className="text-2xl font-bold">
                        R$ {resultado.economiaAnual.toLocaleString('pt-BR', {maximumFractionDigits: 2})}
                      </p>
                    </div>
                    
                    <div className="resultado-item">
                      <strong>Potência do sistema</strong>
                      <p className="text-2xl font-bold">
                        {resultado.potenciaSistema.toFixed(2)} kWp
                      </p>
                    </div>
                    
                    <div className="resultado-item">
                      <strong>Investimento aproximado</strong>
                      <p className="text-2xl font-bold">
                        R$ {resultado.valorSistema.toLocaleString('pt-BR', {maximumFractionDigits: 2})}
                      </p>
                    </div>
                    
                    <div className="resultado-item">
                      <strong>Retorno do investimento</strong>
                      <p className="text-2xl font-bold">
                        {resultado.retornoInvestimento.toFixed(1)} anos
                      </p>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={enviarContato} className="mt-6">
                  <h3 className="text-xl font-bold mb-4">Receba um orçamento detalhado</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label>Nome completo</label>
                      <input
                        type="text"
                        value={dadosContato.nome}
                        onChange={(e) => setDadosContato({...dadosContato, nome: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label>E-mail</label>
                      <input
                        type="email"
                        value={dadosContato.email}
                        onChange={(e) => setDadosContato({...dadosContato, email: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label>Telefone</label>
                      <input
                        type="tel"
                        value={dadosContato.telefone}
                        onChange={(e) => setDadosContato({...dadosContato, telefone: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label>Cidade/Estado</label>
                      <input
                        type="text"
                        value={dadosContato.cidade}
                        onChange={(e) => setDadosContato({...dadosContato, cidade: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Solicitar orçamento detalhado
                  </button>
                </form>
              </div>
            )}
          </div>
          
          <div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/calculadoras/calculadora_solar_visual.jpg" 
                alt="Energia Solar - Ecoss Engenharia" 
                fill
                className="object-cover"
              />
            </div>
            
            <div className="calculadora-vantagens">
              <div className="vantagem-item">
                <h4>Economia de até 95%</h4>
                <p>Na conta de energia</p>
              </div>
              
              <div className="vantagem-item">
                <h4>Valorização imobiliária</h4>
                <p>Até 10% de valorização</p>
              </div>
              
              <div className="vantagem-item">
                <h4>Energia limpa</h4>
                <p>Sustentável e renovável</p>
              </div>
              
              <div className="vantagem-item">
                <h4>Durabilidade</h4>
                <p>Mais de 25 anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



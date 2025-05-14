import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | Agência Nexus",
  description: "Conheça a história, missão, visão e valores da Agência Nexus, sua parceira de marketing digital para PMEs.",
};

export default function SobrePage() {
  return (
    <div className="space-y-10 py-12 px-4 sm:px-6 lg:px-8 bg-nexus-white text-nexus-blue">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-nexus-blue mb-6">Sobre a Agência Nexus</h1>
      </section>

      {/* Nossa História, Nosso Propósito - Fundo Claro, Texto Escuro, Título Dourado */}
      <section className="bg-nexus-white p-8 rounded-lg shadow-2xl border border-nexus-gray/30">
        <h2 className="text-4xl font-semibold text-nexus-gold mb-6">Nossa História, Nosso Propósito</h2>
        <p className="text-nexus-blue text-lg leading-relaxed mb-4">
          A Agência Nexus nasceu da convicção de que pequenas e médias empresas (PMEs) no Brasil, especialmente aquelas nos dinâmicos setores de prestação de serviços e vendas, merecem acesso a um marketing digital que seja não apenas de alta performance, mas também profundamente alinhado com suas realidades e aspirações. Fundada sobre a paixão por conectar negócios a seus clientes ideais de maneiras significativas e mensuráveis, nosso propósito é ser a ponte – o <em>nexus</em> – entre a estratégia de marketing digital de ponta e o crescimento sustentável e palpável para cada PME que temos o privilégio de servir. Compreendemos os desafios únicos enfrentados por esses negócios e estamos aqui para desmistificar o marketing digital, tornando-o uma ferramenta poderosa e acessível para todos.
        </p>
      </section>

      {/* Missão, Visão e Valores - Fundo Azul, Texto Claro, Títulos Dourados */}
      <section className="bg-nexus-blue text-nexus-white p-8 rounded-lg shadow-inner">
        <h2 className="text-4xl font-semibold text-nexus-gold mb-10 text-center">Missão, Visão e Valores: Os Pilares da Nexus</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-nexus-gold mb-3">Missão</h3>
            <p className="text-nexus-white text-lg leading-relaxed">
              Impulsionar o crescimento sustentável de pequenas e médias empresas nos setores de prestação de serviços e vendas através de soluções de marketing digital personalizadas, transparentes e inabalavelmente focadas em resultados mensuráveis.
            </p>
          </div>
          <div className="transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-nexus-gold mb-3">Visão</h3>
            <p className="text-nexus-white text-lg leading-relaxed">
              Ser a agência de marketing digital referência para PMEs nos segmentos de serviços e vendas no Brasil, reconhecida pela excelência na entrega, pela construção de relacionamentos de confiança inabaláveis e pelo impacto positivo e transformador que geramos nos negócios de nossos clientes.
            </p>
          </div>
          <div className="transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-nexus-gold mb-3">Valores Fundamentais</h3>
            <ul className="list-disc list-inside text-nexus-white space-y-2 text-lg leading-relaxed">
              <li>Parceria Genuína</li>
              <li>Foco no Resultado do Cliente</li>
              <li>Excelência e Inovação Contínua</li>
              <li>Transparência Total em Cada Etapa</li>
              <li>Adaptabilidade e Flexibilidade Estratégica</li>
              <li>Ética e Responsabilidade Inegociáveis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nossa Equipe - Fundo Claro, Texto Escuro, Título Dourado */}
      <section className="bg-nexus-white p-8 rounded-lg shadow-2xl border border-nexus-gray/30">
        <h2 className="text-4xl font-semibold text-nexus-gold mb-6">Nossa Equipe (Direção Inicial)</h2>
        <p className="text-nexus-blue text-lg leading-relaxed">
          <em>(Esta seção será preenchida com as informações dos diretores da Agência Nexus, incluindo pequenas biografias e, idealmente, fotos profissionais para humanizar la marca e construir confiança desde o primeiro contato.)</em>
        </p>
      </section>

      {/* Nosso Jeito Nexus de Trabalhar - Fundo Dourado, Texto Azul */}
      <section className="bg-nexus-gold text-nexus-blue p-10 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-semibold mb-6 text-center">Nosso Jeito Nexus de Trabalhar</h2>
        <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto">
          Operamos sob um modelo de trabalho <strong>híbrido</strong>, combinando a eficiência e o alcance do trabalho remoto com a possibilidade de interações presenciais estratégicas para clientes locais. Essa flexibilidade nos permite atender empresas em todo o Brasil, mantendo um toque pessoal. Acreditamos na construção de uma <strong>parceria genuína</strong>, onde a comunicação é constante e a <strong>transparência</strong> é a norma, não a exceção. Queremos que você se sinta parte do processo e confiante nos caminhos que traçamos juntos para o sucesso do seu negócio.
        </p>
      </section>
    </div>
  );
}


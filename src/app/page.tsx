import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-10 bg-nexus-white text-nexus-blue">
      {/* Hero Section - Fundo Azul, Texto Claro */}
      <section className="text-center py-16 bg-nexus-blue text-nexus-white rounded-lg shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-nexus-gold opacity-5"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 text-nexus-gold animate-fadeInUp">Conectando sua Empresa ao Sucesso Digital</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-nexus-gray animate-fadeInUp delay-200">
            Bem-vindo à Agência Nexus, sua parceira estratégica para impulsionar o crescimento sustentável de pequenas e médias empresas (PMEs) no Brasil. Somos especialistas em transformar o potencial do seu negócio em resultados concretos através de soluções de marketing digital personalizadas, transparentes e focadas em performance mensurável.
          </p>
          <Link href="/contato" className="btn-primary text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fadeInUp delay-400">
            Descubra como podemos ajudar!
          </Link>
        </div>
      </section>

      {/* Por que a Agência Nexus? Section - Fundo da Seção Claro, Cards com Fundo Azul */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-center mb-12 text-nexus-blue">Por que a Agência Nexus?</h2>
        {/* Container dos cards ajustado para ocupar mais largura */}
        <div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Título sem <br /> para permitir quebra natural com mais largura */}
            <div className="bg-nexus-blue text-nexus-white p-6 md:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-nexus-gold min-h-[4.5em] flex items-center">
                Atendimento Personalizado e Consultivo
              </h3>
              <p className="text-nexus-gray flex-grow">
                Dedicamos tempo para entender profundamente os desafios e as oportunidades únicas do seu negócio, construindo um relacionamento de parceria genuína.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-nexus-blue text-nexus-white p-6 md:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-nexus-gold min-h-[4.5em] flex items-center">Metodologia Orientada a Dados</h3>
              <p className="text-nexus-gray flex-grow">
                Implementamos uma cultura forte de análise de dados para otimizar campanhas continuamente e demonstrar o ROI de forma clara e inequívoca.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-nexus-blue text-nexus-white p-6 md:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-nexus-gold min-h-[4.5em] flex items-center">Soluções Integradas e Flexíveis</h3>
              <p className="text-nexus-gray flex-grow">
                Oferecemos um portfólio completo com flexibilidade para montar pacotes personalizados que atendam às suas necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços Estratégicos Section - Fundo da Seção Azul, Cards Claros */}
      <section className="py-12 bg-nexus-blue text-nexus-white rounded-lg shadow-inner px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6 text-nexus-gold">Nossos Serviços Estratégicos</h2>
        <p className="text-center text-lg text-nexus-gray mb-12 max-w-2xl mx-auto">
          Transformamos seus objetivos de negócio em realidade digital através de um conjunto integrado de serviços, desenhados para PMEs como a sua.
        </p>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-nexus-white text-nexus-blue rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 border border-nexus-gray">
              <h4 className="text-xl font-medium text-nexus-gold mb-3">Estratégia Digital Completa</h4>
              <p className="text-gray-600 text-sm">Marketing de conteúdo, SEO, mídias sociais e mídia paga.</p>
            </div>
            <div className="p-6 bg-nexus-white text-nexus-blue rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 border border-nexus-gray">
              <h4 className="text-xl font-medium text-nexus-gold mb-3">Performance Online Otimizada</h4>
              <p className="text-gray-600 text-sm">Inbound marketing, email marketing e desenvolvimento web focado em conversão.</p>
            </div>
            <div className="p-6 bg-nexus-white text-nexus-blue rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 border border-nexus-gray">
              <h4 className="text-xl font-medium text-nexus-gold mb-3">Inteligência de Dados</h4>
              <p className="text-gray-600 text-sm">Marketing analytics e consultoria em CRM para decisões mais inteligentes.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/servicos" className="text-nexus-gold hover:text-nexus-white font-semibold text-lg group transition-colors duration-300">
            Conheça todos os nossos serviços <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* Placeholder para Depoimentos - Mantido comentado */}
      {/* 
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-center mb-12 text-nexus-blue">O que nossos clientes dizem</h2>
        <div className="text-center text-gray-700">
          <p>Depoimentos de clientes satisfeitos aparecerão aqui em breve!</p>
        </div>
      </section>
      */}
    </div>
  );
}



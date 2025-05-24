import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | Agência Nexus",
  description: "Conheça a história, missão, visão e valores da Agência Nexus, sua parceira de marketing digital para PMEs.",
};

export default function SobrePage() {
  const teamMembers = [
    {
      name: "Eduardo Mendes",
      role: "Diretor de Conteúdo Técnico",
      bio: "Engenheiro Civil com MBA em Marketing Digital e 15 anos de experiência em projetos de engenharia. Especialista em traduzir conceitos técnicos para linguagem acessível, Eduardo lidera a criação de conteúdo educativo de alta qualidade e garante a precisão técnica de todos os materiais da agência.",
      image: "/team/eduardo-mendes.jpg",
      characteristics: [
        "Meticuloso e detalhista",
        "Analítico e estruturado",
        "Didático e paciente",
        "Confiável e preciso",
        "Curioso e sempre atualizado com novas tecnologias"
      ],
      tone: "Profissional e técnico, mas acessível. Explicativo sem ser condescendente. Usa analogias para simplificar conceitos complexos. Direto e objetivo, valorizando a precisão das informações.",
      skills: [
        "Domínio profundo de temas técnicos de engenharia e construção",
        "Capacidade de criar conteúdo educativo de alta qualidade",
        "Habilidade para explicar processos complexos de forma simples",
        "Conhecimento avançado em SEO técnico",
        "Experiência em produção de conteúdo para diferentes formatos"
      ],
      responsibilities: [
        "Criação de conteúdo técnico e educativo",
        "Supervisão da qualidade técnica de todos os materiais",
        "Desenvolvimento de e-books, guias e materiais ricos",
        "Consultoria técnica para outros departamentos",
        "Garantia da precisão e confiabilidade das informações"
      ],
      channels: ["Blog/Site (artigos técnicos)", "LinkedIn (conteúdo profissional)", "YouTube (vídeos explicativos)", "Webinars e workshops"],
      communication: "Neste artigo, vou explicar os três principais fatores que afetam a estrutura de uma residência em região litorânea. Compreender esses elementos é fundamental para garantir a segurança e durabilidade da sua construção. Vamos analisar cada um deles com exemplos práticos e soluções recomendadas..."
    },
    {
      name: "Carla Oliveira",
      role: "Diretora de Relacionamento com Cliente",
      bio: "Formada em Comunicação Social com especialização em Marketing de Relacionamento e 10 anos de experiência em atendimento ao cliente. Empática e comunicativa, Carla é responsável por nutrir relacionamentos duradouros com os clientes, identificando necessidades e garantindo sua satisfação.",
      image: "/team/carla-oliveira.jpg",
      characteristics: [
        "Empática e acolhedora",
        "Comunicativa e articulada",
        "Paciente e boa ouvinte",
        "Proativa e solucionadora de problemas",
        "Organizada e atenta aos detalhes"
      ],
      tone: "Caloroso e acessível. Consultivo e orientador. Personalizado para cada cliente. Positivo mesmo ao lidar com problemas. Usa linguagem simples e inclusiva.",
      skills: [
        "Excelência em comunicação interpessoal",
        "Habilidade para identificar necessidades não expressas",
        "Gestão de expectativas e resolução de conflitos",
        "Conhecimento avançado em jornada do cliente",
        "Experiência em nutrição de leads e fidelização"
      ],
      responsibilities: [
        "Gestão do relacionamento com clientes",
        "Desenvolvimento de estratégias de nutrição de leads",
        "Criação de conteúdo consultivo e de apoio",
        "Monitoramento da satisfação dos clientes",
        "Coordenação de respostas a dúvidas e solicitações"
      ],
      channels: ["E-mail marketing (newsletters personalizadas)", "WhatsApp Business", "Instagram Direct e Stories interativos", "Webinars e sessões de Q&A"],
      communication: "Olá! Percebi que você está considerando iniciar um projeto de construção residencial. É um momento emocionante, mas também cheio de decisões importantes. Preparei este guia com os 5 primeiros passos que recomendo para qualquer pessoa nessa fase. Se tiver dúvidas específicas sobre seu projeto, estou à disposição para conversarmos mais..."
    },
    {
      name: "Rafael Torres",
      role: "Diretor de Marca e Comunicação Institucional",
      bio: "Formado em Design com MBA em Branding e 18 anos de experiência em agências de publicidade. Especialista em posicionamento de marca e storytelling, Rafael lidera a comunicação institucional e garante a consistência da voz da marca em todos os pontos de contato.",
      image: "/team/rafael-torres.jpg",
      characteristics: [
        "Criativo e inovador",
        "Estratégico e visionário",
        "Assertivo e confiante",
        "Inspirador e motivador",
        "Atento às tendências de mercado"
      ],
      tone: "Profissional com toques de inspiração. Confiante e assertivo. Usa storytelling para engajar. Equilibra formalidade com proximidade. Inspirador e orientado a resultados.",
      skills: [
        "Expertise em branding e identidade visual",
        "Habilidade para desenvolver narrativas de marca impactantes",
        "Conhecimento avançado em estratégias de comunicação",
        "Experiência em gestão de crise e reputação",
        "Visão estratégica para posicionamento de mercado"
      ],
      responsibilities: [
        "Gestão da identidade e posicionamento da marca",
        "Desenvolvimento de campanhas institucionais",
        "Supervisão da comunicação visual em todos os canais",
        "Criação de cases de sucesso e histórias de clientes",
        "Garantia da consistência da voz da marca"
      ],
      channels: ["Instagram Feed (conteúdo institucional)", "Facebook (comunicação corporativa)", "Site (páginas institucionais)", "Apresentações e pitches para clientes"],
      communication: "Estamos orgulhosos de apresentar mais um projeto transformador entregue pela Ecoss Engenharia. Esta residência em Cururupu não apenas atende aos mais altos padrões técnicos, mas também representa nossa missão de criar espaços que melhoram a vida das pessoas. Confira o antes e depois e descubra como nossa abordagem integrada fez a diferença..."
    },
    {
      name: "Juliana Martins",
      role: "Diretora de Marketing Digital e Performance",
      bio: "Administradora com especialização em Marketing Digital e certificações em Google Ads, Analytics e Meta Business. Analítica e orientada a dados, Juliana desenvolve estratégias de marketing digital, gerencia campanhas e otimiza resultados com base em métricas precisas.",
      image: "/team/juliana-martins.jpg",
      characteristics: [
        "Analítica e orientada a dados",
        "Metódica e organizada",
        "Adaptável e ágil",
        "Curiosa e experimental",
        "Focada em resultados mensuráveis"
      ],
      tone: "Objetivo e direto. Baseado em dados e evidências. Técnico quando necessário. Pragmático e orientado a soluções. Usa terminologia de marketing com clareza.",
      skills: [
        "Expertise em estratégias de marketing digital",
        "Domínio de ferramentas de análise e mensuração",
        "Conhecimento avançado em SEO, SEM e mídia paga",
        "Habilidade para otimização de conversão",
        "Experiência em gestão de campanhas multicanal"
      ],
      responsibilities: [
        "Desenvolvimento de estratégias de marketing digital",
        "Gestão de campanhas pagas e orgânicas",
        "Análise de métricas e otimização de resultados",
        "Coordenação de testes A/B e experimentos",
        "Relatórios de performance e recomendações"
      ],
      channels: ["Google Ads e Meta Ads", "Analytics e ferramentas de dados", "Plataformas de automação de marketing", "Dashboards e relatórios de performance"],
      communication: "Nossa campanha para o serviço de regularização de imóveis alcançou um ROI de 320% no último trimestre. Identificamos que segmentar por bairros específicos e usar mensagens focadas em prazos legais aumentou nossa taxa de conversão em 28%. Para o próximo ciclo, recomendo ampliarmos o investimento neste segmento e testarmos novas abordagens criativas baseadas nos dados que coletamos..."
    },
    {
      name: "André Lima",
      role: "Diretor de Produção Visual e Criativa",
      bio: "Designer Gráfico com especialização em Produção Audiovisual e 10 anos de experiência em agências criativas. Criativo e atento a detalhes estéticos, André lidera a produção visual para todos os canais, garantindo a qualidade e consistência visual dos materiais.",
      image: "/team/andre-lima.jpg",
      characteristics: [
        "Extremamente criativo e visual",
        "Atento a detalhes estéticos",
        "Versátil e multidisciplinar",
        "Inovador e experimental",
        "Colaborativo e aberto a feedback"
      ],
      tone: "Entusiástico e apaixonado. Visual e descritivo. Usa referências culturais e de design. Informal mas profissional. Valoriza a estética e a experiência sensorial.",
      skills: [
        "Domínio de ferramentas de design e edição (Adobe Creative Suite)",
        "Expertise em fotografia e direção de arte",
        "Conhecimento avançado em design responsivo e UX/UI",
        "Habilidade para storytelling visual",
        "Experiência em produção de conteúdo para múltiplas plataformas"
      ],
      responsibilities: [
        "Criação de identidades visuais e materiais gráficos",
        "Produção de conteúdo visual para redes sociais",
        "Direção de sessões fotográficas e vídeos",
        "Desenvolvimento de templates e guias de estilo",
        "Garantia da qualidade visual em todos os materiais"
      ],
      channels: ["Instagram (conteúdo visual)", "YouTube (produção de vídeos)", "Pinterest (inspiração e referências)", "Portfólio visual e apresentações"],
      communication: "Para este projeto, criamos uma linguagem visual que combina elementos técnicos da engenharia com a estética natural da região litorânea. Utilizamos uma paleta de azuis profundos contrastando com tons terrosos para representar a conexão entre a estrutura construída e o ambiente natural. Cada imagem foi cuidadosamente composta para destacar tanto a precisão técnica quanto o resultado estético final..."
    }
  ];

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
        <h2 className="text-4xl font-semibold text-nexus-gold mb-10 text-center">Nossa Equipe</h2>
        <p className="text-nexus-blue text-lg leading-relaxed mb-10 text-center max-w-4xl mx-auto">
          Conheça os diretores da Agência Nexus, uma equipe multidisciplinar de especialistas dedicados a transformar sua presença digital e impulsionar seus resultados de negócio.
        </p>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-nexus-white rounded-lg overflow-hidden shadow-xl border border-nexus-gray/30">
              <div className="flex flex-col md:flex-row">
                {/* Foto e informações básicas */}
                <div className="md:w-1/3 bg-nexus-blue p-6 flex flex-col items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-nexus-gold/20 flex items-center justify-center mb-6">
                    <span className="text-nexus-gold text-6xl font-bold">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-3xl font-semibold text-nexus-gold mb-2 text-center">{member.name}</h3>
                  <p className="text-nexus-white text-xl mb-4 text-center">{member.role}</p>
                  <p className="text-nexus-white text-base leading-relaxed text-center">{member.bio}</p>
                </div>
                
                {/* Detalhes do perfil */}
                <div className="md:w-2/3 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Características e Tom de Voz */}
                    <div>
                      <h4 className="text-xl font-semibold text-nexus-gold mb-3">Características Pessoais</h4>
                      <ul className="list-disc list-inside text-nexus-blue space-y-1 mb-6">
                        {member.characteristics.map((char, i) => (
                          <li key={i} className="text-base">{char}</li>
                        ))}
                      </ul>
                      
                      <h4 className="text-xl font-semibold text-nexus-gold mb-3">Tom de Voz</h4>
                      <p className="text-nexus-blue text-base mb-6">{member.tone}</p>
                      
                      <h4 className="text-xl font-semibold text-nexus-gold mb-3">Canais Principais</h4>
                      <ul className="list-disc list-inside text-nexus-blue space-y-1">
                        {member.channels.map((channel, i) => (
                          <li key={i} className="text-base">{channel}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Competências e Responsabilidades */}
                    <div>
                      <h4 className="text-xl font-semibold text-nexus-gold mb-3">Competências</h4>
                      <ul className="list-disc list-inside text-nexus-blue space-y-1 mb-6">
                        {member.skills.map((skill, i) => (
                          <li key={i} className="text-base">{skill}</li>
                        ))}
                      </ul>
                      
                      <h4 className="text-xl font-semibold text-nexus-gold mb-3">Responsabilidades</h4>
                      <ul className="list-disc list-inside text-nexus-blue space-y-1">
                        {member.responsibilities.map((resp, i) => (
                          <li key={i} className="text-base">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Exemplo de Comunicação */}
                  <div className="mt-6 p-4 bg-nexus-blue/10 rounded-lg border border-nexus-blue/20">
                    <h4 className="text-xl font-semibold text-nexus-gold mb-3">Exemplo de Comunicação</h4>
                    <p className="text-nexus-blue text-base italic">&quot;{member.communication}&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-nexus-blue mb-4">Colaboração e Sinergia</h3>
          <p className="text-nexus-blue text-lg leading-relaxed max-w-4xl mx-auto">
            Nossa equipe trabalha de forma colaborativa e integrada, combinando expertises complementares para oferecer soluções completas. Cada diretor traz uma perspectiva única e valiosa, garantindo que todos os aspectos do seu projeto de marketing digital sejam tratados com excelência e alinhados aos objetivos do seu negócio.
          </p>
          
          <div className="mt-8 p-6 bg-nexus-blue/10 rounded-lg border border-nexus-blue/20 max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold text-nexus-gold mb-3">Como Trabalhamos Juntos</h4>
            <ul className="list-disc list-inside text-nexus-blue space-y-3 text-left">
              <li className="text-base"><strong>Eduardo (Conteúdo Técnico)</strong> desenvolve o conteúdo técnico que <strong>Carla (Relacionamento)</strong> adapta para comunicação direta com clientes.</li>
              <li className="text-base"><strong>Rafael (Marca)</strong> estabelece as diretrizes de comunicação que <strong>André (Produção Visual)</strong> implementa nos materiais visuais.</li>
              <li className="text-base"><strong>Juliana (Performance)</strong> analisa os dados de engajamento dos conteúdos criados por <strong>Eduardo</strong> e <strong>André</strong> para otimizar futuras produções.</li>
              <li className="text-base"><strong>Carla</strong> coleta feedback dos clientes que <strong>Rafael</strong> transforma em histórias de sucesso e cases.</li>
              <li className="text-base"><strong>André</strong> cria os materiais visuais para as campanhas que <strong>Juliana</strong> gerencia e otimiza.</li>
            </ul>
          </div>
        </div>
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

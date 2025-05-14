import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Nossos Serviços | Agência Nexus",
  description: "Conheça o portfólio completo de serviços de marketing digital da Agência Nexus para PMEs de serviços e vendas.",
};

const services = [
  {
    id: 1,
    title: "Marketing de Conteúdo Estratégico",
    description: "Criamos e distribuímos conteúdo valioso, relevante e consistente para atrair e reter um público-alvo claramente definido e, em última análise, impulsionar ações lucrativas por parte dos clientes. Isso inclui artigos de blog, e-books, infográficos, estudos de caso, vídeos e outros formatos.",
    benefits: "Educa o mercado sobre suas soluções, constrói autoridade e confiança na sua marca, melhora o posicionamento orgânico nos mecanismos de busca (SEO) e gera leads qualificados de forma consistente.",
    delivery: "Desenvolvemos uma estratégia de conteúdo alinhada aos seus objetivos, realizamos pesquisa de pautas, produzimos materiais de alta qualidade otimizados para SEO e planejamos a distribuição nos canais mais eficazes."
  },
  {
    id: 2,
    title: "SEO (Otimização para Mecanismos de Busca)",
    description: "Um conjunto de técnicas aplicadas ao seu site e conteúdo para melhorar significativamente seu posicionamento nos resultados orgânicos (não pagos) de mecanismos de busca como o Google.",
    benefits: "Aumenta a visibilidade online do seu negócio, atrai tráfego qualificado de potenciais clientes que estão ativamente buscando por seus serviços ou produtos, e gera leads com alto potencial de conversão a um custo mais baixo no longo prazo.",
    delivery: "Realizamos auditorias de SEO, pesquisa aprofundada de palavras-chave, otimizações on-page (conteúdo, meta tags, estrutura), otimizações técnicas (velocidade, mobile-friendliness) e estratégias de link building para aumentar a autoridade do seu site."
  },
  {
    id: 3,
    title: "Gestão de Mídias Sociais com Foco em Engajamento e Conversão",
    description: "Desenvolvemos e executamos estratégias para construir e gerenciar la presença da sua marca em plataformas de mídia social relevantes para o seu público-alvo (como Instagram, Facebook, LinkedIn, entre outras).",
    benefits: "Fortalece o reconhecimento da marca, permite um canal direto de comunicação e engajamento com clientes e potenciais clientes, direciona tráfego para o seu site e pode ser uma fonte importante de leads e vendas.",
    delivery: "Criamos calendários editoriais estratégicos, produzimos conteúdo visual e textual atraente, gerenciamos a comunidade online, monitoramos métricas de desempenho e otimizamos as campanhas para alcançar os melhores resultados."
  },
  {
    id: 4,
    title: "Mídia Paga (Tráfego Pago) para Resultados Acelerados",
    description: "Criação e gerenciamento de campanhas de anúncios pagos em diversas plataformas, como Google Ads (rede de pesquisa, display, YouTube), Meta Ads (Facebook e Instagram Ads), LinkedIn Ads e outras, para alcançar rapidamente um público altamente segmentado.",
    benefits: "Gera leads e vendas de forma mais imediata, aumenta a visibilidade da marca para públicos específicos, permite testar ofertas e mensagens rapidamente e oferece um controle preciso sobre o orçamento e o retorno do investimento.",
    delivery: "Planejamos as campanhas com base nos seus objetivos, realizamos a segmentação detalhada do público, criamos anúncios persuasivos (textos e visuais), configuramos e otimizamos continuamente os lances e orçamentos, e monitoramos os resultados para maximizar o ROI."
  },
  {
    id: 5,
    title: "Inbound Marketing: A Jornada Completa do Cliente",
    description: "Uma metodologia completa que combina táticas de marketing de conteúdo, SEO, mídias sociais e email marketing para atrair visitantes para o seu site, convertê-los em leads, nutrir esses leads até que estejam prontos para a compra, fechar negócios e, por fim, encantá-los para que se tornem promotores da sua marca.",
    benefits: "Constrói um funil de vendas sustentável e escalável, gera leads mais qualificados e educados sobre suas soluções, reduz o custo de aquisição de clientes (CAC) a longo prazo e fortalece o relacionamento com os clientes.",
    delivery: "Mapeamos a jornada do seu cliente ideal, criamos personas, desenvolvemos estratégias de atração (conteúdo, SEO), conversão (landing pages, formulários), relacionamento (email marketing, automação básica) e análise para otimizar todo o processo."
  },
  {
    id: 6,
    title: "Email Marketing para Relacionamento e Vendas",
    description: "Criação e envio de campanhas de email personalizadas e segmentadas para construir e manter um relacionamento com sua base de contatos (leads e clientes), nutrir leads, comunicar novidades, promover ofertas especiais e impulsionar vendas diretas.",
    benefits: "É um canal direto e eficaz para comunicação, permite a nutrição de leads ao longo do tempo, aumenta a retenção de clientes, promove a recompra e possui um dos maiores ROIs entre as estratégias de marketing digital.",
    delivery: "Desenvolvemos estratégias de captação de emails, segmentamos sua base de contatos, criamos templates de email profissionais, redigimos copys persuasivas, configuramos fluxos de automação básicos e analisamos as métricas das campanhas."
  },
  {
    id: 7,
    title: "Desenvolvimento e Otimização de Websites e Landing Pages Focados em Conversão",
    description: "Criação ou otimização de sites institucionais, pequenas lojas virtuais (para o pilar de vendas) e landing pages (páginas de captura de leads) com um design atraente, navegação intuitiva e, principalmente, foco em proporcionar uma excelente experiência ao usuário (UX) e maximizar as taxas de conversão.",
    benefits: "Seu site é sua vitrine digital 24/7. Um site bem estruturado e otimizado transmite profissionalismo, facilita a jornada do cliente e é fundamental para transformar visitantes em leads e clientes. Landing pages eficazes são cruciais para o sucesso de campanhas de mídia paga e inbound marketing.",
    delivery: "Realizamos o planejamento da arquitetura da informação, design focado na experiência do usuário, desenvolvimento responsivo (adaptado para todos os dispositivos), otimizações de velocidade de carregamento e implementação de CTAs (Call-to-Actions) eficazes. Para projetos iniciais, podemos utilizar construtores e templates para agilidade e controle de custos."
  },
  {
    id: 8,
    title: "Marketing Analytics (Análise de Dados) para Decisões Inteligentes",
    description: "Coleta, mensuração, análise e elaboração de relatórios sobre dados de todas as suas iniciativas de marketing digital para entender o desempenho das campanhas, identificar pontos de melhoria, descobrir oportunidades e comprovar o retorno sobre o investimento (ROI).",
    benefits: "Permite tomar decisões de marketing baseadas em dados, não em achismos, otimizar o orçamento de marketing para focar nas ações que trazem mais resultado, entender melhor o comportamento do seu público e demonstrar o valor real do marketing para o negócio.",
    delivery: "Configuramos ferramentas de analytics (como Google Analytics 4), definimos os KPIs mais importantes para o seu negócio, coletamos e organizamos os dados, criamos relatórios de desempenho claros e dashboards básicos, e fornecemos insights para otimização contínua."
  },
  {
    id: 9,
    title: "Gestão de CRM (Consultoria e Suporte)",
    description: "Consultoria e auxílio na implementação e gestão de ferramentas de CRM (Customer Relationship Management - Gestão de Relacionamento com o Cliente), que ajudam a organizar e gerenciar todas as interações com clientes atuais e potenciais.",
    benefits: "Melhora a organização do processo de vendas, otimiza o acompanhamento de leads, personaliza a comunicação com os clientes, aumenta a retenção e a fidelização, e fornece dados valiosos sobre o comportamento do cliente.",
    delivery: "Ajudamos a escolher a ferramenta de CRM mais adequada para sua PME (considerando o orçamento inicial), oferecemos suporte na configuração inicial, auxiliamos na integração com suas estratégias de marketing e vendas, e fornecemos treinamento básico para sua equipe."
  }
];

export default function ServicosPage() {
  return (
    <div className="space-y-10 py-12 px-4 sm:px-6 lg:px-8 bg-nexus-white text-nexus-blue">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-nexus-blue mb-6">Nossos Serviços de Marketing Digital para PMEs</h1>
        <p className="text-xl text-nexus-blue max-w-4xl mx-auto leading-relaxed">
          A Agência Nexus oferece um portfólio completo e integrado de serviços de marketing digital, cuidadosamente selecionados para atender às necessidades específicas de pequenas e médias empresas (PMEs) nos setores de prestação de serviços e vendas. Nossa abordagem não é vender pacotes fechados, mas sim entender seus desafios e objetivos para construir uma estratégia personalizada que utilize as ferramentas certas para gerar resultados reais e mensuráveis.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-semibold text-nexus-gold mb-12 text-center">Conheça Nossas Soluções:</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-nexus-blue text-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col border-2 border-nexus-gold/50">
              <h3 className="text-2xl lg:text-3xl font-semibold text-nexus-gold mb-4 min-h-[3em] flex items-center">{service.title}</h3>
              <div className="space-y-3 text-white text-base leading-relaxed flex-grow">
                <p className="text-white"><strong className="text-white">O que é?</strong> {service.description}</p>
                <p className="text-white"><strong className="text-white">Benefícios para PMEs de Serviços e Vendas:</strong> {service.benefits}</p>
                <p className="text-white"><strong className="text-white">Como a Nexus entrega:</strong> {service.delivery}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mt-16 py-16 bg-nexus-blue text-white rounded-lg shadow-inner px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-nexus-gold mb-6">Pronto para conectar sua empresa aos resultados que ela merece?</h2>
        <Link href="/contato" className="btn-primary text-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          Fale com um especialista da Nexus!
        </Link>
      </section>
    </div>
  );
}


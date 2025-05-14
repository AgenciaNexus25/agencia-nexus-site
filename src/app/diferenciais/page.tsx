import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Nossos Diferenciais | Agência Nexus",
  description: "Descubra por que a Agência Nexus é a parceira ideal para o marketing digital da sua PME.",
};

const differentials = [
  {
    id: 1,
    title: "Foco Especializado em PMEs com Atendimento Profundamente Personalizado e Consultivo",
    content: "Nós falamos a sua língua. A Agência Nexus nasceu com a missão de atender especificamente às PMEs dos setores de prestação de serviços e vendas. Isso significa que nossas estratégias, ferramentas e comunicação são moldadas para a sua realidade. Diferente de agências maiores, onde sua empresa pode ser apenas mais um número, ou de soluções genéricas que não se aprofundam nas suas particularidades, oferecemos um atendimento próximo, consultivo e verdadeiramente parceiro. Dedicamos tempo para mergulhar no seu negócio, entender suas metas e construir um relacionamento de confiança e colaboração de longo prazo."
  },
  {
    id: 2,
    title: "Metodologia Orientada a Dados e Resultados Comprováveis",
    content: "Na Nexus, intuição e experiência caminham lado a lado com dados concretos. Implementamos uma cultura robusta de análise de dados em todas as nossas ações. Isso nos permite não apenas otimizar campanhas continuamente, mas também demonstrar de forma clara e inequívoca o retorno sobre cada real investido (ROI). Através de relatórios transparentes e dashboards interativos, você terá total visibilidade sobre o desempenho das suas iniciativas de marketing, permitindo que acompanhe o progresso em tempo real e compreenda o impacto direto no seu negócio."
  },
  {
    id: 3,
    title: "Soluções Integradas e Flexíveis, Sob Medida para Você",
    content: "Oferecemos um portfólio completo de serviços de marketing digital, desde SEO e marketing de conteúdo até mídia paga e gestão de CRM. No entanto, nosso grande diferencial é a flexibilidade. Não acreditamos em \"empurrar\" serviços desnecessários. Em vez disso, trabalhamos com você para montar pacotes personalizados que se alinhem precisamente às suas necessidades atuais e ao estágio de maturidade digital do seu negócio. Seja qual for o seu desafio, temos a combinação certa de soluções para você."
  },
  {
    id: 4,
    title: "Capacitação do Cliente: Conhecimento que Fortalece a Parceria (Opcional)",
    content: "Acreditamos que um cliente bem informado é um parceiro mais forte. Para as PMEs que desejam internalizar parte do conhecimento e ter maior autonomia, oferecemos workshops e treinamentos básicos sobre as estratégias de marketing digital que implementamos. Nosso objetivo é promover uma maior compreensão do universo digital, fortalecendo a parceria, a confiança e permitindo que você tome decisões ainda mais estratégicas para o seu negócio no futuro."
  },
  {
    id: 5,
    title: "Processo Ágil e Transparente em Todas as Etapas",
    content: "Valorizamos seu tempo e seu investimento. Por isso, adotamos metodologias ágeis na gestão de todos os nossos projetos. Isso se traduz em entregas mais rápidas, comunicação constante e uma capacidade elevada de adaptação às mudanças do mercado ou às novas demandas do seu negócio. A transparência é um pilar fundamental em todas as nossas interações, desde a clareza na elaboração dos orçamentos e contratos até a execução das campanhas e a subsequente apresentação dos relatórios de performance. Com a Nexus, você sempre saberá o que está acontecendo."
  },
  {
    id: 6,
    title: "Modelo de Precificação Híbrido e Flexível",
    content: "Entendemos que a previsibilidade financeira é crucial para as PMEs. Por isso, a Agência Nexus adota um modelo de precificação híbrido, desenhado para oferecer máxima flexibilidade e alinhamento com as necessidades e modelos de negócio de cada cliente. Podemos combinar elementos de retainer mensal, precificação por projeto e, em casos específicos, componentes baseados em performance, sempre buscando uma proposta de valor justa e transparente."
  }
];

export default function DiferenciaisPage() {
  return (
    <div className="space-y-10 py-12 px-4 sm:px-6 lg:px-8 bg-nexus-white text-nexus-blue">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-nexus-blue mb-6">Por Que Escolher a Agência Nexus?</h1>
        <p className="text-xl text-nexus-blue max-w-4xl mx-auto leading-relaxed">
          No competitivo mercado de marketing digital, a escolha da agência certa pode ser o divisor de águas para o sucesso da sua pequena ou média empresa (PME). Na Agência Nexus, não apenas entendemos os desafios únicos que você enfrenta; nós construímos nossa abordagem em torno de diferenciais estratégicos que entregam valor real, transparência e, o mais importante, resultados que impulsionam seu crescimento.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {differentials.map((item) => (
          <div key={item.id} className="bg-nexus-blue text-nexus-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col border-2 border-nexus-gold/50">
            <h2 className="text-2xl lg:text-3xl font-semibold text-nexus-gold mb-4 min-h-[3em] flex items-center">{item.title}</h2>
            <p className="text-nexus-white text-base leading-relaxed flex-grow">{item.content}</p>
          </div>
        ))}
      </section>

      <section className="text-center mt-16 py-16 bg-nexus-blue text-nexus-white rounded-lg shadow-inner px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-nexus-gold mb-6">A Agência Nexus é mais do que uma fornecedora de serviços;</h2>
        <p className="text-xl text-nexus-white mb-8">somos seus parceiros dedicados na jornada de crescimento digital.</p>
        <Link href="/contato"
          className="btn-primary text-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          Pronto para experienciar a diferença Nexus?
        </Link>
      </section>
    </div>
  );
}


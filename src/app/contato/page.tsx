import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contato | Agência Nexus",
  description: "Entre em contato com a Agência Nexus e descubra como podemos ajudar sua PME a crescer.",
};

// TODO: Implementar um formulário de contato funcional ou integrar com um serviço de terceiros.
const ContactForm = () => {
  return (
    <form className="space-y-6 bg-nexus-white p-8 rounded-lg shadow-2xl border border-nexus-gray/30">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-nexus-blue">Nome Completo</label>
        <input type="text" name="fullName" id="fullName" autoComplete="name" className="mt-1 block w-full px-4 py-3 border border-nexus-gray/50 rounded-md shadow-sm focus:outline-none focus:ring-nexus-gold focus:border-nexus-gold sm:text-base text-nexus-blue" />
      </div>
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-nexus-blue">Nome da Empresa</label>
        <input type="text" name="companyName" id="companyName" autoComplete="organization" className="mt-1 block w-full px-4 py-3 border border-nexus-gray/50 rounded-md shadow-sm focus:outline-none focus:ring-nexus-gold focus:border-nexus-gold sm:text-base text-nexus-blue" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-nexus-blue">Email</label>
        <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full px-4 py-3 border border-nexus-gray/50 rounded-md shadow-sm focus:outline-none focus:ring-nexus-gold focus:border-nexus-gold sm:text-base text-nexus-blue" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-nexus-blue">Telefone/WhatsApp</label>
        <input type="tel" name="phone" id="phone" autoComplete="tel" className="mt-1 block w-full px-4 py-3 border border-nexus-gray/50 rounded-md shadow-sm focus:outline-none focus:ring-nexus-gold focus:border-nexus-gold sm:text-base text-nexus-blue" />
      </div>
      <div>
        <label htmlFor="segment" className="block text-sm font-medium text-nexus-blue">Segmento de Atuação</label>
        <input type="text" name="segment" id="segment" className="mt-1 block w-full px-4 py-3 border border-nexus-gray/50 rounded-md shadow-sm focus:outline-none focus:ring-nexus-gold focus:border-nexus-gold sm:text-base text-nexus-blue" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-nexus-blue">Mensagem/Descreva sua necessidade</label>
        <textarea name="message" id="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-nexus-gray/50 rounded-md shadow-sm focus:outline-none focus:ring-nexus-gold focus:border-nexus-gold sm:text-base text-nexus-blue"></textarea>
      </div>
      <div>
        <button type="submit" className="w-full btn-primary text-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          Enviar Mensagem
        </button>
      </div>
      <p className="text-xs text-nexus-blue text-center">Este formulário é um exemplo. A funcionalidade de envio precisa ser implementada.</p>
    </form>
  );
}

export default function ContatoPage() {
  return (
    <div className="space-y-10 py-12 px-4 sm:px-6 lg:px-8 bg-nexus-white text-nexus-blue">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-nexus-blue mb-6">Entre em Contato com a Agência Nexus</h1>
        <p className="text-xl text-nexus-blue max-w-4xl mx-auto leading-relaxed">
          Estamos prontos para ouvir sobre seus desafios e objetivos de negócio e discutir como as soluções de marketing digital da Agência Nexus podem ajudar sua PME a alcançar novos patamares de sucesso. Conectar sua empresa ao crescimento sustentável é a nossa paixão.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-semibold text-nexus-gold mb-5">Fale Conosco Hoje Mesmo!</h2>
            <p className="text-nexus-blue text-lg leading-relaxed mb-4">
              Você pode entrar em contato conosco de diversas formas. Escolha a mais conveniente para você:
            </p>
          </div>
          <div className="bg-nexus-blue text-nexus-white p-6 rounded-lg shadow-xl border-2 border-nexus-gold/50 transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-nexus-gold mb-2">Email Direto:</h3>
            <p className="text-nexus-white">
              Prefere nos enviar um email? Escreva para:<br />
              <a href="mailto:contato@agencianexus.app.br" className="text-nexus-gold hover:underline font-medium">contato@agencianexus.app.br</a>
            </p>
          </div>
          <div className="bg-nexus-blue text-nexus-white p-6 rounded-lg shadow-xl border-2 border-nexus-gold/50 transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-nexus-gold mb-2">Telefone/WhatsApp:</h3>
            <p className="text-nexus-white">
              Para um contato mais direto, você pode nos ligar ou enviar uma mensagem via WhatsApp para:<br />
              <a href="tel:+550000000000" className="text-nexus-gold hover:underline font-medium">(XX) XXXXX-XXXX</a> 
              <span className="text-sm text-nexus-white/80 block mt-1">(Substituir pelo número real)</span>
            </p>
          </div>
          <div className="bg-nexus-blue text-nexus-white p-6 rounded-lg shadow-xl border-2 border-nexus-gold/50 transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-nexus-gold mb-2">Nosso Modelo de Trabalho Híbrido</h3>
            <p className="text-nexus-white leading-relaxed">
              A Agência Nexus opera em um modelo de trabalho híbrido. Isso significa que temos flexibilidade para atender sua empresa onde quer que ela esteja. Realizamos reuniões produtivas tanto virtualmente, utilizando as melhores ferramentas de comunicação online, quanto presencialmente, especialmente para clientes localizados em [Cidade/Região] ou para encontros estratégicos.
            </p>
          </div>
           <div className="bg-nexus-blue text-nexus-white p-6 rounded-lg shadow-xl border-2 border-nexus-gold/50 transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-nexus-gold mb-2">Conecte-se Conosco nas Redes Sociais</h3>
            <p className="text-nexus-white leading-relaxed">
              Em breve, você também poderá nos encontrar e acompanhar nossas novidades e dicas nas principais redes sociais.
              <br/><span className="text-sm text-nexus-white/80">(Links para LinkedIn, Instagram, etc. serão adicionados aqui)</span>
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl font-semibold text-nexus-gold mb-5 text-center md:text-left">Formulário de Contato Rápido:</h2>
          <ContactForm />
        </div>
      </section>

      <section className="text-center mt-16 py-16 bg-nexus-gold text-nexus-blue rounded-lg shadow-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold mb-6">Não espere mais para transformar o marketing digital da sua empresa.</h2>
        <p className="text-xl mb-8">A Agência Nexus está pronta para ser sua parceira estratégica rumo ao sucesso!</p>
        <Link href="/contato" className="bg-nexus-blue text-nexus-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-opacity-90 transition duration-300 shadow-lg transform hover:scale-105">
          Vamos Conversar!
        </Link>
      </section>
    </div>
  );
}


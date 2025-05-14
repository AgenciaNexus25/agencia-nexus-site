import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Agência Nexus",
  description: "Entre em contato com a Agência Nexus e descubra como podemos ajudar sua PME a crescer.",
};

// TODO: Implementar um formulário de contato funcional ou integrar com um serviço de terceiros.
const ContactForm = () => {
  return (
    <form className="space-y-4 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nome Completo</label>
        <input type="text" name="fullName" id="fullName" autoComplete="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Nome da Empresa</label>
        <input type="text" name="companyName" id="companyName" autoComplete="organization" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone/WhatsApp</label>
        <input type="tel" name="phone" id="phone" autoComplete="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="segment" className="block text-sm font-medium text-gray-700">Segmento de Atuação</label>
        <input type="text" name="segment" id="segment" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem/Descreva sua necessidade</label>
        <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      </div>
      <div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Enviar Mensagem
        </button>
      </div>
      <p className="text-xs text-gray-500 text-center">Este formulário é um exemplo. A funcionalidade de envio precisa ser implementada.</p>
    </form>
  );
}

export default function ContatoPage() {
  return (
    <div className="space-y-10 py-8 px-4 md:px-0">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato com a Agência Nexus</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Estamos prontos para ouvir sobre seus desafios e objetivos de negócio e discutir como as soluções de marketing digital da Agência Nexus podem ajudar sua PME a alcançar novos patamares de sucesso. Conectar sua empresa ao crescimento sustentável é a nossa paixão.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Fale Conosco Hoje Mesmo!</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você pode entrar em contato conosco de diversas formas. Escolha a mais conveniente para você:
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Direto:</h3>
            <p className="text-gray-700">
              Prefere nos enviar um email? Escreva para:<br />
              <a href="mailto:contato@agencianexus.com.br" className="text-indigo-600 hover:underline">contato@agencianexus.com.br</a> 
              <span className="text-sm text-gray-500">(Email exemplo)</span>
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Telefone/WhatsApp:</h3>
            <p className="text-gray-700">
              Para um contato mais direto, você pode nos ligar ou enviar uma mensagem via WhatsApp para:<br />
              <a href="tel:+55XXXXXX-XXXX" className="text-indigo-600 hover:underline">(XX) XXXXX-XXXX</a> 
              <span className="text-sm text-gray-500">(Telefone exemplo)</span>
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nosso Modelo de Trabalho Híbrido</h3>
            <p className="text-gray-700 leading-relaxed">
              A Agência Nexus opera em um modelo de trabalho híbrido. Isso significa que temos flexibilidade para atender sua empresa onde quer que ela esteja. Realizamos reuniões produtivas tanto virtualmente, utilizando as melhores ferramentas de comunicação online, quanto presencialmente, especialmente para clientes localizados em [Cidade/Região de atuação principal, se houver, ou mencionar a flexibilidade para encontros presenciais estratégicos].
            </p>
          </div>
           <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Conecte-se Conosco nas Redes Sociais (Futuro)</h3>
            <p className="text-gray-700 leading-relaxed">
              Em breve, você também poderá nos encontrar e acompanhar nossas novidades e dicas nas principais redes sociais.
              <br/><span className="text-sm text-gray-500">(Placeholder para links do LinkedIn, Instagram, Facebook da Agência Nexus)</span>
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-3 text-center md:text-left">Formulário de Contato Rápido:</h2>
          <ContactForm />
        </div>
      </section>

      <section className="text-center mt-12 py-8 bg-indigo-600 text-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Não espere mais para transformar o marketing digital da sua empresa.</h2>
        <p className="text-xl">A Agência Nexus está pronta para ser sua parceira estratégica rumo ao sucesso!</p>
      </section>
    </div>
  );
}


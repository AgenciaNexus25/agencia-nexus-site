const Footer = () => {
  return (
    <footer className="bg-nexus-gray text-nexus-blue p-6 mt-12 border-t border-gray-300">
      <div className="container mx-auto text-center">
        <p className="mb-1 text-sm text-gray-700">&copy; {new Date().getFullYear()} Agência Nexus. Todos os direitos reservados.</p>
        <p className="text-xs text-nexus-gold">Conectando sua empresa ao sucesso digital.</p>
        {/* Adicionar links de redes sociais aqui no futuro */}
      </div>
    </footer>
  );
};

export default Footer;


import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-nexus-blue text-nexus-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo_nexus_final.png" alt="Agência Nexus Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-nexus-white">Agência Nexus</span>
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-nexus-white hover:text-nexus-gold transition-colors duration-300 font-medium">Home</Link></li>
          <li><Link href="/sobre" className="text-nexus-white hover:text-nexus-gold transition-colors duration-300 font-medium">Sobre Nós</Link></li>
          <li><Link href="/servicos" className="text-nexus-white hover:text-nexus-gold transition-colors duration-300 font-medium">Serviços</Link></li>
          <li><Link href="/diferenciais" className="text-nexus-white hover:text-nexus-gold transition-colors duration-300 font-medium">Diferenciais</Link></li>
          <li><Link href="/contato" className="text-nexus-white hover:text-nexus-gold transition-colors duration-300 font-medium">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


import React from 'react';
import { Toaster } from 'react-hot-toast';
import OrderForm from './components/OrderForm';
import { Phone, Donut } from 'lucide-react';
import Logo from './components/Assets/Images/Logo.png';

function App() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Toaster position="top-center" />
      
      {/* Header with Melted Chocolate Effect */}
      <div className="relative">
        <header className="bg-gradient-to-b from-brown-900 to-brown-700 text-white py-6 pb-12">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center gap-2">
              <Donut className="w-6 h-6 text-pink-300" />
              <h1 className="text-2xl font-bold">Flor de Nata Rosquinhas</h1>
            </div>
          </div>
        </header>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ transform: 'translateY(100%)' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[120px]">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-brown-700"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 mt-16">
        <div className="max-w-2xl mx-auto">
          {/* Logo Hero Section */}
          <div className="text-center mb-10">
            <img
              src={Logo}
              alt="Logo Flor de Nata"
              className="w-56 h-56 mx-auto mb-8"
            />
            <p className="text-lg text-brown-800 bg-pink-100 p-4 rounded-lg shadow-sm">
              Encomendas feitas mediante pagamento de 50% do valor total do pedido.
            </p>
          </div>

          {/* Order Form */}
          <OrderForm />

          {/* WhatsApp Direct Contact */}
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/5531991994791"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition shadow-md">
              <Phone className="mr-2" />
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </main>

      {/* Footer with Wavy Pink Effect */}
      <div className="relative mt-20">
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ transform: 'translateY(-100%)' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[120px]" style={{ transform: 'rotate(180deg)' }}>
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-pink-400"
            ></path>
          </svg>
        </div>
        <footer className="bg-gradient-to-b from-pink-400 to-pink-500 text-white py-2">
          <div className="container mx-auto px-4 text-center relative z-10">
            <p className="text-lg">© 2025 Flor de Nata Rosquinhas. Todos os direitos reservados.</p>
          </div>
        </footer>
        <div className="bg-black py-2 text-center text-xs">
          <p className="text-gray-500">
            Desenvolvido por:{' '}
            <a href="https://www.linkedin.com/in/aiexxplorer/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
              Wagner Rafael
            </a>{' '}
            |{' '}
            <a href="https://www.github.com/aiexxplorer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
              AIExxplorer
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
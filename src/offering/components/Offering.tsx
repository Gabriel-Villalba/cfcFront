import React from 'react';
import { CreditCard, Banknote } from 'lucide-react';

const Offering: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Ofrenda Online</h2>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center">
            <CreditCard className="mr-2 text-blue-600" />
            Mercado Pago
          </h3>
          <p className="mb-4">Realiza tu ofrenda de manera segura a través de Mercado Pago.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 w-full md:w-auto">
            Donar con Mercado Pago
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center">
            <Banknote className="mr-2 text-blue-600" />
            Transferencia Bancaria
          </h3>
          <p className="mb-4">También puedes realizar tu ofrenda mediante transferencia bancaria:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Banco:Bank</li>
            <li>Titular: CFC Iglesia</li>
            <li>CBU: 0000000000000000000000</li>
            <li>Alias: CFC.IGLESIA.OFRENDA</li>
          </ul>
          <p className="text-sm text-gray-600">
            Por favor, incluye tu nombre y "ofrenda" en la descripción de la transferencia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offering;
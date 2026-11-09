'use client';

import { useState } from 'react';
import { CustomButton } from '../../components/CustomButton';
import Link from 'next/link';

// Demonstra o compartilhamento de estado e eventos com o botão reutilizável.
export default function Page() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Aguardando ação...');

  // Simula uma operação controlada pelo componente pai.
  const handleSave = async () => {
    setLoading(true);
    setMessage('Salvando informações...');

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setMessage('Informações salvas com sucesso!');
  };

  // Executa a ação de cancelamento solicitada pelo filho.
  const handleCancel = () => {
    setMessage('Operação cancelada.');
  };

  return (
    <main className="example-page">

      <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-md font-medium text-gray-600 hover:text-black transition-colors mb-6"
        >
        ← Ir para a Home
      </Link>

      <h1>Exemplo CustomButton</h1>

      <p role="status" aria-live="polite">
        {message}
      </p>

      <div className="example-page__actions">

        <CustomButton
          label={loading ? 'Salvando...' : 'Salvar'}
          variant="primary"
          size="large"
          disabled={loading}
          onClick={handleSave}
        />

        <CustomButton
          label="Cancelar"
          variant="secondary"
          onClick={handleCancel}
        />

        <CustomButton
          label="Excluir"
          variant="danger"
          size="small"
          onClick={() => setMessage('Solicitação de exclusão enviada.')}
        />

        <CustomButton
          label="Continuar"
          variant="inverted"
          size="large"
          onClick={() => setMessage('Continuando...')}
        />

        <CustomButton
          as="a"
          href="/sobre"
          label="Conheça nossa empresa"
          variant="primary"
        />

      </div>
    </main>
  );
}
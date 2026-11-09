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

      {/* Botão primário com texto e ícone. */}
      <CustomButton
        label={loading ? 'Salvando...' : 'Salvar'}
        icon={<span aria-hidden="true">✓</span>}
        variant="primary"
        size="large"
        disabled={loading}
        onClick={handleSave}
        aria-label="Salvar informações"
        aria-description="Salva as informações do formulário"
      />

      {/* Botão secundário somente com texto. */}
      <CustomButton
        label="Cancelar"
        variant="secondary"
        size="default"
        onClick={handleCancel}
      />

      {/* Botão de ação destrutiva. */}
      <CustomButton
        label="Excluir"
        variant="danger"
        size="small"
        onClick={() => setMessage('Solicitação de exclusão enviada.')}
      />

      {/* Botão invertido. */}
      <CustomButton
        label="Continuar"
        variant="inverted"
        size="large"
        onClick={() => setMessage('Continuando...')}
      />

      {/* Elemento de navegação utilizando a apresentação de botão. */}
      <CustomButton
        as="a"
        href="/sobre"
        label="Conheça nossa empresa"
        variant="primary"
        size="default"
        target="_self"
      />
    </main>
  );
}
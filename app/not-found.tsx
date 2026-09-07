import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Página Não Encontrada</h2>
      <p className="text-gray-500 mb-8 max-w-sm">
        Ops, a página que você está procurando não existe!
      </p>
      
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
      >
        Ir para a Home
      </Link>
    </div>
  );
}

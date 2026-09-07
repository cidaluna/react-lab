import { Counter } from "@/components/Counter";
import Link from "next/link";

const Page = () => {
  
  return (
    <div className="p-6 flex flex-col gap-4 items-start">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-md font-medium text-gray-600 hover:text-black transition-colors mb-6"
      >
        ← Ir para a Home
      </Link>
      <h1 className="text-2xl">Página nível 1</h1>
      <Counter></Counter>      
    </div>
  )
};

export default Page;

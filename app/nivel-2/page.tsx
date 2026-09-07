import { CounterGlobal } from "@/components/CounterGlobal";
import { ValueCounterGlobal } from "@/components/ValueCounterGlobal";
import Link from "next/link";

const Page = () => (
  <div>
    <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-md font-medium text-gray-600 hover:text-black transition-colors mb-6"
      >
        ← Ir para a Home
      </Link>
    <h1 className="text-2xl">Página nível 2</h1>
    <CounterGlobal />
    <ValueCounterGlobal />
  </div>
  );

export default Page;

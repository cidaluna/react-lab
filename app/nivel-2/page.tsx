import { CounterGlobal } from "@/components/CounterGlobal";
import { ValueCounterGlobal } from "@/components/ValueCounterGlobal";

const Page = () => (
  <div>
    <h1 className="text-2xl">Página nível 2</h1>
    <CounterGlobal />
    <ValueCounterGlobal />
  </div>
  );

export default Page;

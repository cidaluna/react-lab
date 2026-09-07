import Link from "next/link";

const Page = () => (
   <div className="p-6 flex flex-col gap-4 items-start">
    <Link 
      href="/" 
      className="inline-flex items-center gap-2 text-md font-medium text-gray-600 hover:text-black transition-colors mb-6"
    >
      ← Ir para a Home
    </Link>
    <Link className="underline" href="/nivel-0/cida">Link Page Cida</Link>
  </div>
);

export default Page;

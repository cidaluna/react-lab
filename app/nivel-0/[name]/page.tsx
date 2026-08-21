// export default function Page() {
//   return (
//     <div>Page</div>
//   );
// }

import {Hobbies} from '@/components/Hobbies';
import {CustomImage} from '@/components/CustomImage';
import {ClientName} from '@/components/ClientName';
import Link from 'next/link';

type PageProps = {
  params: Promise<{
    name: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { name } = await params;

  return (
    <div>
      <ClientName name={name} age={39} birthDateFake={new Date(1987, 7, 29)} />
      <Hobbies />
      Gosto de:
      <CustomImage />
      <Link className="underline" href="/nivel-0">Voltar</Link>
    </div>
  );
};

export default Page;

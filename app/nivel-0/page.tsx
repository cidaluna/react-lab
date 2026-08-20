// export default function Page() {
//   return (
//     <div>Page</div>
//   );
// }

import {ClientName} from '@/components/ClientName';

const Page = () => (
  <div>
    <ClientName name={'Cida'} age={39} birthDateFake={new Date(1987, 7, 29)} />
  </div>
);

export default Page;

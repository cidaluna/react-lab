// export default function Page() {
//   return (
//     <div>Page</div>
//   );
// }

import {ClientName} from '@/components/ClientName';

const Page = () => (
  <div>
    <ClientName name={'Cida'} age={39} />
  </div>
);

export default Page;

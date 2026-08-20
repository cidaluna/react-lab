// export default function Page() {
//   return (
//     <div>Page</div>
//   );
// }

import {ClientName} from '@/components/ClientName';
import {Hobbies} from '@/components/Hobbies';

const Page = () => (
  <div>
    <ClientName name={'Cida'} age={39} birthDateFake={new Date(1987, 7, 29)} />
    <Hobbies />
  </div>
);

export default Page;

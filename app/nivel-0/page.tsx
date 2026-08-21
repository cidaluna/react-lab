// export default function Page() {
//   return (
//     <div>Page</div>
//   );
// }

import {ClientName} from '@/components/ClientName';
import {Hobbies} from '@/components/Hobbies';
import {CustomImage} from '@/components/CustomImage';

const Page = () => (
  <div>
    <ClientName name={'Cida'} age={39} birthDateFake={new Date(1987, 7, 29)} />
    <Hobbies />
    Gosto de:
    <CustomImage />
  </div>
);

export default Page;

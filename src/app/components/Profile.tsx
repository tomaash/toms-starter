import * as React from 'react'
import { observer } from 'mobx-react'
import { Nav } from 'app/components/Nav'
import { Foo } from 'app/components/Foo';

export const Profile = observer(({ profileId }: { profileId: string }) =>
  <div>
    <Nav />
    <h3 className='text-red'>Profile of: {profileId}</h3>
    <Foo />
  </div>
);


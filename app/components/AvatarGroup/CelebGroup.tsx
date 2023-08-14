import { memo } from 'react';
import dynamic from 'next/dynamic';

import { Celeb } from '@prisma/client';

const CelebComponent = dynamic(
  () => import('@/components/Avatar/CelebComponent'),
);

type CelebGroupProps = {
  list: Array<Celeb>;
  max?: number;
  className?: string;
};

const CelebGroup = ({ list, max = 5, className = '' }: CelebGroupProps) => (
  <div className={`avatar-group -space-x-2 ${className}`}>
    {list.slice(0, max).map((celeb) => (
      <CelebComponent {...celeb} key={celeb.id} />
    ))}
  </div>
);

export default memo(CelebGroup);

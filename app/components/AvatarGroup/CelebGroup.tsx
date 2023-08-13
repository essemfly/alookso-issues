import { memo } from 'react';

import dynamic from 'next/dynamic';

import type { CelebInfo } from '@/types/issues/celeb';

const Celeb = dynamic(() => import('@/components/Avatar/CelebComponent'));

type CelebGroupProps = {
  list: Array<CelebInfo>;
  max?: number;
  className?: string;
};

const CelebGroup = ({ list, max = 5, className = '' }: CelebGroupProps) => (
  <div className={`avatar-group -space-x-2 ${className}`}>
    {list.slice(0, max).map((celeb) => (
      <Celeb {...celeb} key={celeb.id} />
    ))}
  </div>
);

export default memo(CelebGroup);

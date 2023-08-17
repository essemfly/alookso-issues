import { memo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Celeb } from '@prisma/client';
import { Avatar, Divider, Tooltip } from 'antd';

type CelebGroupProps = {
  list: Array<Celeb>;
  max?: number;
  className?: string;
};

const CelebGroup = ({ list, max = 5, className = '' }: CelebGroupProps) => (
  <Avatar.Group maxCount={2}>
    {list.slice(0, max).map((celeb) => (
      <Avatar src={celeb.avatar || '/images/Avatar.png'} key={celeb.id} />
    ))}
  </Avatar.Group>
);

export default memo(CelebGroup);

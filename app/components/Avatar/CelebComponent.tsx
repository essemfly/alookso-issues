import { memo, useState } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';


const Svg = dynamic(() => import('@/components/Svg/Svg'));
import { CelebInfo } from '@/types/issues/celeb';

type CelebProps = CelebInfo;

const CelebComponent = ({ avatar, name, description }: CelebProps) => {
  const [isError, setIsError] = useState(false);
  return (
    <div className="avatar border-0">
      {isError || !avatar ? (
        <Svg
          path="icons-icon-solid-user"
          className="absolute inset-0 h-[18px] w-[18px]"
        />
      ) : null}
      {avatar && !isError ? (
        <Image
          width={25}
          height={25}
          alt={name}
          src={avatar}
          priority
          className="object-cover"
          onLoadingComplete={(result) => {
            if (result.naturalWidth === 0) {
              setIsError(true);
            }
          }}
          onError={() => setIsError(true)}
        />
      ) : null}
    </div>
  );
};

export default memo(CelebComponent);
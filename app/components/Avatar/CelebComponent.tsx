import { memo, useState } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Svg = dynamic(() => import('@/components/Svg/Svg'));

interface CelebComponentProps {
  name: string;
  avatar: string | null;
  description?: string | null;
  style?: React.CSSProperties;
}

const CelebComponent = ({ avatar, name, style }: CelebComponentProps) => {
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
          width={40}
          height={40}
          alt={name}
          src={avatar}
          priority
          className="object-cover"
          style={{...style, borderRadius: '50%', height: '40px'}}
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

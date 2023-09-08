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
  console.log("avatar", avatar)
  return (
    <div className="avatar border-0">
      <Image
        width={40}
        height={40}
        alt={name}
        src={avatar ? isError ? '/images/Avatar.png' : avatar : '/images/Avatar.png'}
        priority
        className="object-cover"
        style={{ ...style, borderRadius: '50%', height: '40px' }}
        onLoadingComplete={(result) => {
          if (result.naturalWidth === 0) {
            setIsError(true);
          }
        }}
        onError={() => setIsError(true)}
      />
    </div>
  );
};

export default memo(CelebComponent);

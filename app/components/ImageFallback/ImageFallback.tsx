import { useState } from 'react';

import Image, { ImageProps } from 'next/image';

type ImageFallbackProps = ImageProps & {
  fallbackSrc?: string;
};

const 
ImageFallback = ({
  src,
  fallbackSrc = '/images/union-black.svg',
  ...rest
}: ImageFallbackProps) => {
  const [isError, setIsError] = useState(false);

  return (
    <Image
      {...rest}
      style={{
        ...rest.style,
        ...(isError ? { width: '100%', height: '100%' } : {}),
        objectFit: isError ? 'contain' : 'cover',
      }}
      alt={rest.alt}
      width={0}
      height={0}
      src={isError ? fallbackSrc : src}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          setIsError(true);
        }
      }}
      onError={() => {
        setIsError(true);
      }}
    />
  );
};

export default ImageFallback;

import { ImageLoader } from 'next/image';

const myImageLoader: ImageLoader = ({ src, width, quality }) => {
  return src;
};

export default myImageLoader;

import Head from 'next/head';
import React from 'react';

interface HeadMetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const HeadMeta: React.FC<HeadMetaProps> = ({
  title,
  description,
  image,
  url,
}) => {
  const defaultTexts = {
    title: '멜랑콜리! 이슈',
    description:
      '전문가 및 관계자의 이야기로 들어보는 여러 사회 이슈들을 보는 새로운 방법 ',
    url: 'https://issues.alookso.com',
  };
  return (
    <Head>
      {/* 기본 메타 태그 */}
      <title>{title || defaultTexts.title}</title>
      <meta
        name="description"
        content={description || defaultTexts.description}
      />

      {/* 오픈 그래프 (Open Graph) 메타 태그 */}
      <meta property="og:title" content={title || defaultTexts.title} />
      <meta
        property="og:description"
        content={description || defaultTexts.description}
      />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || defaultTexts.url} />

      {/* 트위터 카드 메타 태그 */}
      <meta name="twitter:title" content={title || defaultTexts.title} />
      <meta
        name="twitter:description"
        content={description || defaultTexts.description}
      />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
};

export default HeadMeta;

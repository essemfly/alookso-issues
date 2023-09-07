import { memo } from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
import { Card as AntdCard } from 'antd';

import { IssueWithCelebs } from '@/models/issue.server';
import ImageFallback from '@/components/ImageFallback/ImageFallback';
import CelebGroup from '@/components/AvatarGroup/CelebGroup';

const { Meta } = AntdCard;
register('ko', koLocale);

type CardProps = IssueWithCelebs;

const Card = ({
  id,
  slug,
  title,
  description,
  updatedAt,
  celebs,
  coverImage,
}: CardProps) => {
  const [componentUpdatedAt, setComponentUpdatedAt] = useState('방금');

  useEffect(() => {
    setComponentUpdatedAt(format(updatedAt, 'ko'));
  }, []);

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-md border shadow-md">
      <Link
        className="group inline-block w-full bg-contain"
        href={`/issues/${slug}`}
      >
        <div className="relative">
          <AntdCard
            style={{ border: '1px solid #DFDFDF' }}
            hoverable
            cover={
              <div>
                <ImageFallback
                  className="image-fallback-fill"
                  alt={title}
                  src={
                    coverImage ??
                    'https://i.namu.wiki/i/h6H17qjR7-_eLCo9gYWzPLc8oi4Kx1CbL2PaC1mVEm9F97f6_02_s22DtkIBdkFgGJErF3DFVHHMQwVtrfGhYQ.webp'
                  }
                  fill
                  priority
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 5,
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 21.35%, rgba(0, 0, 0, 0) 34.9%)',
                  }}
                ></div>
                <span
                  className="text-white ㅗp-1 absolute top-2 left-2 font-extralight text-sm"
                  style={{
                    position: 'absolute',
                    top: 0,
                    color: 'white',
                    fontSize: '14px',
                    letterSpacing: '-0.005em',
                    margin: '8px',
                    zIndex: 10,
                  }}
                >
                  {componentUpdatedAt} 업데이트
                </span>
              </div>
            }
          >
            <Meta
              title={title}
              description={
                <div
                  style={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    display: 'flex',
                  }}
                >
                  <CelebGroup list={celebs} />
                  <span style={{ marginLeft: '0.5rem' }}>{description}</span>
                </div>
              }
            />
          </AntdCard>
        </div>
      </Link>
    </div>
  );
};

export default memo(Card);

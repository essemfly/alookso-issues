import { memo } from 'react';
import Link from 'next/link';
import { IssueWithCelebs } from '@/models/issue.server';

import ImageFallback from '@/components/ImageFallback/ImageFallback';
import CelebGroup from '@/components/AvatarGroup/CelebGroup';
import { Card as AntdCard } from 'antd';

const { Meta } = AntdCard;

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
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-md border shadow-md">
      <Link
        className="group inline-block w-full bg-contain"
        href={`/issues/${slug}`}
      >
        <div className="relative h-52 w-full">
          <AntdCard
            hoverable
            cover={
              <>
                <ImageFallback
                  className="h-64 w-full object-cover"
                  alt={title}
                  src={
                    coverImage ??
                    'https://i.namu.wiki/i/h6H17qjR7-_eLCo9gYWzPLc8oi4Kx1CbL2PaC1mVEm9F97f6_02_s22DtkIBdkFgGJErF3DFVHHMQwVtrfGhYQ.webp'
                  }
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 21.35%, rgba(0, 0, 0, 0) 34.9%)',
                    position: 'relative',
                    width: '100',
                    height: '100',
                  }}
                  priority
                  // fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="text-white p-1 absolute top-2 left-2 font-extralight text-sm" style={{position: 'absolute', top: 0}}>
                  {JSON.parse(JSON.stringify(updatedAt))}
                </span>
              </>
            }
          >
            <Meta title={title} description={description} />
          </AntdCard>
        </div>
      </Link>
    </div>
  );
};

export default memo(Card);

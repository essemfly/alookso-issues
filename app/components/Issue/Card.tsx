import { memo } from 'react';
import Link from 'next/link';
import { IssueWithCelebs } from '@/models/issue.server';

import ImageFallback from '@/components/ImageFallback/ImageFallback';
import CelebGroup from '@/components/AvatarGroup/CelebGroup';

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
            }}
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="text-white p-1 absolute top-2 left-2 font-extralight text-sm">
            {JSON.parse(JSON.stringify(updatedAt))}
          </span>
          <span></span>
        </div>
        <div className="bg-white p-4">
          <div className="mb-2 line-clamp-1 break-all text-xl font-semibold text-gray-900 underline-offset-1 group-hover:underline">
            {title}
          </div>
          <div className="flex" style={{ alignItems: 'center' }}>
            <CelebGroup list={celebs} className="inline-block" />
            <p className="line-clamp-2 inline-block break-all text-md font-semibold text-gray-500 ml-2">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default memo(Card);

import { Issue, Rating } from '@prisma/client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { UpsertRatingInput } from '@/models/rating.server';

interface RatingProps {
  issue: Issue;
  userInfo?: Rating | null;
}

const RatingComponent: React.FC<RatingProps> = ({ issue, userInfo }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [selectedRating, setSelectedRating] = useState<
    'happy' | 'neutral' | 'sad' | null
  >(null);

  const handleRatingSelected = async (rating: 'happy' | 'neutral' | 'sad') => {
    if (session == null) {
      alert('로그인이 필요합니다.');
      router.push('/login');
      return;
    }
    setSelectedRating(rating);

  //   let updateBody: UpsertRatingInput = {
  //     userId: userInfo.userId,
  //     issueId: issue.id,
  //     rating:
  //       selectedRating === 'happy' ? 1 : selectedRating === 'neutral' ? 0 : -1,
  //   };
  //   const response = await fetch(`/api/issues/${issue.slug}/ratings`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(updateBody),
  //   });
  //   if (response.status !== 200){
  //     alert('Update error occured');
  //     console.log('error', response.status, response.statusText);
  //   }
  };

  return (
    <div className="rating-component items-center">
      <div className="mb-2 rating-header">
        <h2 className="text-center mb-2">이 콘텐츠가 도움이 됐나요?</h2>
      </div>
      <div className="flex items-center rating-icons">
        <div
          className={`cursor-pointer mx-2 ${
            selectedRating === 'happy' ? 'text-green-500' : ''
          }`}
          onClick={() => handleRatingSelected('happy')}
        >
          <div className="items-center">
            <span role="img" aria-label="happy" className="text-4xl">
              😊
            </span>
            <div>도움 됐어요</div>
          </div>
        </div>
        <div
          className={`cursor-pointer mx-2 ${
            selectedRating === 'neutral' ? 'text-yellow-500' : ''
          }`}
          onClick={() => handleRatingSelected('neutral')}
        >
          <div className="items-center">
            <span role="img" aria-label="neutral" className="text-4xl">
              😐
            </span>
            <div>그냥 그래요</div>
          </div>
        </div>
        <div
          className={`cursor-pointer mx-2 ${
            selectedRating === 'sad' ? 'text-red-500' : ''
          }`}
          onClick={() => handleRatingSelected('sad')}
        >
          <div className="items-center">
            <span role="img" aria-label="sad" className="text-4xl">
              😒
            </span>
            <div>별로에요</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
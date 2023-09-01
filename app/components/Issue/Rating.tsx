import { Issue, Rating, User } from '@prisma/client';
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
  const { data } = useSession();
  const [selectedRating, setSelectedRating] = useState<number | null>(
    userInfo?.rating === null ? null : userInfo?.rating!!,
  );

  const handleRatingSelected = async (rating: number) => {
    if (data && data.user == null) {
      alert('로그인이 필요합니다.');
      router.push('/login');
      return;
    }

    if (selectedRating === rating) {
      setSelectedRating(null);
    } else {
      setSelectedRating(rating);
    }

    let user = data!.user as User;
    let updateBody: UpsertRatingInput = {
      userId: user.id,
      issueId: issue.id,
      rating: rating,
    };
    const response = await fetch(`/api/issues/${issue.slug}/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateBody),
    });
    if (response.status !== 200) {
      alert('Update error occured');
      console.log('error', response.status, response.statusText);
    }
  };

  return (
    <div className="rating-component items-center">
      <div className="mb-2 rating-header">
        <h2 className="text-center mb-2">이 콘텐츠가 도움이 됐나요?</h2>
      </div>
      <div className="flex items-center rating-icons">
        <div
          className={`cursor-pointer mx-2 ${
            selectedRating !== null && selectedRating !== 1
              ? 'rating-unselected'
              : ''
          }`}
          onClick={() => handleRatingSelected(1)}
        >
          <div className="items-center">
            <span role="img" aria-label="happy" className="text-4xl">
              😊
            </span>
            <div className={`${selectedRating === 1 ? 'rating-selected' : ''}`}>
              도움 됐어요
            </div>
          </div>
        </div>
        <div
          className={`cursor-pointer mx-2 ${
            selectedRating !== null && selectedRating !== 0
              ? 'rating-unselected'
              : ''
          }`}
          onClick={() => handleRatingSelected(0)}
        >
          <div className="items-center">
            <span role="img" aria-label="neutral" className="text-4xl">
              😐
            </span>
            <div className={`${selectedRating === 0 ? 'rating-selected' : ''}`}>
              그냥 그래요
            </div>
          </div>
        </div>
        <div
          className={`cursor-pointer mx-2  ${
            selectedRating !== null && selectedRating !== -1
              ? 'rating-unselected'
              : ''
          }`}
          onClick={() => handleRatingSelected(-1)}
        >
          <div className="items-center">
            <span role="img" aria-label="sad" className="text-4xl">
              😒
            </span>
            <div
              className={`${selectedRating === -1 ? 'rating-selected' : ''}`}
            >
              별로에요
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;

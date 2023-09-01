import { Issue, Rating, User } from '@prisma/client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { UpsertRatingInput } from '@/models/rating.server';

interface RecommendProps {
  writings: string[];
}

const RecommendComponent: React.FC<RecommendProps> = ({ writings }) => {
  return (
    <div className="rating-component items-center">
      <div className="mb-2 rating-header">
        <h2 className="text-center mb-2">
          함께 읽으면 좋을 글들
        </h2>
      </div>
      <div className="flex p-4 space-x-3 overflow-hidden bg-white shadow"></div>
    </div>
  );
};

export default RecommendComponent;

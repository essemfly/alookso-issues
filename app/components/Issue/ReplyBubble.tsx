import { Issue, IssueReply, Rating, User } from '@prisma/client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { UpsertRatingInput } from '@/models/rating.server';

interface ReplyBubbleProps {
  reply: IssueReply;
}

const ReplyBubble: React.FC<ReplyBubbleProps> = ({ reply }) => {
  return (
    <div className="rating-component items-center">
      <div className="flex p-4 space-x-3 overflow-hidden bg-white shadow">
        {reply.content}
      </div>
    </div>
  );
};

export default ReplyBubble;

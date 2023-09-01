import { Issue, IssueReply, Rating, User } from '@prisma/client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { UpsertRatingInput } from '@/models/rating.server';
import ReplyWriterComponent from './ReplyWriter';
import ReplyBubble from './ReplyBubble';

interface ReplyProps {
  issueId: number;
  replys: IssueReply[];
}

const ReplyComponent: React.FC<ReplyProps> = ({ issueId, replys }) => {
  return (
    <div className="rating-component items-center">
      <div className="mb-2 rating-header" style={{ display: 'flex' }}>
        <h2 className="mb-2" style={{ justifyContent: 'start' }}>
          {replys ? replys.length : 0}개의 댓글
        </h2>
      </div>
      <ReplyWriterComponent issueId={issueId} replys={replys} />
      <div className="flex p-4 space-x-3 overflow-hidden bg-white shadow">
        {replys
          ? replys.map((reply) => {
              return <ReplyBubble key={reply.id} reply={reply} />;
            })
          : null}
      </div>
    </div>
  );
};

export default ReplyComponent;

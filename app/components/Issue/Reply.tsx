import { Issue, IssueReply, Rating, User } from '@prisma/client';
import React, { useState } from 'react';
import ReplyWriterComponent from './ReplyWriter';
import ReplyBubble from './ReplyBubble';

interface ReplyProps {
  issueId: number;
  replys: IssueReply[];
}

const ReplyComponent: React.FC<ReplyProps> = ({ issueId, replys }) => {
  const [replyStates, setReplyStates] = useState<IssueReply[]>(replys);

  return (
    <div className="rating-component items-center">
      <div className="mb-2 rating-header" style={{ display: 'flex' }}>
        <h2 className="mb-2" style={{ justifyContent: 'start' }}>
          {replyStates ? replyStates.length : 0}개의 댓글
        </h2>
      </div>
      <ReplyWriterComponent
        issueId={issueId}
        setReplys={(updatedReplys) => setReplyStates(updatedReplys)}
      />
      <div
        className="flex p-4 space-x-3 bg-white shadow"
        style={{ flexDirection: 'column', overflow: 'scroll' }}
      >
        {replyStates
          ? replyStates.map((reply) => {
              return <ReplyBubble key={reply.id} reply={reply} />;
            })
          : null}
      </div>
    </div>
  );
};

export default ReplyComponent;

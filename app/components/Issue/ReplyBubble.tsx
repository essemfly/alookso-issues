import { IssueReply } from '@prisma/client';
import React from 'react';
import { Avatar } from 'antd';
import { Comment } from '@ant-design/compatible';

interface ReplyBubbleProps {
  reply: IssueReply;
}

const ReplyBubble: React.FC<ReplyBubbleProps> = ({ reply }) => {
  return (
    <Comment
      author={reply.userId}
      content={reply.content}
      datetime={reply.createdAt.toString().substring(0, 10)}
      style={{ textAlign: 'left', width: '100%' }}
      avatar={<Avatar src="/images/Avatar.png" alt={reply.userId} />}
    />
  );
};

export default ReplyBubble;

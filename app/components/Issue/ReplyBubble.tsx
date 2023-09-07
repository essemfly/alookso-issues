import { IssueReply } from '@prisma/client';
import React from 'react';
import { Avatar } from 'antd';
import { Comment } from '@ant-design/compatible';

interface ReplyBubbleProps {
  reply: IssueReply;
}

const ReplyBubble: React.FC<ReplyBubbleProps> = ({ reply }) => {
  const userIdLength = 6;
  return (
    <Comment
      author={reply.userId.substring(0, userIdLength)}
      content={reply.content}
      datetime={reply.createdAt.toString().substring(0, 19).replace('T', ' ')}
      style={{ textAlign: 'left', width: '100%' }}
      avatar={<Avatar src="/images/Avatar.png" alt={reply.userId} />}
    />
  );
};

export default ReplyBubble;

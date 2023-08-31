import { IssueBlockWithMessages } from '@/models/issue.server';
import React from 'react';
import ChatBubble from './ChatBubble';
import { ViewerEditor } from '../LexicalEditor/App';
import { MessageLike } from '@prisma/client';

interface IssueDetailProps {
  block: IssueBlockWithMessages;
  userInfo?: MessageLike[] | null;
}

const TextBlockSection: React.FC<IssueDetailProps> = ({ block }) => {
  return (
    <section className="bg-white pt-2">
      <div className="mb-12 border-transparent bg-white px-4 pb-2 pt-2 md:px-0 md:pb-0 lg:border-x lg:px-12">
        <ViewerEditor content={block.content} />
      </div>
    </section>
  );
};

const MessageBlockSection: React.FC<IssueDetailProps> = ({
  block,
  userInfo,
}) => {
  return (
    <section className="bg-white pt-2">
      <div className="mb-12 border-transparent bg-white px-4 pb-2 pt-2 md:px-0 md:pb-0 lg:border-x lg:px-12">
        {block.messages?.map((message) => {
          let myMessageLike = userInfo?.filter(
            (like) => like.messageId === message.id,
          );
          if (myMessageLike && myMessageLike.length > 0) {
            return (
              <ChatBubble
                key={message.id}
                message={message}
                userInfo={myMessageLike[0]}
              />
            );
          }

          return <ChatBubble key={message.id} message={message} />;
        })}
      </div>
    </section>
  );
};

export { TextBlockSection, MessageBlockSection };

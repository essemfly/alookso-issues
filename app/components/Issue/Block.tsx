import { IssueBlockWithMessages } from '@/models/issue.server';
import React from 'react';
import ChatBubble from './ChatBubble';
import { Tabs } from 'antd';
import { ViewerEditor } from '../LexicalEditor/App';
import { MessageLike } from '@prisma/client';

interface IssueDetailProps {
  block: IssueBlockWithMessages;
  userInfo?: MessageLike[] | null;
}

const TextBlockSection: React.FC<IssueDetailProps> = ({ block }) => {
  console.log("text block ok!")
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

  const [messages, setMessages] = React.useState(block.messages);
  const items = [
    { label: '오래된순', key: 'latest' },
    { label: '최신순', key: 'newest' },
    { label: '좋아요순', key: 'like' },
  ];

  const handleTabChange = (key: string) => {
    const newMessages = [...block.messages]; // 복사하여 새 배열 생성
    newMessages.sort((a, b) => {
      if (key === 'latest') {
        return a.reportedAt > b.reportedAt ? 1 : -1;
      } else if (key === 'newest') {
        return a.reportedAt < b.reportedAt ? 1 : -1;
      } else{
        return a.likeCount < b.likeCount ? 1 : -1;
      }
    });
    setMessages(newMessages)
  }

  return (
    <section className="bg-white pt-2">
      <div className="mb-12 border-transparent bg-white px-4 pb-2 pt-2 md:px-0 md:pb-0 lg:border-x lg:px-12">
          <Tabs defaultActiveKey="1" items={items} onChange={handleTabChange} />
        {messages?.map((message) => {
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

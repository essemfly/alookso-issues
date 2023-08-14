import { IssueBlockWithMessages } from '@/models/issue.server';
import React from 'react';
import ChatBubble from './ChatBubble';
import { ViewerEditor } from '../LexicalEditor/App';

interface IssueDetailProps {
  block: IssueBlockWithMessages;
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

const MessageBlockSection: React.FC<IssueDetailProps> = ({ block }) => {
  return (
    <section className="bg-white pt-2">
      <div className="mb-12 border-transparent bg-white px-4 pb-2 pt-2 md:px-0 md:pb-0 lg:border-x lg:px-12">
        {block.messages?.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>
    </section>
  );
};

export { TextBlockSection, MessageBlockSection };

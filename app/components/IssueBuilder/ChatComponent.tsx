import { useState } from 'react';
import { List, Avatar } from 'antd';
import ChatInput from './ChatInput';
import { IssueMessage, Bias } from '@prisma/client';
import { IssueMessageWithoutId } from '@/models/issue.server';
import Button from '../LexicalEditor/ui/Button';
import { Celeb } from '@prisma/client';

interface MessageProps {
  celebs: Celeb[];
  messages: IssueMessageWithoutId[];
  setMessages: (messages: IssueMessageWithoutId[]) => void;
}

const ChatComponent = ({ celebs, messages, setMessages }: MessageProps) => {
  const [chatHistory, setChatHistory] = useState<IssueMessageWithoutId[]>(
    messages ? messages : [],
  );

  const handleSendMessage = (
    message: string,
    celeb: Celeb,
    linkName: string,
    linkUrl: string,
    linkDate: Date,
    bias: Bias,
    bgColor: string,
  ) => {
    const newChatHistory = [
      ...chatHistory,
      {
        celebId: celeb.id,
        seq: 0,
        celebName: celeb.name,
        celebDescription: celeb.description,
        celebAvatar: celeb.avatar,
        content: message,
        link: linkUrl,
        linkFrom: linkName,
        backgroundColor: bgColor,
        bias: bias,
        reportedAt: linkDate,
        createdAt: new Date(),
        updatedAt: new Date(),
        isRemoved: false,
        blockId: 0,
        likeCount: 0,
      },
    ];
    setChatHistory(newChatHistory);
    setMessages(newChatHistory);
  };

  const handleRemoveMessage = (idx: number) => {
    const updatedHistory = [...chatHistory];
    updatedHistory.splice(idx, 1);
    setChatHistory(updatedHistory);
    setMessages(updatedHistory);
  };

  return (
    <div>
      <List
        style={{ height: '500px', overflowY: 'auto' }}
        dataSource={chatHistory}
        renderItem={(item, index) => (
          <List.Item
            style={{ backgroundColor: 'white' }}
            key={`${index}-${item.id}`}
            actions={[
              <Button
                key={`${index}-${item.id}`}
                onClick={() => handleRemoveMessage(index)}
              >
                Remove
              </Button>,
            ]}
          >
            {item.celebId && (
              <List.Item.Meta
                avatar={<Avatar src={item.celebAvatar} alt={item.celebName} />}
                title={`${item.celebName} - ${item.celebDescription}`}
                description={item.content}
              />
            )}
            <div style={{ backgroundColor: item.backgroundColor }}>
              <div>{item.backgroundColor}</div>
              <div>{item.bias}</div>
              {item.linkFrom && (
                <div>
                  <strong>{item.linkFrom}</strong> &nbsp;
                  <span>{item.link}</span>
                </div>
              )}
              {item.reportedAt && (
                <div>
                  <strong>날짜:</strong> {item.reportedAt.toString().substring(0, 10)}
                </div>
              )}
            </div>
          </List.Item>
        )}
      />
      <ChatInput onSendMessage={handleSendMessage} celebs={celebs} />
    </div>
  );
};

export default ChatComponent;

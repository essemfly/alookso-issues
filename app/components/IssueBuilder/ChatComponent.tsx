import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import ChatInput from './ChatInput';
import { IssueMessage } from '@/types/issues/body';
import { Bias } from '@/types/issues/body';
import Button from '../LexicalEditor/ui/Button';
import { CelebInfo } from '@/types/issues/celeb';

interface MessageProps {
  celebs: CelebInfo[];
  messages: IssueMessage[];
  setMessages: (messages: IssueMessage[]) => void;
}

const ChatComponent = ({ celebs, messages, setMessages }: MessageProps) => {
  const [chatHistory, setChatHistory] = useState<IssueMessage[]>(
    messages ? messages : [],
  );

  const handleSendMessage = (
    message: string,
    celeb: CelebInfo,
    linkName: string,
    linkUrl: string,
    linkDate: string,
    bias: Bias,
    bgColor: string,
  ) => {
    const newChatHistory = [
      ...chatHistory,
      {
        id: 0,
        celebId: celeb.id,
        seq: 0,
        celebName: celeb.name,
        celebDescription: celeb.description,
        celebAvatar: celeb.avatar['avatar']?.src,
        content: message,
        link: linkUrl,
        linkFrom: linkName,
        backgroundColor: bgColor,
        bias: bias,
        reportedAt: linkDate,
      },
    ];
    setChatHistory(newChatHistory);
    setMessages(newChatHistory);
  };

  const handleRemoveMessage = (idx: number) => {
    setChatHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      updatedHistory.splice(idx, 1);
      return updatedHistory;
    });
  };

  console.log("items", chatHistory)
  return (
    <div>
      <List
        style={{ height: '200px', overflowY: 'auto' }}
        dataSource={chatHistory}
        renderItem={(item, index) => (
          <List.Item
            key={`${index}-${item.seq}`}
            actions={[
              <Button onClick={() => handleRemoveMessage(index)}>
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
            <span>{item.backgroundColor}</span>
            <span>{item.bias}</span>
            <div>{item.reportedAt}</div>
            {item.linkFrom && (
              <div>
                <strong>링크:</strong>
                <a href={item.link}>{item.linkFrom}</a>
              </div>
            )}
            {item.reportedAt && (
              <div>
                <strong>날짜:</strong> {item.reportedAt}
              </div>
            )}
          </List.Item>
        )}
      />
      <ChatInput onSendMessage={handleSendMessage} celebs={celebs} />
    </div>
  );
};

export default ChatComponent;

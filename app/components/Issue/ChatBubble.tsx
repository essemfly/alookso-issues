import React, { useState } from 'react';
import { IssueMessage, Bias } from '@prisma/client';
import CelebComponent from '../Avatar/CelebComponent';
import RatingComponent from './RatingComponent';

interface ChatBubbleProps {
  message: IssueMessage;
}

const ThumbUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 14l8-8 8 8" />
  </svg>
);

const ThumbDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 10l8 8 8-8" />
  </svg>
);



const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  // const [likeCount, setLikeCount] = useState<number>(message.voteCount)
  // const [disLikeCount, setDisLikeCount] = useState<number>(message.downvoteCount)

  const handleLike = (like: boolean) => {
    // if (like) {
    //   setLikeCount(likeCount+1)
    // } else {
    //   setDisLikeCount(disLikeCount+1)
    // }
  }


  const bubbleStyle: React.CSSProperties = {
    backgroundColor: message.backgroundColor,
    maxWidth: '85%',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '20px',
    textAlign: 'left',
  };

  const avatarStyle: React.CSSProperties = {
    borderRadius: '50%',
    marginRight: '10px',
    alignItems: 'center',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '7px',
  };

  const leftAvatar = <div className='flex justify-end' style={avatarStyle}>
        <h3>{message.celebName}</h3>
        <p className="line-clamp-2 inline-block break-all text-md font-semibold text-gray-500 ml-1 mr-2">
          {message.celebDescription}
        </p>
        <CelebComponent name={message.celebName} avatar={message.celebAvatar} description={message.celebDescription}/>
      </div>

  const rightAvatar = <div className='flex' style={avatarStyle}>
        <CelebComponent name={message.celebName} avatar={message.celebAvatar} description={message.celebDescription}/>
        <h3 className="ml-1">{message.celebName}</h3>
        <p className="line-clamp-2 inline-block break-all text-md font-semibold text-gray-500 ml-2">
          {message.celebDescription}
        </p>
      </div>

    // 'right'인 경우 오른쪽으로 쏠리도록 스타일을 추가
  if (message.bias === Bias.RIGHT) {
    bubbleStyle.marginLeft = 'auto';
    avatarStyle.textAlign = 'right';
  }

  // 'left'인 경우 왼쪽으로 쏠리도록 스타일을 추가
  if (message.bias === Bias.LEFT) {
    bubbleStyle.marginRight = 'auto';
    avatarStyle.textAlign = 'left';
  }

  return (
    <>
      {message.bias === Bias.LEFT ? leftAvatar : rightAvatar}
      <div className="chat-bubble font-light" style={bubbleStyle}>
        <div className="chat-content" style={contentStyle}>
          <p>{message.content}</p>
        </div>
        <div className="chat-meta flex items-center">
          <div className="flex items-center mr-2">
            <ThumbUpIcon style={{ color: 'green', marginRight: '5px' }} onClick={() => handleLike(true)}/>
            {/* <span>{likeCount}</span> */}
            <span>3</span>
          </div>
          <div className="flex items-center">
            <ThumbDownIcon style={{ color: 'red', marginRight: '5px' }} onClick={() => handleLike(false)} />
            {/* <span>{disLikeCount}</span> */}
            <span>100</span>
          </div>
          <div
            className="text-sm font-extralight"
            style={{ marginLeft: 'auto' }} // This will align the div to the right
          >
            <a href={message.link}><strong>{message.linkFrom}</strong></a>
            <span className="ml-1">{message.reportedAt}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBubble;

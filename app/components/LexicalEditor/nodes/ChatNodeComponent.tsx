import React, { useState, SVGProps, ReactNode } from 'react';
import { IssueMessage, Bias } from '@prisma/client';
import Image from 'next/image';

interface ChatBubbleProps {
  message: IssueMessage;
}

type SvgProps = SVGProps<SVGSVGElement> & {
  path?: string;
  children?: ReactNode;
};

const Svg = ({ path, children, ...props }: SvgProps) => {
  return (
    <svg
      {...props}
      className={`h-6 w-6 fill-current text-gray-400 ${props.className ?? ''}`}
    >
      {children ?? <use xlinkHref={`/_images/icons/icons.svg#${path}`} />}
    </svg>
  );
};

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

interface CelebComponentProps {
  name: string;
  avatar: string | null;
  description?: string | null;
}


const CelebComponent = ({ avatar, name, description }: CelebComponentProps) => {
  const [isError, setIsError] = useState(false);
  return (
    <div className="avatar border-0">
      {isError || !avatar ? (
        <Svg
          path="icons-icon-solid-user"
          className="absolute inset-0 h-[18px] w-[18px]"
        />
      ) : null}
      {avatar && !isError ? (
        <Image
          width={25}
          height={25}
          alt={name}
          src={avatar}
          priority
          className="object-cover"
          onLoadingComplete={(result) => {
            if (result.naturalWidth === 0) {
              setIsError(true);
            }
          }}
          onError={() => setIsError(true)}
        />
      ) : null}
    </div>
  );
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  // const [likeCount, setLikeCount] = useState<number>(
  //   message.voteCount ? message.voteCount : 0,
  // );
  // const [disLikeCount, setDisLikeCount] = useState<number>(
  //   message.downvoteCount ? message.downvoteCount : 0,
  // );

  // const handleLike = (like: boolean) => {
  //   if (like) {
  //     setLikeCount(likeCount + 1);
  //   } else {
  //     setDisLikeCount(disLikeCount + 1);
  //   }
  // };

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

  const leftAvatar = (
    <div className="flex justify-end" style={avatarStyle}>
      <h3>{message.celebName}</h3>
      <p className="line-clamp-2 inline-block break-all text-md font-semibold text-gray-500 ml-1 mr-2">
        {message.celebDescription}
      </p>
      <CelebComponent
        name={message.celebName}
        description={message.celebDescription}
        avatar={message.celebAvatar}
      />
    </div>
  );

  const rightAvatar = (
    <div className="flex" style={avatarStyle}>
      <CelebComponent
        name={message.celebName}
        avatar={message.celebAvatar}
        description={message.celebDescription}
      />
      <h3 className="ml-1">{message.celebName}</h3>
      <p className="line-clamp-2 inline-block break-all text-md font-semibold text-gray-500 ml-2">
        {message.celebDescription}
      </p>
    </div>
  );

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
          {/* <div className="flex items-center mr-2">
            <ThumbUpIcon
              style={{ color: 'green', marginRight: '5px' }}
              onClick={() => handleLike(true)}
            />
            <span>{likeCount}</span>
          </div>
          <div className="flex items-center">
            <ThumbDownIcon
              style={{ color: 'red', marginRight: '5px' }}
              onClick={() => handleLike(false)}
            />
            <span>{disLikeCount}</span>
          </div> */}
          <div
            className="text-sm font-extralight"
            style={{ marginLeft: 'auto' }} // This will align the div to the right
          >
            <a href={message.link}>
              <strong>{message.linkFrom}</strong>
            </a>
            <span className="ml-1">{message.reportedAt}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBubble;

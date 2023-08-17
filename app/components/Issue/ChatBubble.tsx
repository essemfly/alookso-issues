import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { IssueMessage, Bias, MessageLike } from '@prisma/client';
import CelebComponent from '../Avatar/CelebComponent';
import Image from 'next/image';
import { UpsertLikeInput } from '@/models/likes.server';

interface ChatBubbleProps {
  message: IssueMessage;
  userInfo?: MessageLike | null;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, userInfo }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [likeCount, setLikeCount] = useState<number>(message.likeCount);
  const [disLikeCount, setDisLikeCount] = useState<number>(
    message.dislikeCount,
  );

  const handleLike = async (messageId: number, like: boolean) => {
    if (session == null) {
      alert('로그인이 필요합니다.');
      router.push('/login');
      return;
    }

    setLikeCount(likeCount + (like ? 1 : 0));
    setDisLikeCount(disLikeCount + (like ? 0 : 1));

    // let updateBody: UpsertLikeInput = {
    //   userId: session.user?.name ? session.user?.name : "",
    //   messageId: messageId,
    //   evaluation: like ? 1 : -1,
    // };

    // const response = await fetch(`/api/messages`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(updateBody),
    // });
    // if (response.status !== 200) {
    //   alert('Update error occured');
    //   console.log('error', response.status, response.statusText);
    // }
  };

  const bubbleStyle: React.CSSProperties = {
    backgroundColor: message.backgroundColor,
    maxWidth: '85%',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '10px',
    marginBottom: '20px',
    textAlign: 'left',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0em',
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '21px',
    letterSpacing: '0em',
    textAlign: 'left',
    marginRight: '4px',
    marginBottom: 0,
  };

  const descStyle: React.CSSProperties = {
    fontSize: '13px',
    fontWeight: '400',
    lineHeight: '16px',
    color: '#6B7280',
    marginBottom: 0,
  };

  const avatarStyle: React.CSSProperties = {
    display: 'flex',
    borderRadius: '50%',
    marginRight: '8px',
    alignItems: 'center',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '7px',
  };

  // 나중에 CelebComponent에서 다 처리하게끔 refactoring
  const leftAvatar = (
    <div
      className="flex"
      style={{ ...avatarStyle, justifyContent: 'flex-end' }}
    >
      <h3 style={nameStyle}>{message.celebName}</h3>
      <p
        style={descStyle}
        className="line-clamp-2 inline-block break-all text-md font-semibold text-gray-500 ml-1 mr-2"
      >
        {message.celebDescription}
      </p>
      <CelebComponent
        name={message.celebName}
        avatar={message.celebAvatar}
        description={message.celebDescription}
        style={{ marginLeft: '8px' }}
      />
    </div>
  );

  const rightAvatar = (
    <div className="flex" style={avatarStyle}>
      <CelebComponent
        name={message.celebName}
        avatar={message.celebAvatar}
        description={message.celebDescription}
        style={{ marginRight: '8px' }}
      />
      <h3 style={nameStyle}>{message.celebName}</h3>
      <p
        style={descStyle}
        className="line-clamp-2 inline-block break-all text-md font-semibold text-gray-500 ml-1 mr-2"
      >
        {message.celebDescription}
      </p>
    </div>
  );

  // 'right'인 경우 오른쪽으로 쏠리도록 스타일을 추가
  if (message.bias === Bias.RIGHT) {
    bubbleStyle.marginRight = 'auto';
    avatarStyle.textAlign = 'right';
  }

  // 'left'인 경우 왼쪽으로 쏠리도록 스타일을 추가
  if (message.bias === Bias.LEFT) {
    bubbleStyle.marginLeft = 'auto';
    avatarStyle.textAlign = 'left';
  }

  if (message.bias === Bias.CENTER) {
    bubbleStyle.marginLeft = 'auto';
    avatarStyle.textAlign = 'left';
  }

  return (
    <>
      {message.bias === Bias.RIGHT ? leftAvatar : rightAvatar}
      <div className="chat-bubble font-light" style={bubbleStyle}>
        <div className="chat-content" style={contentStyle}>
          <p>{message.content}</p>
        </div>
        <div
          className="chat-meta items-center"
          style={{ display: 'flex', fontSize: '13px' }}
        >
          <div className="items-center mr-2" style={{ display: 'flex' }}>
            <Image
              alt="thumpup"
              src="/images/icons/thumb_up.svg"
              width={15}
              height={13}
              priority
              onClick={() => handleLike(message.id, true)}
              style={{ marginRight: '4px' }}
            />
            <span style={{ marginRight: '8px' }}>{likeCount}</span>
          </div>
          <div className="flex items-center" style={{ display: 'flex' }}>
            <Image
              alt="thumpup"
              src="/images/icons/thumb_down.svg"
              width={15}
              height={13}
              priority
              onClick={() => handleLike(message.id, false)}
              style={{ marginRight: '4px' }}
            />
            <span style={{ marginRight: '8px' }}>{disLikeCount}</span>
          </div>
          <div
            className="text-sm font-extralight"
            style={{ marginLeft: 'auto' }} // This will align the div to the right
          >
            <a
              href={message.link}
              style={{ marginRight: '4px', color: '#7C3AED' }}
            >
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

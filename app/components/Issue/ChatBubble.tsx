import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Bias, MessageLike, User } from '@prisma/client';
import CelebComponent from '../Avatar/CelebComponent';
import Image from 'next/image';
import { UpsertLikeInput } from '@/models/likes.server';
import { IssueMessageWithoutId } from '@/models/issue.server';

interface ChatBubbleProps {
  message: IssueMessageWithoutId;
  userInfo?: MessageLike | null;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, userInfo }) => {
  const router = useRouter();
  const { data } = useSession();
  const [likeClick, setLikeClick] = useState<boolean>(
    userInfo?.evaluation === 1,
  );
  const [dislikeClick, setDislikeClick] = useState<boolean>(
    userInfo?.evaluation === -1,
  );
  const [likeCount, setLikeCount] = useState<number>(message.likeCount);

  const handleLike = async (messageId: number, like: boolean) => {
    if (!data || data.user == null) {
      alert('로그인이 필요합니다.');
      router.push('/login');
      return;
    }
    if (likeClick) {
      if (like) {
        setLikeCount(likeCount - 1);
        setLikeClick(false);
        setDislikeClick(false);
      } else {
        setLikeCount(likeCount - 2);
        setLikeClick(false);
        setDislikeClick(true);
      }
    } else if (dislikeClick) {
      if (like) {
        setLikeCount(likeCount + 2);
        setLikeClick(true);
        setDislikeClick(false);
      } else {
        setLikeCount(likeCount + 1);
        setLikeClick(false);
        setDislikeClick(false);
      }
    } else {
      if (like) {
        setLikeCount(likeCount + 1);
        setLikeClick(true);
        setDislikeClick(false);
      } else {
        setLikeCount(likeCount - 1);
        setLikeClick(false);
        setDislikeClick(true);
      }
    }

    let user = data!.user as User;
    let updateBody: UpsertLikeInput = {
      userId: user.id,
      messageId: messageId,
      evaluation: like ? 1 : -1,
    };

    const response = await fetch(`/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateBody),
    });
    if (response.status !== 200) {
      alert('Update error occured');
      console.log('error', response.status, response.statusText);
    }
  };

  const bubbleStyle: React.CSSProperties = {
    backgroundColor: message.backgroundColor,
    maxWidth: '85%',
    borderRadius: '10px',
    padding: '1rem',
    marginTop: '10px',
    marginBottom: '20px',
    textAlign: 'left',
    fontSize: '1rem',
    lineHeight: '1.1rem',
    letterSpacing: '0em',
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: '600',
    lineHeight: '1.2rem',
    letterSpacing: '0em',
    textAlign: 'left',
    marginRight: '4px',
    marginBottom: 0,
  };

  const descStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    fontWeight: '400',
    lineHeight: '1rem',
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
    lineHeight: '1.5rem',
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

  if (message.bias === Bias.LEFT) {
    bubbleStyle.marginRight = 'auto';
    avatarStyle.textAlign = 'right';
  }

  if (message.bias === Bias.CENTER) {
    bubbleStyle.marginRight = 'auto';
    avatarStyle.textAlign = 'right';
  }

  if (message.bias === Bias.RIGHT) {
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
          style={{ display: 'flex', fontSize: '0.9rem' }}
        >
          {likeClick ? (
            <div className="items-center mr-2" style={{ display: 'flex' }}>
              <Image
                alt="thumpup"
                src="/images/icons/thumbup-active.svg"
                width={18}
                height={18}
                priority
                onClick={() => handleLike(message.id!!, true)}
                style={{ marginRight: '4px' }}
              />
              <span style={{ marginRight: '8px' }}>{likeCount}</span>
            </div>
          ) : (
            <div className="items-center mr-2" style={{ display: 'flex' }}>
              <Image
                alt="thumpup"
                src="/images/icons/thumb_up.svg"
                width={18}
                height={18}
                priority
                onClick={() => handleLike(message.id!!, true)}
                style={{ marginRight: '4px' }}
              />
              <span style={{ marginRight: '8px' }}>{likeCount}</span>
            </div>
          )}
          {dislikeClick ? (
            <div className="flex items-center" style={{ display: 'flex' }}>
              <Image
                alt="thumpup"
                src="/images/icons/thumbdown-active.svg"
                width={18}
                height={18}
                priority
                onClick={() => handleLike(message.id!!, false)}
                style={{ marginRight: '4px' }}
              />
            </div>
          ) : (
            <div className="flex items-center" style={{ display: 'flex' }}>
              <Image
                alt="thumpup"
                src="/images/icons/thumb_down.svg"
                width={18}
                height={18}
                priority
                onClick={() => handleLike(message.id!!, false)}
                style={{ marginRight: '4px' }}
              />
            </div>
          )}

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
            <span className="ml-1">
              {message.reportedAt.toString().substring(0, 10)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBubble;

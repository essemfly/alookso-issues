import { IssueReply, User } from '@prisma/client';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Input, Button } from 'antd';
import { UpsertReplyInput } from '@/models/reply.server';

const { TextArea } = Input;

interface ReplyWriterProps {
  issueId: number;
  replys: IssueReply[];
}

const ReplyWriterComponent: React.FC<ReplyWriterProps> = ({
  issueId,
  replys,
}) => {
  const router = useRouter();
  const { data } = useSession();

  const [isFocused, setIsFocused] = useState(false);
  const [reply, setReply] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };
  const onChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(evt.target.value);
  };

  const handleSubmit = async () => {
    if (data && data.user == null) {
      alert('로그인이 필요합니다.');
      router.push('/login');
      return;
    }

    let user = data!.user as User;

    let updateBody: UpsertReplyInput = {
      content: reply,
      userId: user.id,
      issueId: issueId,
    };
    const response = await fetch(`/api/issues/${issueId}/replys`, {
      method: 'POST',
      body: JSON.stringify(updateBody),
    });
    if (response.status !== 200) {
      alert('Update error occured');
      console.log('error', response.status, response.statusText);
    }

    console.log('response', response);

    setReply('');
  };

  return (
    <>
      {isFocused ? (
        <>
          <TextArea
            showCount
            maxLength={300}
            style={{ height: 120, resize: 'none' }}
            onChange={onChange}
            value={reply}
            placeholder="타인에게 불편함을 주는 댓글은 삼가주세요."
          />
          <Button onClick={handleSubmit} style={{ marginTop: '0.8rem' }}>
            등록
          </Button>
        </>
      ) : (
        <Input
          size="large"
          onFocus={handleFocus}
          placeholder="댓글을 입력해주세요"
        />
      )}
    </>
  );
};

export default ReplyWriterComponent;

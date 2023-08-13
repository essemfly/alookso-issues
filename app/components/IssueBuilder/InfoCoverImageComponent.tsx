import React, { Dispatch, SetStateAction, useState } from 'react';
import { Space, Input, Upload, Button, message, Switch } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import IssueCelebComponent from './CelebComponent';

interface CoverImagelInfoProps {
  coverImage: string;
  setCoverImage: Dispatch<SetStateAction<string>>;
}

const InfoCoverImageComponent: React.FC<CoverImagelInfoProps> = (
  generalInfo,
) => {
  const handleImageChange = (info: any) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 파일이 업로드되었습니다.`);
      generalInfo.setCoverImage(info.file.originFileObj);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 파일 업로드에 실패했습니다.`);
    }
  };
  const onUploadSuccess = (file: any) => {
    console.log('File uploaded successfully:', file);
    // 파일 업로드 성공 후 추가적인 작업을 수행할 수 있습니다.
    message.success('File uploaded successfully');
  };

  // 파일 업로드가 실패했을 때 실행되는 콜백 함수
  const onUploadError = (err: any) => {
    console.error('File upload failed:', err);
    // 파일 업로드 실패 시 사용자에게 알림을 표시하는 등의 처리를 수행할 수 있습니다.
    message.error('File upload failed');
  };

  // 업로드 전에 실행되는 콜백 함수
  const beforeUpload = (file: File) => {
    // 파일 유형이나 크기를 체크하고 허용되지 않은 파일은 업로드하지 않도록 처리할 수 있습니다.
    // 예: 이미지 파일만 허용하거나 파일 크기 제한 등
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    return isImage; // 파일 업로드 허용 여부 반환
  };

  // 업로드 컴포넌트의 속성 설정
  const uploadProps = {
    action: 'https://www.example.com/upload', // 파일 업로드를 처리할 서버 엔드포인트 URL
    beforeUpload: beforeUpload, // 파일 업로드 전에 실행되는 콜백 함수
    onChange: (info: any) => {
      // 파일 업로드 상태가 변경될 때마다 실행되는 콜백 함수
      if (info.file.status === 'done') {
        onUploadSuccess(info.file.response); // 업로드 성공 시 실행될 콜백
      } else if (info.file.status === 'error') {
        onUploadError(info.file.error); // 업로드 실패 시 실행될 콜백
      }
    },
  };

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <label>Cover Image</label>
      <Upload
        {...uploadProps}
        listType="picture"
        maxCount={1}
        defaultFileList={[
          {
            url: 'https://www.ikbc.co.kr/data/kbc/image/2023/02/07/kbc202302070075.800x.9.png',
            uid: 'abcd',
            name: '이준석',
          },
        ]}
      >
        <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
      </Upload>
    </Space>
  );
};

export default InfoCoverImageComponent;

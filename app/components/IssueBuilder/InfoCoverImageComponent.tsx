import React, { Dispatch, SetStateAction } from 'react';
import { Space, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface CoverImagelInfoProps {
  coverImage: string;
  setCoverImage: Dispatch<SetStateAction<string>>;
}

const InfoCoverImageComponent: React.FC<CoverImagelInfoProps> = (
  props: CoverImagelInfoProps,
) => {
  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    return isImage;
  };

  const uploadProps = {
    action: '/api/image',
    beforeUpload: beforeUpload,
    onChange: (info: any) => {
      if (info.file.status === 'done') {
        onUploadSuccess(info.file.response);
      } else if (info.file.status === 'error') {
        onUploadError(info.file.error);
      }
    },
  };

  const onUploadSuccess = (file: any) => {
    console.log('File uploaded successfully:', file);
    message.success('File uploaded successfully:');
    props.setCoverImage(file.url);
  };

  const onUploadError = (err: any) => {
    console.error('File upload failed:', err);
    message.error('File upload failed');
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
        defaultFileList={
          props.coverImage
            ? [
                {
                  url: props.coverImage,
                  uid: '0',
                  name: 'image.png',
                },
              ]
            : []
        }
      >
        <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
      </Upload>
    </Space>
  );
};

export default InfoCoverImageComponent;

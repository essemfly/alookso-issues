import React, { useState } from 'react';
import { Button, Input, Modal, Form, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { CreateCelebInput } from '@/models/celeb.server';

interface CelebCreateModalProps {
  openCelebCreateModal: boolean;
  setOpenCelebCreateModal: (open: boolean) => void;
  handleAddCeleb: (celeb: CreateCelebInput) => void;
}

export const CelebCreateModal = ({
  openCelebCreateModal,
  setOpenCelebCreateModal,
  handleAddCeleb,
}: CelebCreateModalProps) => {
  const [form] = Form.useForm();
  const [avatarUrl, setAvatarUrl] = useState('');

  const onFinish = (values: any) => {
    handleAddCeleb({
      name: values.name,
      description: values.description,
      avatar: avatarUrl,
    }),
      form.resetFields();
    setOpenCelebCreateModal(false);
  };

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
    setAvatarUrl(file.url);
  };

  const onUploadError = (err: any) => {
    console.error('File upload failed:', err);
    message.error('File upload failed');
  };

  return (
    <Modal
      open={openCelebCreateModal}
      onCancel={() => setOpenCelebCreateModal(false)}
      footer={null}
    >
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter a name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please enter a description' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Image">
          <Upload
            {...uploadProps}
            accept="image/*"
            maxCount={1}
            defaultFileList={[]}
          >
            <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

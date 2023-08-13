import React, { useState } from 'react';
import { Button, Input, Modal, Form, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { CreateCelebReq } from '@/lib/api/celeb';

interface CelebCreateModalProps {
  openCelebCreateModal: boolean;
  setOpenCelebCreateModal: (open: boolean) => void;
  handleAddCeleb: (celeb: CreateCelebReq) => void;
}

export const CelebCreateModal = ({
  openCelebCreateModal,
  setOpenCelebCreateModal,
  handleAddCeleb,
}: CelebCreateModalProps) => {
  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const onFinish = (values: any) => {
    handleAddCeleb({
        name: values.name,
        description: values.description,
        file: imageFile!!,
    }),

    form.resetFields();
    setImageFile(null);
    setOpenCelebCreateModal(false);
  };

  const onImageUploadChange = (info: any) => {
    info.file.status = "done"
    setImageFile(info.file.originFileObj);
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
            accept="image/*"
            showUploadList={true}
            customRequest={() => {}}
            onChange={onImageUploadChange}
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
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

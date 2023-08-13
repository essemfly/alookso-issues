import React, { Dispatch, SetStateAction } from 'react';
import { Space, Input, Switch } from 'antd';

interface GeneralInfoProps {
  title: string;
  description: string;
  isPublished: boolean;
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setIsPublished: Dispatch<SetStateAction<boolean>>;
}

const GeneralInfoComponent: React.FC<GeneralInfoProps> = (generalInfo) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    generalInfo.setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    generalInfo.setDescription(e.target.value);
  };

  const handleSwitchChange = (checked: boolean) => {
    generalInfo.setIsPublished(checked);
  };

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '15px' }}>공개 여부: </span>
        <Switch
          checked={generalInfo.isPublished}
          onChange={handleSwitchChange}
        />
      </div>
      <label>Title</label>
      <Input
        placeholder="Title"
        value={generalInfo.title}
        onChange={handleTitleChange}
      />
      <label>Description</label>
      <Input
        placeholder="Description"
        value={generalInfo.description}
        onChange={handleDescriptionChange}
        style={{ width: '100%' }}
      />
    </Space>
  );
};

export default GeneralInfoComponent;

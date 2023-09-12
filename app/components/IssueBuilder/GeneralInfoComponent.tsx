import React, { Dispatch, SetStateAction } from 'react';
import { Space, Input, Switch } from 'antd';

interface GeneralInfoProps {
  title: string;
  weight: number;
  description: string;
  isPublished: boolean;
  setTitle: Dispatch<SetStateAction<string>>;
  setWeight: Dispatch<SetStateAction<number>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setIsPublished: Dispatch<SetStateAction<boolean>>;
}

const GeneralInfoComponent: React.FC<GeneralInfoProps> = (generalInfo) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    generalInfo.setTitle(e.target.value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    generalInfo.setWeight(parseInt(e.target.value, 10));
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
      <label>Weight</label>
      <Input
        placeholder="Weight"
        type="number"
        value={generalInfo.weight}
        onChange={handleWeightChange}
      />
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

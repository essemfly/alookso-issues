import { Celeb } from '@prisma/client';
import { Select, Space } from 'antd';
import Image from 'next/image';

interface CeleSelectBoxProps {
  celebs: Celeb[];
  selectedCelebs: Celeb[];
  addCelebInIssue: (celebId: number) => void;
}

const { Option } = Select;

const CeleSelectBox = ({
  celebs,
  selectedCelebs,
  addCelebInIssue,
}: CeleSelectBoxProps) => {
  const handleChange = (value: number) => {
    console.log("야 여기서 id를 줘야해", value)
    addCelebInIssue(value);
  };

  return (
    <>
      <div>Celebs</div>
      <Select
        mode="multiple"
        style={{ width: '100%', margin: '30px 0' }}
        placeholder="select celeb"
        defaultValue={
          selectedCelebs && Array.isArray(selectedCelebs) ? selectedCelebs?.map((celeb) => celeb.id) : []
        }
        onSelect={handleChange}
        onDeselect={handleChange}
        optionLabelProp="label"
      >
        {celebs?.map((celeb) => (
          <Option
            key={celeb.id}
            value={celeb.id}
            label={`${celeb.name}-${celeb.description}`}
          >
            <Space>
              <span role="img" aria-label={celeb.name}>
                <Image
                  width={25}
                  height={25}
                  alt={celeb.name}
                  src={celeb.avatar ? celeb.avatar : ''}
                />
              </span>
              {celeb.name}-{celeb.description}
            </Space>
          </Option>
        ))}
      </Select>
    </>
  );
};

export default CeleSelectBox;

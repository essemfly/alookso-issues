import { addCelebInIssue } from '@/lib/api/issues/detail';
import { CelebInfo } from '@/types/issues/celeb';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';

interface CeleSelectBoxProps {
  celebs: CelebInfo[];
  selectedCelebs: CelebInfo[];
  addCelebInIssue: (celebId: number) => void;
}

const { Option } = Select;

const CeleSelectBox = ({
  celebs,
  selectedCelebs,
  addCelebInIssue,
}: CeleSelectBoxProps) => {
  const handleChange = (value: string) => {
    addCelebInIssue(Number(value));
  };

  return (
    <>
      <div>Celebs</div>
      <Select
        mode="multiple"
        style={{ width: '100%', margin: '30px 0' }}
        placeholder="select celeb"
        defaultValue={
          selectedCelebs ? selectedCelebs?.map((celeb) => celeb.name) : []
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
                <img src={celeb.avatar['avatar']?.src} />
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

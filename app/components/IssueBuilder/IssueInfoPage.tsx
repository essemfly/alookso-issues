import { useState } from 'react';
import { Button, Col, Row, Select, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import InfoSpace from './GeneralInfoComponent';
import IssueBlockSpace from './BlockComponent';
import InfoCoverImageSpace from './InfoCoverImageComponent';
import CelebSelectBox from './CelebSelectBox';
import { addCelebInIssue, updateIssue } from '@/lib/api/issues/detail';
import { Issue, IssueBodyBlock } from '@/types/issues/body';
import { CelebInfo } from '@/types/issues/celeb';
import { CelebCreateModal } from './CelebModal';
import { CreateCelebReq, addCeleb } from '@/lib/api/celeb';

interface IssueInfoProps {
  issue: Issue;
  allCelebs: CelebInfo[];
}

const IssueInfoPage = ({ issue, allCelebs }: IssueInfoProps) => {
  const [title, setTitle] = useState<string>(issue?.title || '');
  const [description, setDescription] = useState<string>(
    issue?.description || '',
  );
  const [coverImage, setCoverImage] = useState<string>(issue?.coverImage || '');
  const [isPublished, setIsPublished] = useState<boolean>(
    issue?.isPublished || false,
  );
  const [blocks, setBlocks] = useState<Array<IssueBodyBlock>>(
    issue?.body || [],
  );
  const [celebs, setCelebs] = useState<CelebInfo[]>(allCelebs || []);
  const [issueCelebs, setIssueCelebs] = useState<CelebInfo[]>(
    issue.celebs || [],
  );
  const [openCelebCreateModal, setOpenCelebCreateModal] = useState(false);

  const handleAddBlock = (block?: IssueBodyBlock) => {
    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      if (block == null) {
        newBlocks.push({
          blockType: 'text',
          content: null,
          messages: [],
        });
      } else {
        newBlocks.push(block);
      }

      return newBlocks;
    });
  };

  const handleRemoveBlock = (index: number) => {
    const updatedBlocks = blocks.filter((_, idx) => idx !== index);
    setBlocks(updatedBlocks);
  };

  const setBlock = (index: number, block: IssueBodyBlock) => {
    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      newBlocks.splice(index, 1, block);
      return newBlocks;
    });
  };

  const handleAddCeleb = async (celebReq: CreateCelebReq) => {
    const newCeleb = await addCeleb({
      name: celebReq.name,
      description: celebReq.description,
      file: celebReq.file,
    });

    setCelebs((prevCelebs) => {
      return [...prevCelebs, newCeleb];
    });
  };

  const handleAddCelebInIssue = async (celebId: number) => {
    const selectedCelebs = await addCelebInIssue(issue.slug, celebId);
    setIssueCelebs(selectedCelebs);
  };

  const handleSave = async () => {
    await updateIssue(issue.slug, {
      title: title,
      description: description,
      coverImage: coverImage,
      blocks: blocks,
    });

    alert('Update finished well');
  };

  return (
    <>
      <Row gutter={[16, 32]}>
        <Col span={12}>
          <InfoSpace
            title={title}
            description={description}
            isPublished={isPublished}
            setTitle={setTitle}
            setDescription={setDescription}
            setIsPublished={setIsPublished}
          />
        </Col>
        <Col span={12}>
          <InfoCoverImageSpace
            coverImage={coverImage}
            setCoverImage={setCoverImage}
          />
        </Col>
        <Col span={24}>
          <CelebSelectBox
            celebs={celebs}
            selectedCelebs={issueCelebs}
            addCelebInIssue={handleAddCelebInIssue}
          />
          <Button
            type="primary"
            onClick={() => {
              setOpenCelebCreateModal(true);
            }}
            style={{ marginLeft: '8px' }}
          >
            셀럽 추가 등록하기
          </Button>
        </Col>
        <Col span={24}>
          <div>Blocks</div>
          {blocks.map((block, idx) => (
            <>
              <IssueBlockSpace
                key={idx}
                celebs={celebs}
                block={block}
                setBlock={(newBlock) => setBlock(idx, newBlock)}
                removeBlock={() => handleRemoveBlock(idx)}
              />
              <hr />
            </>
          ))}
        </Col>
      </Row>
      <div>
        <Button
          type="primary"
          onClick={() => handleAddBlock()}
          style={{ marginLeft: '8px' }}
        >
          블럭 추가하기
        </Button>
        <Button
          type="primary"
          onClick={handleSave}
          style={{ marginLeft: '8px' }}
        >
          저장하기
        </Button>
      </div>
      <CelebCreateModal
        openCelebCreateModal={openCelebCreateModal}
        setOpenCelebCreateModal={setOpenCelebCreateModal}
        handleAddCeleb={handleAddCeleb}
      />
    </>
  );
};

export default IssueInfoPage;

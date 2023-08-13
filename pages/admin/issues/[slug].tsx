import { useState } from 'react';
import { Button, Col, Row } from 'antd';
import { Celeb, IssueBlock, IssueStatus } from '@prisma/client';
import { GetServerSidePropsContext } from 'next';

import { getIssue } from '@/models/issue.server';
import { CreateCelebInput, getCelebs } from '@/models/celeb.server';

import InfoSpace from '@/components/IssueBuilder/GeneralInfoComponent';
import IssueBlockSpace from '@/components/IssueBuilder/BlockComponent';
import InfoCoverImageSpace from '@/components/IssueBuilder/InfoCoverImageComponent';
import CelebSelectBox from '@/components/IssueBuilder/CelebSelectBox';
import { CelebCreateModal } from '@/components/IssueBuilder/CelebModal';
import { IssueWithBlocks } from '@/models/issue.server';

interface AdminIssueDetailProps {
  issue: IssueWithBlocks;
  celebs: Celeb[];
}

export default function AdminIssueDetailPage(props: AdminIssueDetailProps) {
  const [title, setTitle] = useState<string>(props.issue.title || '');
  const [description, setDescription] = useState<string>(
    props.issue.description || '',
  );
  const [coverImage, setCoverImage] = useState<string>(
    props.issue.coverImage || '',
  );
  const [isPublished, setIsPublished] = useState<boolean>(
    props.issue.status === IssueStatus.PUBLISHED || false,
  );
  const [blocks, setBlocks] = useState<Array<IssueBlock>>(
    props.issue.issueBlocks || [],
  );
  const [celebs, setCelebs] = useState<Celeb[]>(props.celebs || []);
  const [issueCelebs, setIssueCelebs] = useState<Celeb[]>(
    props.issue.celebs || [],
  );
  const [openCelebCreateModal, setOpenCelebCreateModal] = useState(false);

  const handleAddBlock = (block?: IssueBlock) => {
    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      if (block == null) {
        newBlocks.push({
          blockType: 'text',
          content: null,
          id: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          issueId: 0,
          seq: 0,
          isRemoved: false,
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

  const setBlock = (index: number, block: IssueBlock) => {
    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      newBlocks.splice(index, 1, block);
      return newBlocks;
    });
  };

  const handleAddCeleb = async (celebReq: CreateCelebInput) => {
    const response = await fetch('/api/celebs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(celebReq),
    });

    let newCeleb = (await response.json()) as unknown as Celeb;

    if (response.status === 200) {
      console.log('response body', response.json());
    } else {
      console.log('error', response.status, response.statusText);
    }

    setCelebs((prevCelebs) => {
      return [...prevCelebs, newCeleb];
    });
  };

  const handleAddCelebInIssue = async (celebId: number) => {
    const response = await fetch(`/api/issues/${props.issue.slug}/celebs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        celebId: celebId,
      }),
    });
    let celebs = (await response.json()) as unknown as Celeb[];
    if (response.status === 200) {
      console.log('response body', response.json());
      setIssueCelebs(celebs);
    } else {
      console.log('error', response.status, response.statusText);
    }
  };

  const handleSave = async () => {
    let updateBody = {
      title: title,
      description: description,
      coverImage: coverImage,
      blocks: blocks,
    };

    const response = await fetch(`/api/issues/${props.issue.slug}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateBody),
    });
    if (response.status === 200) {
      console.log('response body', response.json());
      alert('Update finished well');
      window.location.reload();
    } else {
      alert('Update error occured');
      console.log('error', response.status, response.statusText);
    }
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
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const slug = params!.slug!;
  const issue = await getIssue(slug as string);
  const celebs = await getCelebs();

  return {
    props: {
      issue: JSON.parse(JSON.stringify(issue)),
      celebs: JSON.parse(JSON.stringify(celebs)),
    },
  };
}

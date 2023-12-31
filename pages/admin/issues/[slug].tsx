import { useState } from 'react';
import { getSession } from 'next-auth/react';
import { Button, Col, Row } from 'antd';
import { Celeb, IssueStatus, User } from '@prisma/client';
import { GetServerSidePropsContext } from 'next';

import {
  IssueBlockWithMessages,
  UpdateIssueBlockInput,
  UpdateIssueInput,
  UpdateIssueMessageInput,
  getIssue,
} from '@/models/issue.server';
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
  const [weight, setWeight] = useState<number>(props.issue.weight || 0);
  const [coverImage, setCoverImage] = useState<string>(
    props.issue.coverImage || '',
  );
  const [isPublished, setIsPublished] = useState<boolean>(
    props.issue.status === IssueStatus.PUBLISHED || false,
  );
  const [blocks, setBlocks] = useState<Array<IssueBlockWithMessages>>(
    props.issue.issueBlocks || [],
  );
  const [celebs, setCelebs] = useState<Celeb[]>(props.celebs || []);
  const [issueCelebs, setIssueCelebs] = useState<Celeb[]>(
    props.issue.celebs || [],
  );
  const [openCelebCreateModal, setOpenCelebCreateModal] = useState(false);

  const handleAddBlock = (block?: IssueBlockWithMessages) => {
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
          messages: [],
          title: null,
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

  const setBlock = (index: number, block: IssueBlockWithMessages) => {
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

    let newCeleb = await response.json();

    if (response.status === 200) {
      alert('Celeb added successfully');
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
      setIssueCelebs(celebs);
    } else {
      console.log('error', response.status, response.statusText);
    }
  };

  const handleSave = async () => {
    if (
      !confirm(
        '에디터의 블럭들을 저장하셨나요? 저장안한 에디터 블럭내용들은 저장되지 않습니다',
      )
    ) {
      return;
    }
    let updateBlocks: UpdateIssueBlockInput[] = blocks.map((block, idx) => {
      let updateMessages: UpdateIssueMessageInput[] = block.messages.map(
        (message) => {
          return {
            id: message.id || undefined,
            celebId: message.celebId,
            celebAvatar: message.celebAvatar,
            celebName: message.celebName,
            celebDescription: message.celebDescription,
            content: message.content,
            link: message.link,
            linkFrom: message.linkFrom,
            backgroundColor: message.backgroundColor,
            bias: message.bias,
            reportedAt: message.reportedAt,
          } as UpdateIssueMessageInput;
        },
      );

      return {
        id: block.id || undefined,
        seq: idx,
        blockType: block.blockType,
        title: block.title,
        content: block.content!!,
        isRemoved: block.isRemoved,
        messages: updateMessages,
      };
    });

    let updateBody: UpdateIssueInput = {
      id: props.issue.id,
      title: title,
      weight: weight,
      description: description,
      coverImage: coverImage,
      blocks: updateBlocks,
      status: isPublished ? IssueStatus.PUBLISHED : IssueStatus.DRAFT,
    };

    const response = await fetch(`/api/issues/${props.issue.slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateBody),
    });
    if (response.status === 200) {
      alert('Update finished well');
      window.location.reload();
    } else {
      alert('Update error occured');
      console.log('error', response.status, response.statusText);
    }
  };

  return (
    <div className="mx-auto md:w-[54rem] md:max-w-[54rem] lg:w-[54rem] lg:max-w-[54rem] xl:w-[64rem] xl:max-w-[64rem] content_padding content_gray">
      <Row gutter={[16, 32]} style={{ marginTop: '20px' }}>
        <Col span={12}>
          <InfoSpace
            title={title}
            weight={weight}
            description={description}
            isPublished={isPublished}
            setWeight={setWeight}
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
            onClick={() => {
              setOpenCelebCreateModal(true);
            }}
          >
            셀럽 추가 등록하기
          </Button>
        </Col>
        <Col span={24}>
          <div>Blocks</div>
          {blocks.map((block, idx) => (
            <div key={idx}>
              <IssueBlockSpace
                key={idx}
                celebs={props.issue.celebs}
                block={block}
                setBlock={(newBlock) => setBlock(idx, newBlock)}
                removeBlock={() => handleRemoveBlock(idx)}
              />
              <hr />
            </div>
          ))}
        </Col>
      </Row>
      <div>
        <Button onClick={() => handleAddBlock()} style={{ marginLeft: '8px' }}>
          블럭 추가하기
        </Button>
        <Button onClick={handleSave} style={{ marginLeft: '8px' }}>
          저장하기
        </Button>
      </div>
      <CelebCreateModal
        openCelebCreateModal={openCelebCreateModal}
        setOpenCelebCreateModal={setOpenCelebCreateModal}
        handleAddCeleb={handleAddCeleb}
      />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  let { user } = session;
  if (user.isAdmin === false) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

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

import ChatComponent from '@/components/IssueBuilder/ChatComponent';
import { WritingEditor } from '@/components/LexicalEditor/App';
import { Radio, Space, Button } from 'antd';
import { IssueMessage, Celeb } from '@prisma/client';
import { IssueBlockWithMessages } from '@/models/issue.server';

interface IssueBlockProps {
  block: IssueBlockWithMessages;
  celebs: Celeb[];
  setBlock: (newBlock: IssueBlockWithMessages) => void;
  removeBlock: () => void;
}

const IssueBlock = ({
  block,
  celebs,
  setBlock,
  removeBlock,
}: IssueBlockProps) => {
  const handleEditorTypeChange = (e: any) => {
    setBlock({ ...block, blockType: e.target.value });
  };

  const setBlockMessages = (chatHistory: IssueMessage[]) => {
    setBlock({ ...block, messages: chatHistory });
  };

  const setBlockContent = (content: string) => {
    setBlock({ ...block, content: content });
  };

  console.log('block content', block.content);

  return (
    <Space direction="vertical" style={{ width: '100%', marginTop: '10px' }}>
      <Radio.Group value={block.blockType} onChange={handleEditorTypeChange}>
        <Radio.Button value="text">일반 에디터</Radio.Button>
        <Radio.Button value="message">대화형 에디터</Radio.Button>
      </Radio.Group>
      <Button onClick={removeBlock}>Remove</Button>
      {block.blockType === 'text' && (
        <WritingEditor
          content={block.content}
          setContent={setBlockContent}
          uploadImage={() => 'sample url'}
        />
      )}
      {block.blockType === 'message' && (
        <ChatComponent
          celebs={celebs}
          messages={block.messages ? block.messages : []}
          setMessages={setBlockMessages}
        />
      )}
    </Space>
  );
};

export default IssueBlock;

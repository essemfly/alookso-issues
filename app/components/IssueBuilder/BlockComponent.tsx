import ChatComponent from '@/components/IssueBuilder/ChatComponent';
import EditorApp from '@/components/LexicalEditor/App';
import { Radio, Space, Button } from 'antd';
import { IssueMessage } from '@/types/issues/body';
import { IssueBodyBlock } from '@/types/issues/body';
import { CelebInfo } from '@/types/issues/celeb';

interface IssueBlockProps {
  block: IssueBodyBlock;
  celebs: CelebInfo[];
  setBlock: (newBlock: IssueBodyBlock) => void;
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
    console.log("chat history", chatHistory)
    setBlock({ ...block, messages: chatHistory });
  };

  const setBlockContent = (content: string) => {
    setBlock({ ...block, content: content });
  };

  return (
    <Space direction="vertical" style={{ width: '100%', marginTop: '10px' }}>
      <Radio.Group value={block.blockType} onChange={handleEditorTypeChange}>
        <Radio.Button value="text">일반 에디터</Radio.Button>
        <Radio.Button value="message">대화형 에디터</Radio.Button>
      </Radio.Group>
      <Button onClick={removeBlock}>Remove</Button>
      {block.blockType === 'text' && (
        <EditorApp
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
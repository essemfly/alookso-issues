import { LexicalComposer } from '@lexical/react/LexicalComposer';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import Editor from './Editor';
import EditorNodes from './nodes/nodes';

interface TextEditorProps {
  content: string | null;
  setContent: (context: string) => void;
  uploadImage: () => string;
}

export default function App({
  content,
  setContent,
  uploadImage,
}: TextEditorProps): JSX.Element {
  console.log("CONTENT", content)
  const preloadRichText = content;
  const editable = true;

  const initialConfig = {
    editorState: preloadRichText,
    namespace: 'Alookso TextEditor',
    nodes: [...EditorNodes],
    editable: editable,
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Editor setContent={setContent} uploadImage={uploadImage} />
    </LexicalComposer>
  );
}

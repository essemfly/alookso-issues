import { LexicalComposer } from '@lexical/react/LexicalComposer';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import Editor from './Editor';
import EditorNodes from './nodes/nodes';

interface ViewerEditorProps {
  content: string | null;
}

export function ViewerEditor({ content }: ViewerEditorProps): JSX.Element {
  const initialConfig = {
    editorState: JSON.parse(content!!),
    namespace: 'Alookso TextEditor',
    nodes: [],
    editable: false,
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>placeholder</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
    </LexicalComposer>
  );
}

interface WritingEditoProps {
  content: string | null;
  setContent: (context: string) => void;
  uploadImage: () => string;
}

export function WritingEditor({
  content,
  setContent,
  uploadImage,
}: WritingEditoProps): JSX.Element {
  const preloadRichText = content;
  const editable = true;

  const initialConfig = {
    editorState: JSON.parse(preloadRichText!!),
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

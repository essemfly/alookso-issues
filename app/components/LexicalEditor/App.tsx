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
    nodes: [...EditorNodes],
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
}

export function WritingEditor({
  content,
  setContent,
}: WritingEditoProps): JSX.Element {
  const initialConfig = {
    editorState: JSON.parse(content!!),
    namespace: 'Alookso TextEditor',
    nodes: [...EditorNodes],
    editable: true,
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Editor setContent={setContent} />
    </LexicalComposer>
  );
}

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import ContentEditable from './ui/ContentEditable';
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
      <div className="editor-shell" style={{minHeight: 'inherit', paddingTop: '1rem'}}>
        <PlainTextPlugin
          contentEditable={
            <div className="editor-scroller" style={{minHeight: 'inherit', resize: "none"}}>
              <div className="editor">
                <ContentEditable style={{padding: 0, minHeight: 'inherit'}}/>
              </div>
            </div>
          }
          placeholder={<div>placeholder</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
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

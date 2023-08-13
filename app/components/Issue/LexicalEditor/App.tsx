import { LexicalComposer } from '@lexical/react/LexicalComposer';
import * as React from 'react';

import {ContentEditable} from '@lexical/react/LexicalContentEditable';

import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

interface TextEditorProps {
  content: string | null;
}

export default function App({
  content,
}: TextEditorProps): JSX.Element {
  const initialConfig = {
    editorState: content,
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
      <PlainTextPlugin contentEditable={<ContentEditable />} 
        placeholder={<div>Content가 보이기 시작하십니까?</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
    </LexicalComposer>
  );
}

import * as React from 'react';
import { useState } from 'react';

import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin';
import Placeholder from './ui/Placeholder';
import FloatingLinkEditorPlugin from './plugins/FloatingLinkEditorPlugin';
import LinkPlugin from './plugins/LinkPlugin';
import ContentEditable from './ui/ContentEditable';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import ImagesPlugin from './plugins/ImagesPlugin';
import ActionsPlugin from './plugins/ActionsPlugin';
// import ChatPlugin from './plugins/ChatPlugin';

interface EditorProps {
  setContent: (context: string) => void;
  uploadImage: () => string;
}

export default function Editor({
  setContent,
  uploadImage,
}: EditorProps): JSX.Element {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  const text = 'Text를 입력하세요';
  const placeholder = <Placeholder>{text}</Placeholder>;

  return (
    <div className="editor-shell">
      <ToolbarPlugin />
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={
            <div className="editor-scroller">
              <div className="editor" ref={onRef}>
                <ContentEditable />
              </div>
            </div>
          }
          placeholder={placeholder}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <ListPlugin />
        <CheckListPlugin />
        <LinkPlugin />
        {/* <ChatPlugin celebs={[]} /> */}
        <HorizontalRulePlugin />
        {floatingAnchorElem && (
          <FloatingLinkEditorPlugin anchorElem={floatingAnchorElem} />
        )}
        <TabIndentationPlugin />
        <ImagesPlugin uploadImage={uploadImage} />
        <ActionsPlugin setContent={setContent} />
      </div>
    </div>
  );
}

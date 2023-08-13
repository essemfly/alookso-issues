/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { LexicalEditor } from 'lexical';

import { $generateHtmlFromNodes } from '@lexical/html';
import { exportFile, importFile } from '@lexical/file';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import { $createTextNode, $getRoot } from 'lexical';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

import useModal from '../../hooks/useModal';

async function sendEditorState(editor: LexicalEditor): Promise<void> {
  const stringifiedEditorState = JSON.stringify(editor.getEditorState());
  try {
    await fetch('http://localhost:1235/setEditorState', {
      body: stringifiedEditorState,
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      method: 'POST',
    });
  } catch {
    // NO-OP
  }
}

async function validateEditorState(editor: LexicalEditor): Promise<void> {
  const stringifiedEditorState = JSON.stringify(editor.getEditorState());
  let response = null;
  try {
    response = await fetch('http://localhost:1235/validateEditorState', {
      body: stringifiedEditorState,
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      method: 'POST',
    });
  } catch {
    // NO-OP
  }
  if (response !== null && response.status === 403) {
    throw new Error(
      'Editor state validation failed! Server did not accept changes.',
    );
  }
}

interface ActionPlugProp {
  setContent: (context: string) => void;
}

export default function ActionsPlugin({
  setContent,
}: ActionPlugProp): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const [isEditable, setIsEditable] = useState(() => editor.isEditable());
  const [modal, showModal] = useModal();

  useEffect(() => {
    return mergeRegister(
      editor.registerEditableListener((editable) => {
        setIsEditable(editable);
      }),
    );
  }, [editor]);

  return (
    <div className="actions">
      <button
        className="action-button import"
        onClick={() => importFile(editor)}
        title="Import"
        aria-label="Import editor state from JSON"
      >
        <i className="import" />
      </button>
      <button
        className="action-button export"
        onClick={() =>
          exportFile(editor, {
            fileName: `Playground ${new Date().toISOString()}`,
            source: 'Playground',
          })
        }
        title="Export"
        aria-label="Export editor state to JSON"
      >
        <i className="export" />
      </button>
      <button
        className={`action-button ${!isEditable ? 'unlock' : 'lock'}`}
        onClick={() => {
          // Send latest editor state to commenting validation server
          // if (isEditable) {
          //   sendEditorState(editor);
          // }
          const editorState = editor.getEditorState();
          const editorStateJsonString = JSON.stringify(editorState);
          setContent(editorStateJsonString);

          editor.setEditable(!editor.isEditable());
        }}
        title="Read-Only Mode"
        aria-label={`${!isEditable ? 'Unlock' : 'Lock'} read-only mode`}
      >
        <i className={!isEditable ? 'unlock' : 'lock'} />
      </button>
      {modal}
    </div>
  );
}

// function ShowClearDialog({
//   editor,
//   onClose,
// }: {
//   editor: LexicalEditor;
//   onClose: () => void;
// }): JSX.Element {
//   return (
//     <>
//       Are you sure you want to clear the editor?
//       <div className="Modal__content">
//         <Button
//           onClick={() => {
//             editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
//             editor.focus();
//             onClose();
//           }}
//         >
//           Clear
//         </Button>{' '}
//         <Button
//           onClick={() => {
//             editor.focus();
//             onClose();
//           }}
//         >
//           Cancel
//         </Button>
//       </div>
//     </>
//   );
// }

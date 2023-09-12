import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import { $createAlooksoNode, AlooksoNode } from '../../nodes/AlooksoNode';
import {
  COMMAND_PRIORITY_EDITOR,
  LexicalCommand,
  createCommand,
} from 'lexical';
import { $insertNodeToNearestRoot } from '@lexical/utils';

export const INSERT_ALOOKSO_COMMAND: LexicalCommand<string> = createCommand(
  'INSERT_ALOOKSO_COMMAND',
);

export default function AlooksoPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([AlooksoNode])) {
      throw new Error('AlooksoNode not registered on editor');
    }

    return editor.registerCommand<string>(
      INSERT_ALOOKSO_COMMAND,
      (payload) => {
        const alooksoNode = $createAlooksoNode(payload);
        $insertNodeToNearestRoot(alooksoNode);

        return true;
      },
      COMMAND_PRIORITY_EDITOR,
    );
  }, [editor]);
  return null;
}

// import {
//   $createParagraphNode,
//   $insertNodes,
//   $isRootOrShadowRoot,
//   COMMAND_PRIORITY_EDITOR,
//   createCommand,
// } from 'lexical';
// import { LexicalCommand } from 'lexical';
// import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
// import { $wrapNodeInElement, mergeRegister } from '@lexical/utils';

// import { ChatNode, $createChatNode } from '../../nodes/ChatNode';
// import { InsertChatDialogPayload } from './insertMessage';
// import { Celeb } from '@prisma/client';
// import { useEffect } from 'react';

// export const INSERT_CHAT_COMMAND: LexicalCommand<InsertChatDialogPayload> =
//   createCommand('INSERT_CHAT_COMMAND');

// interface ChatPluginProps {
//   celebs: Celeb[];
// }

// export default function ChatPlugin({
//   celebs,
// }: ChatPluginProps): JSX.Element | null {
//   const [editor] = useLexicalComposerContext();

//   useEffect(() => {
//     if (!editor.hasNodes([ChatNode])) {
//       throw new Error('ChatPlugin: ChatPlugin not registered on editor');
//     }

//     return mergeRegister(
//       editor.registerCommand<InsertChatDialogPayload>(
//         INSERT_CHAT_COMMAND,
//         (payload) => {
//           const chatNode = $createChatNode(payload);
//           $insertNodes([chatNode]);
//           if ($isRootOrShadowRoot(chatNode.getParentOrThrow())) {
//             $wrapNodeInElement(chatNode, $createParagraphNode).selectEnd();
//           }
//           return true;
//         },
//         COMMAND_PRIORITY_EDITOR,
//       ),
//     );
//   }, [editor]);

//   return <></>;
// }

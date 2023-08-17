// import {
//   $applyNodeReplacement,
//   EditorConfig,
//   ElementFormatType,
//   LexicalEditor,
//   NodeKey,
// } from 'lexical';
// import { message } from 'antd';
// import {
//   DecoratorBlockNode,
//   SerializedDecoratorBlockNode,
// } from '@lexical/react/LexicalDecoratorBlockNode';
// import ChatBubble from './ChatNodeComponent';
// import { Bias } from '@prisma/client';

// export interface ChatPayload {
//   message: string;
//   bias: string;
// }

// export class ChatNode extends DecoratorBlockNode {
//   __bias: string;
//   __message: string;

//   constructor(
//     message: string,
//     bias: string,
//     format?: ElementFormatType,
//     key?: NodeKey,
//   ) {
//     super(format, key);
//     this.__bias = bias;
//     this.__message = message;
//   }

//   static getType(): string {
//     return 'chat';
//   }

//   static clone(node: ChatNode): ChatNode {
//     return new ChatNode(node.__bias, node.__message);
//   }

//   decorate(_editor: LexicalEditor, config: EditorConfig): JSX.Element {
//     const embedBlockTheme = config.theme.embedBlock || {};
//     const className = {
//       base: embedBlockTheme.base || '',
//       focus: embedBlockTheme.focus || '',
//     };

//     return (
//       <ChatBubble
//         message={{
//           backgroundColor: '#fef2f2',
//           bias: Bias.LEFT,
//           celebAvatar: '',
//           celebDescription: '대기자',
//           celebId: 2403,
//           celebName: '천관율',
//           content: '잼버리 모두 다 철수',
//           id: 361,
//           // isUserLiked: false,
//           link: 'https://m.hani.co.kr/arti/society/society_general/1103301.html',
//           linkFrom: '한겨레',
//           reportedAt: '2023-08-07',
//           isRemoved: false,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//           blockId: 0,
//           // seq: 2,
//           // voteCount: 0,
//         }}
//       />
//     );
//   }
// }

// export function $createChatNode({ message, bias }: ChatPayload): ChatNode {
//   return $applyNodeReplacement(new ChatNode(message, bias));
// }

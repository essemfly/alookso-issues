/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


import type { Klass, LexicalNode } from 'lexical';

import { CodeHighlightNode, CodeNode } from '@lexical/code';
// import { HashtagNode } from '@lexical/hashtag';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
// import { MarkNode } from '@lexical/mark';
// import { OverflowNode } from '@lexical/overflow';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';

// import { CollapsibleContainerNode } from '../plugins/CollapsiblePlugin/CollapsibleContainerNode';
// import { CollapsibleContentNode } from '../plugins/CollapsiblePlugin/CollapsibleContentNode';
// import { CollapsibleTitleNode } from '../plugins/CollapsiblePlugin/CollapsibleTitleNode';
// import { AutocompleteNode } from './AutocompleteNode';
import { EmojiNode } from './EmojiNode';
// import { EquationNode } from './EquationNode';
// import { ExcalidrawNode } from './ExcalidrawNode';
// import { FigmaNode } from './FigmaNode';
import { ImageNode } from './ImageNode';
// import { ChatNode } from './ChatNode';
// import { InlineImageNode } from './InlineImageNode';
// import { KeywordNode } from './KeywordNode';
// import { MentionNode } from './MentionNode';
// import { PollNode } from './PollNode';
// import { StickyNode } from './StickyNode';
// import { TableNode as NewTableNode } from './TableNode';
import { TweetNode } from './TweetNode';
import { YouTubeNode } from './YouTubeNode';

const EditorNodes: Array<Klass<LexicalNode>> = [
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  CodeNode,
  TableNode,
  TableCellNode,
  TableRowNode,
  CodeHighlightNode,
  AutoLinkNode,
  LinkNode,
  // ChatNode,
  ImageNode,
  EmojiNode,
  HorizontalRuleNode,
  TweetNode,
  YouTubeNode,
  // OverflowNode,
  // PollNode,
  // StickyNode,
  // InlineImageNode,
  // MentionNode,
  // ExcalidrawNode,
  // EquationNode,
  // AutocompleteNode,
  // KeywordNode,
  // NewTableNode,
  // HashtagNode,
  // FigmaNode,
  // MarkNode,
  // CollapsibleContainerNode,
  // CollapsibleContentNode,
  // CollapsibleTitleNode,
];

export default EditorNodes;

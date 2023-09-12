import { BlockWithAlignableContents } from '@lexical/react/LexicalBlockWithAlignableContents';
import {
  DecoratorBlockNode,
  SerializedDecoratorBlockNode,
} from '@lexical/react/LexicalDecoratorBlockNode';
import {
  EditorConfig,
  ElementFormatType,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical';
import { useCallback, useEffect, useRef, useState } from 'react';
import cheerio from 'cheerio';

export type SerializedAlooksoNode = Spread<
  {
    postID: string;
  },
  SerializedDecoratorBlockNode
>;

export class AlooksoNode extends DecoratorBlockNode {
  __id: string;

  static getType(): string {
    return 'alookso';
  }

  static clone(node: AlooksoNode): AlooksoNode {
    return new AlooksoNode(node.__id, node.__format, node.__key);
  }

  static importJSON(serializedNode: SerializedAlooksoNode): AlooksoNode {
    const node = $createAlooksoNode(serializedNode.postID);
    node.setFormat(serializedNode.format);
    return node;
  }

  exportJSON(): SerializedAlooksoNode {
    return {
      ...super.exportJSON(),
      type: 'alookso',
      version: 1,
      postID: this.__id,
    };
  }

  constructor(id: string, format?: ElementFormatType, key?: NodeKey) {
    super(format, key);
    this.__id = id;
  }

  getId(): string {
    return this.__id;
  }

  getTextContent(
    _includeInert?: boolean | undefined,
    _includeDirectionless?: false | undefined,
  ): string {
    return `https://alook.so/posts/${this.__id}`;
  }

  decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
    const embedBlockTheme = config.theme.embedBlock || {};
    const className = {
      base: embedBlockTheme.base || '',
      focus: embedBlockTheme.focus || '',
    };
    let alooksoUrl = this.getTextContent();
    console.log('alookso URL', alooksoUrl);

    return (
      <AlooksoComponent
        className={className}
        format={this.__format}
        loadingComponent="Loading..."
        nodeKey={this.getKey()}
        postID={this.__id}
      />
    );
  }
}

export function $createAlooksoNode(id: string): AlooksoNode {
  return new AlooksoNode(id);
}

type AlooksoComponentProps = Readonly<{
  className: Readonly<{
    base: string;
    focus: string;
  }>;
  format: ElementFormatType | null;
  loadingComponent?: JSX.Element | string;
  nodeKey: NodeKey;
  onError?: (error: string) => void;
  onLoad?: () => void;
  postID: string;
}>;

function AlooksoComponent({
  className,
  format,
  loadingComponent,
  nodeKey,
  onError,
  onLoad,
  postID,
}: AlooksoComponentProps) {
  const [metaData, setMetaData] = useState<{
    title?: string;
    description?: string;
    image?: string;
  }>({});

  //   const postUrl = 'https://alook.so/posts/' + postID + '.json';
  const postUrl = 'https://alook.so/posts/' + postID;
  useEffect(() => {
    fetch(postUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('네트워크 오류');
        }
        return response.text();
      })
      .then((html) => {
        // 웹페이지 HTML 파싱하여 메타 태그 추출
        const $ = cheerio.load(html);
        const metaTags: { [key: string]: string } = {};

        $('meta').each((_, element) => {
          const name = $(element).attr('name') || $(element).attr('property');
          const content = $(element).attr('content');

          if (name && content) {
            metaTags[name] = content;
          }
        });

        setMetaData({
          title: metaTags['og:title'],
          description: metaTags['og:description'],
          image: metaTags['og:image'],
        });
      })
      .catch((error) => {
        console.error('웹페이지 가져오기 중 오류 발생:', error);
      });
  }, []);

  console.log('meta info', metaData);
  return (
    <BlockWithAlignableContents
      className={className}
      format={format}
      nodeKey={nodeKey}
    >
      <p>제목: {metaData.title}</p>
      <p>설명: {metaData.description}</p>
      <p>이미지 URL: {metaData.image}</p>
    </BlockWithAlignableContents>
  );
}

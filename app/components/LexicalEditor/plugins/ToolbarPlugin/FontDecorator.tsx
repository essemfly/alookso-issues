import { useCallback, useEffect, useState } from 'react';
import type { LexicalEditor } from 'lexical';
import { FORMAT_TEXT_COMMAND, $getSelection, $isRangeSelection } from 'lexical';
import { TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $patchStyleText } from '@lexical/selection';

import DropdownColorPicker from '../../ui/DropdownColorPicker';
import { IS_APPLE } from '@/components/LexicalEditor/utils/environment';
import { sanitizeUrl } from '@/components/LexicalEditor/utils/url';

export default function FontDecorator({
  editor,
  fontColor,
  bgColor,
  isEditable,
  isBold,
  isItalic,
  isUnderline,
  isLink,
}: {
  editor: LexicalEditor;
  fontColor: string;
  bgColor: string;
  isEditable: boolean;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isLink: boolean;
}): JSX.Element {
  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl('https://'));
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  const applyStyleText = useCallback(
    (styles: Record<string, string>) => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $patchStyleText(selection, styles);
        }
      });
    },
    [editor],
  );

  const onFontColorSelect = useCallback(
    (value: string) => {
      applyStyleText({ color: value });
    },
    [applyStyleText],
  );

  const onBgColorSelect = useCallback(
    (value: string) => {
      applyStyleText({ 'background-color': value });
    },
    [applyStyleText],
  );

  return (
    <>
      <button
        disabled={!isEditable}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
        className={'toolbar-item spaced ' + (isBold ? 'active' : '')}
        title={IS_APPLE ? 'Bold (⌘B)' : 'Bold (Ctrl+B)'}
        type="button"
        aria-label={`Format text as bold. Shortcut: ${
          IS_APPLE ? '⌘B' : 'Ctrl+B'
        }`}
      >
        <i className="format bold" />
      </button>
      <button
        disabled={!isEditable}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
        className={'toolbar-item spaced ' + (isItalic ? 'active' : '')}
        title={IS_APPLE ? 'Italic (⌘I)' : 'Italic (Ctrl+I)'}
        type="button"
        aria-label={`Format text as italics. Shortcut: ${
          IS_APPLE ? '⌘I' : 'Ctrl+I'
        }`}
      >
        <i className="format italic" />
      </button>
      <button
        disabled={!isEditable}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
        className={'toolbar-item spaced ' + (isUnderline ? 'active' : '')}
        title={IS_APPLE ? 'Underline (⌘U)' : 'Underline (Ctrl+U)'}
        type="button"
        aria-label={`Format text to underlined. Shortcut: ${
          IS_APPLE ? '⌘U' : 'Ctrl+U'
        }`}
      >
        <i className="format underline" />
      </button>
      <button
        disabled={!isEditable}
        onClick={insertLink}
        className={'toolbar-item spaced ' + (isLink ? 'active' : '')}
        aria-label="Insert link"
        title="Insert link"
        type="button"
      >
        <i className="format link" />
      </button>
      <DropdownColorPicker
        disabled={!isEditable}
        buttonClassName="toolbar-item color-picker"
        buttonAriaLabel="Formatting text color"
        buttonIconClassName="icon font-color"
        color={fontColor}
        onChange={onFontColorSelect}
        title="text color"
      />
      <DropdownColorPicker
        disabled={!isEditable}
        buttonClassName="toolbar-item color-picker"
        buttonAriaLabel="Formatting background color"
        buttonIconClassName="icon bg-color"
        color={bgColor}
        onChange={onBgColorSelect}
        title="bg color"
      />
    </>
  );
}

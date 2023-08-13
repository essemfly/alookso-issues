import type { LexicalEditor } from 'lexical';
import {
  FORMAT_ELEMENT_COMMAND,
  INDENT_CONTENT_COMMAND,
  OUTDENT_CONTENT_COMMAND,
} from 'lexical';
import * as React from 'react';

import DropDown, { DropDownItem } from '../../ui/Dropdown';
import Divider from './Divider';

export default function AlignDropdown({
  editor,
  isEditable,
  isRTL,
}: {
  editor: LexicalEditor;
  isEditable: boolean;
  isRTL: boolean;
}): JSX.Element {
  return (
    <DropDown
      disabled={!isEditable}
      buttonLabel="Align"
      buttonIconClassName="icon left-align"
      buttonClassName="toolbar-item spaced alignment"
      buttonAriaLabel="Formatting options for text alignment"
    >
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
        className="item"
      >
        <i className="icon left-align" />
        <span className="text">Left Align</span>
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
        className="item"
      >
        <i className="icon center-align" />
        <span className="text">Center Align</span>
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
        className="item"
      >
        <i className="icon right-align" />
        <span className="text">Right Align</span>
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
        }}
        className="item"
      >
        <i className="icon justify-align" />
        <span className="text">Justify Align</span>
      </DropDownItem>
      <Divider />
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined);
        }}
        className="item"
      >
        <i className={'icon ' + (isRTL ? 'indent' : 'outdent')} />
        <span className="text">Outdent</span>
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined);
        }}
        className="item"
      >
        <i className={'icon ' + (isRTL ? 'outdent' : 'indent')} />
        <span className="text">Indent</span>
      </DropDownItem>
    </DropDown>
  );
}

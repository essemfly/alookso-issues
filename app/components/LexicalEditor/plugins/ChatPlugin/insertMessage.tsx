// import { LexicalEditor } from 'lexical';
// import { useState } from 'react';

// import TextInput from '../../ui/TextInput';
// import { DialogActions, DialogButtonsList } from '../../ui/Dialog';
// import Button from '../../ui/Button';
// import { INSERT_CHAT_COMMAND } from '.';

// interface InsertChatDialogProps {
//   activeEditor: LexicalEditor;
//   onClose: () => void;
// }

// export interface InsertChatDialogPayload {
//   celebId: number;
//   message: string;
//   bias: string;
//   bgColor: string;
//   linkUrl: string;
//   linkFrom: string;
//   reportedAt: string;
// }

// export function InsertChatDialog({
//   activeEditor,
//   onClose,
// }: InsertChatDialogProps) {
//   const [message, setMessage] = useState('');
//   const [bias, setBias] = useState('');
//   const [bgColor, setBgColor] = useState('');
//   const [linkUrl, setLinkUrl] = useState('');
//   const [linkFrom, setLinkFrom] = useState('');
//   const [reportedAt, setReportedAt] = useState('');

//   const onClick = (payload: InsertChatDialogPayload) => {
//     activeEditor.dispatchCommand(INSERT_CHAT_COMMAND, payload);
//     onClose();
//   };

//   return (
//     <>
//       <TextInput
//         label="Alt Text"
//         placeholder="Descriptive alternative text"
//         onChange={setMessage}
//         value={message}
//         data-test-id="image-modal-alt-text-input"
//       />
//       <TextInput
//         label="Alt Text"
//         placeholder="Descriptive alternative text"
//         onChange={setBias}
//         value={bias}
//         data-test-id="image-modal-alt-text-input"
//       />
//       <TextInput
//         label="Alt Text"
//         placeholder="Descriptive alternative text"
//         onChange={setBgColor}
//         value={bgColor}
//         data-test-id="image-modal-alt-text-input"
//       />
//       <TextInput
//         label="Alt Text"
//         placeholder="Descriptive alternative text"
//         onChange={setLinkFrom}
//         value={linkFrom}
//         data-test-id="image-modal-alt-text-input"
//       />
//       <TextInput
//         label="Alt Text"
//         placeholder="Descriptive alternative text"
//         onChange={setLinkUrl}
//         value={linkUrl}
//         data-test-id="image-modal-alt-text-input"
//       />
//       <TextInput
//         label="Alt Text"
//         placeholder="Descriptive alternative text"
//         onChange={setReportedAt}
//         value={reportedAt}
//         data-test-id="image-modal-alt-text-input"
//       />
//       <DialogActions>
//         <Button
//           data-test-id="image-modal-file-upload-btn"
//           disabled={false}
//           onClick={() => {
//             onClick({
//               message: message,
//               celebId: 0,
//               bias: bias,
//               bgColor: bgColor,
//               linkUrl: linkUrl,
//               linkFrom: linkFrom,
//               reportedAt: reportedAt,
//             });
//           }}
//         >
//           Confirm
//         </Button>
//       </DialogActions>
//     </>
//   );
// }

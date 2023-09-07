import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

type IntroProps = { title: string; description: string; updatedAt: string };

const Intro = ({ title, updatedAt }: IntroProps) => {
  return (
    <>
      <h1 className="PlaygroundEditorTheme__h1">{title}</h1>
      <div
        className="text-left text-sm text-gray-400"
        style={{
          margin: '12px 0',
          fontSize: '15px',
          fontWeight: 400,
          color: '#89898D',
        }}
      >
        마지막 업데이트: {format(updatedAt, 'ko')}
      </div>
    </>
  );
};

export default Intro;

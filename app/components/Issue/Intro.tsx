type IntroProps = { title: string; description: string; updatedAt: string };

const Intro = ({ title, updatedAt }: IntroProps) => {
  return (
    <div className="space-y-4 px-4 py-8 text-center md:px-12">
      <h1 className="PlaygroundEditorTheme__h1">
        {title}
      </h1>
      <div className="text-left text-sm text-gray-400" style={{margin: "12px 0"}}>
        마지막 업데이트: {updatedAt}
      </div>
    </div>
  );
};

export default Intro;

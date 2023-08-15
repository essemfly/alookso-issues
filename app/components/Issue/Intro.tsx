type IntroProps = { title: string; description: string; updatedAt: string };

const Intro = ({ title, updatedAt, description }: IntroProps) => {
  return (
    <div className="space-y-4 px-4 py-8 text-center md:px-12">
      <h1 className="keep-all mb-2 text-left text-3xl font-bold text-gray-900 md:text-4xl">
        {title}
      </h1>
      <div className="text-left text-sm text-gray-400">
        마지막 업데이트: {updatedAt}
      </div>
    </div>
  );
};

export default Intro;

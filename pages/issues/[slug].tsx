import { GetServerSidePropsContext } from 'next';
import ImageFallback from '@/components/ImageFallback/ImageFallback';
import Intro from '@/components/Issue/Intro';
import RatingComponent from '@/components/Issue/Rating';
import {
  MessageBlockSection,
  TextBlockSection,
} from '@/components/Issue/Block';
import { IssueWithBlocks, getIssue } from '@/models/issue.server';
import { formatDate } from '@/utils/formatDate';

interface IssueDetailProps {
  issue: IssueWithBlocks;
}

const IssueDetailPage = (props: IssueDetailProps) => {
  const handleRatingSelected = (rating: string) => {
    // 여기서 rating을 처리하는 로직을 구현하면 됩니다.
    console.log('Selected rating:', rating);
  };

  return (
    <section className="mb-24 w-full overflow-hidden md:mb-0" id="liview-top">
      <div className="relative">
        <ImageFallback
          className="inset-x-0 mx-auto w-full max-w-[84rem] object-cover"
          alt={props.issue.coverImage}
          priority
          src={props.issue.coverImage ?? ''}
        />
      </div>
      <div className="mx-auto md:w-[37rem] md:max-w-[37rem] lg:w-[38rem] lg:max-w-[38rem] xl:w-[44rem] xl:max-w-[44rem] content_padding">
        {props.issue ? (
          <Intro
            title={props.issue.title}
            description={props.issue.description}
            updatedAt={formatDate(props.issue.updatedAt)}
          />
        ) : null}
        {props.issue.issueBlocks.map((block) => {
          if (block.blockType === 'text') {
            return <TextBlockSection key={block.id} block={block} />;
          }
          if (block.blockType === 'message') {
            return <MessageBlockSection key={block.id} block={block} />;
          }
        })}
        <RatingComponent issue={props.issue}/>
      </div>
    </section>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const slug = params!.slug!;
  const issue = await getIssue(slug as string);
  return {
    props: {
      issue: JSON.parse(JSON.stringify(issue)),
    },
  };
}

export default IssueDetailPage;

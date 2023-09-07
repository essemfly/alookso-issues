import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import ImageFallback from '@/components/ImageFallback/ImageFallback';
import Intro from '@/components/Issue/Intro';
import RatingComponent from '@/components/Issue/Rating';
import {
  MessageBlockSection,
  TextBlockSection,
} from '@/components/Issue/Block';
import {
  IssueWithBlocks,
  getIssue,
  getMyIssueActions,
} from '@/models/issue.server';
import { formatDate } from '@/utils/formatDate';
import { IssueReply, MessageLike, Rating, User } from '@prisma/client';
import ShareComponent from '@/components/Issue/ShareButtons';
// import RecommendComponent from '@/components/Issue/Recommend';
import ReplyComponent from '@/components/Issue/Reply';
import { getReplys } from '@/models/reply.server';

interface IssueDetailProps {
  replys: IssueReply[];
  issue: IssueWithBlocks;
  myRating?: Rating | null;
  myMessageLikes?: MessageLike[] | null;
}

const IssueDetailPage = (props: IssueDetailProps) => {
  const [updatedAt, setUpdatedAt] = useState('방금');

  useEffect(() => {
    setUpdatedAt(formatDate(props.issue.updatedAt));
    window.Kakao.init('a65f7c5d73e5b862059b689bf141617e');
  }, []);

  return (
    <section className="mb-24 w-full overflow-hidden md:mb-0" id="liview-top">
      <div className="relative">
        <ImageFallback
          className="mx-auto max-w-[84rem] image-fallback-fill"
          alt={props.issue.coverImage}
          priority
          src={props.issue.coverImage ?? ''}
          fill
        />
      </div>
      <div className="mx-auto md:w-[37rem] md:max-w-[37rem] lg:w-[38rem] lg:max-w-[38rem] xl:w-[44rem] xl:max-w-[44rem] content_padding">
        {props.issue ? (
          <Intro
            title={props.issue.title}
            description={props.issue.description}
            updatedAt={updatedAt}
          />
        ) : null}
        {props.issue.issueBlocks.map((block) => {
          if (block.blockType === 'text') {
            return <TextBlockSection key={block.id} block={block} />;
          }
          if (block.blockType === 'message') {
            return (
              <MessageBlockSection
                key={block.id}
                block={block}
                userInfo={props.myMessageLikes}
              />
            );
          }
        })}
      </div>
      <div className="mx-auto md:w-[37rem] md:max-w-[37rem] lg:w-[38rem] lg:max-w-[38rem] xl:w-[44rem] xl:max-w-[44rem] content_padding">
        <RatingComponent issue={props.issue} userInfo={props.myRating} />
      </div>
      <div className="mx-auto md:w-[37rem] md:max-w-[37rem] lg:w-[38rem] lg:max-w-[38rem] xl:w-[44rem] xl:max-w-[44rem] content_padding">
        <ShareComponent issue={props.issue} />
      </div>
      {/* <div className="mx-auto md:w-[37rem] md:max-w-[37rem] lg:w-[38rem] lg:max-w-[38rem] xl:w-[44rem] xl:max-w-[44rem] content_padding">
        <RecommendComponent writings={props.issue.recommendWritings} />
      </div> */}
      <div className="mx-auto md:w-[37rem] md:max-w-[37rem] lg:w-[38rem] lg:max-w-[38rem] xl:w-[44rem] xl:max-w-[44rem] content_padding">
        <ReplyComponent issueId={props.issue.id} replys={props.replys} />
      </div>
    </section>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const slug = params!.slug!;
  const issue = await getIssue(slug as string);

  const session = await getSession(context);
  let myRating,
    myMessageLikes = null;

  if (session) {
    let { user } = session;
    let result = await getMyIssueActions(user.id, issue.id!);
    myRating = result.rating;
    myMessageLikes = result.likes;
  }

  const replys = await getReplys(issue.id!);

  return {
    props: {
      replys: JSON.parse(JSON.stringify(replys)),
      issue: JSON.parse(JSON.stringify(issue)),
      myRating: JSON.parse(JSON.stringify(myRating)),
      myMessageLikes: JSON.parse(JSON.stringify(myMessageLikes)),
    },
  };
}

export default IssueDetailPage;

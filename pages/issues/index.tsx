import { Fragment } from 'react';
import { IssueWithCelebs, getLiveIssues } from '@/models/issue.server';
import Card from '@/components/Issue/Card';
import HeadMeta from '@/components/HeadMeta';

interface LiveIssuesProps {
  issues: IssueWithCelebs[];
}

export default function IssuesPage(props: LiveIssuesProps) {
  return (
    <>
      <HeadMeta />
      <section style={{ justifyContent: 'center', display: 'flex' }}>
        <div className="mt-4 space-y-4 content_padding custom-width md:w-65vw lg:w-55vw">
          <Fragment>
            {props.issues.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </Fragment>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const issues = await getLiveIssues();
  return {
    props: {
      issues: JSON.parse(JSON.stringify(issues)),
    },
  };
}

import { Fragment } from 'react';
import { IssueWithCelebs, getLiveIssues } from '@/models/issue.server';
import Card from '@/components/Issue/Card';

interface LiveIssuesProps {
  issues: IssueWithCelebs[];
}

export default function IssuesPage(props: LiveIssuesProps) {
  return (
    <section className="mb-4 w-full p-4 pb-24 md:bg-white md:pt-12 lg:px-12">
      <div className="mt-4 space-y-4">
        <Fragment>
          {props.issues.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </Fragment>
      </div>
    </section>
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

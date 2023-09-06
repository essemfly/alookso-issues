import { Fragment } from 'react';
import { IssueWithCelebs, getLiveIssues } from '@/models/issue.server';
import Card from '@/components/Issue/Card';

interface LiveIssuesProps {
  issues: IssueWithCelebs[];
}

export default function IssuesPage(props: LiveIssuesProps) {
  return (
    <section style={{ justifyContent: 'center', display: 'flex' }}>
      <div className="mt-4 space-y-4 content_padding">
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

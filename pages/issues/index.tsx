import { Fragment } from 'react';
import { getSession } from 'next-auth/react';
import { IssueWithCelebs, getLiveIssues } from '@/models/issue.server';
import Card from '@/components/Issue/Card';
import { GetServerSidePropsContext } from 'next';

interface LiveIssuesProps {
  issues: IssueWithCelebs[];
}

export default function IssuesPage(props: LiveIssuesProps) {
  return (
    <section className="mb-4 w-full bg-gray-100 p-4 pb-24 md:bg-white md:pt-12 lg:px-12">
      <h1 className="text-xl font-bold text-gray-800">얼룩소 이슈!</h1>
      <p className="mt-2 break-all text-gray-400">
        계속 업데이트되는 살아있는 이슈들
      </p>
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const issues = await getLiveIssues();
  return {
    props: {
      issues: JSON.parse(JSON.stringify(issues)),
    },
  };
}

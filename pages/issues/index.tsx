import { Issue } from '@prisma/client';
import { getLiveIssues } from '@/models/issue.server';

interface LiveIssuesProps {
  issues: Issue[];
}

export default function IssuesPage(props: LiveIssuesProps) {
  return <>Issues Page</>;
}

export async function getServerSideProps() {
  const issues = await getLiveIssues();
  return {
    props: {
      issues,
    },
  };
}

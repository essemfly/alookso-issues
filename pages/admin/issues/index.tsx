import { Button, List, Typography } from 'antd';
import Link from 'next/link';
import { Issue } from '@prisma/client';
import { getAllIssues } from '@/models/issue.server';

interface AdminIssuesProps {
  issues: Issue[];
}

export default function AdminIssuesListPage(props: AdminIssuesProps) {
  const handleIssueCreateClick = async () => {
    const response = await fetch('/api/issues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      let newIssue = (await response.json()) as unknown as Issue;
      window.location.href = `/admin/issues/${newIssue.slug}`;
    } else {
      alert('error occured, please check console');
      console.log('error', response.status, response.statusText);
    }
  };

  return (
    <>
      <Button onClick={handleIssueCreateClick} style={{ marginBottom: '10px' }}>
        Issue생성하기
      </Button>
      <List
        header={<Typography.Text>얼룩소 이슈!</Typography.Text>}
        bordered
        dataSource={props.issues}
        renderItem={(item) => (
          <List.Item id={item.slug}>
            <Link href={`/admin/issues/${item.slug}`}>
              <Typography.Text mark>{item.title}</Typography.Text>
              <br />
              <Typography.Text>{item.description}</Typography.Text>
            </Link>
          </List.Item>
        )}
      />
    </>
  );
}

export async function getServerSideProps() {
  const issues = await getAllIssues();
  return {
    props: {
      issues: JSON.parse(JSON.stringify(issues)),
    },
  };
}

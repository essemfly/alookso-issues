import React, { useEffect, useState } from "react";

import { Button, List, Typography, Switch } from "antd";
import { useIssuesGet } from "@/hooks/api/issues/useIssuesGet";
import { createIssue } from "@/lib/api/issues";
import Link from "next/link";

export default function AdminIssuesListPage() {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(100);
  const { data, isLoading, error } = useIssuesGet({ page: page, size: size });

  const handleIssueCreateClick = async () => {
    let newIssue = await createIssue();
    window.location.href = `/issues/${newIssue.slug}`;
  };

  return (
    <>
      <Button onClick={handleIssueCreateClick} style={{ marginBottom: "10px" }}>
        Issue생성하기
      </Button>
      <List
        header={<Typography.Text>얼룩소 이슈!</Typography.Text>}
        bordered
        dataSource={data?.content}
        renderItem={(item) => (
          <List.Item id={item.slug}>
            <Link href={`/issues/${item.slug}`}>
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

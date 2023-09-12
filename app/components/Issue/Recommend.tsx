import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import { Issue } from '@prisma/client';
import ImageFallback from '@/components/ImageFallback/ImageFallback';

interface RecommendProps {
  recommendedIssues: Issue[];
}

const RecommendComponent: React.FC<RecommendProps> = ({
  recommendedIssues,
}) => {
  return (
    <div className="rating-component items-center">
      <div className="mb-2 rating-header">
        <h2 className="text-center mb-2">다른 떠오르는 이슈들</h2>
      </div>
      <Row gutter={16}>
        {recommendedIssues.map((issue) => {
          return (
            <Col span={12} key={issue.id}>
              <Card
                className="recommend-card"
                hoverable
                cover={
                  <ImageFallback
                    className="image-fallback-fill"
                    alt={issue.title}
                    src={
                      issue.coverImage ??
                      'https://i.namu.wiki/i/h6H17qjR7-_eLCo9gYWzPLc8oi4Kx1CbL2PaC1mVEm9F97f6_02_s22DtkIBdkFgGJErF3DFVHHMQwVtrfGhYQ.webp'
                    }
                    fill
                    priority
                  />
                }
              >
                <Card.Meta
                  title={issue.title}
                  description={issue.description}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
      <div className="flex p-4 space-x-3 overflow-hidden bg-white shadow"></div>
    </div>
  );
};

export default RecommendComponent;

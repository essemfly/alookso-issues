import React from 'react';
import { Button, Modal, Space } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import { Issue } from '@prisma/client';
import * as gtag from '../../../lib/gtag';

const ShareComponent: React.FC<{ issue: Issue; baseUrl: String }> = ({
  issue,
  baseUrl,
}) => {
  let linkToShare = baseUrl + '/issues/' + issue.slug;
  const handleShare = (platform: string) => {
    gtag.event({
      action: 'Share Clicked',
      category: 'Share',
      label: 'Issue Detail',
      value: issue.title,
    });
    if (platform === 'facebook') {
      const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        linkToShare,
      )}`;
      window.open(facebookShareLink, '_blank');
    } else if (platform === 'twitter') {
      const twitterShareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        linkToShare,
      )}`;
      window.open(twitterShareLink, '_blank');
    } else if (platform === 'kakaotalk') {
      let content = {
        title: issue.title,
        description: issue.description,
        imageUrl: issue.coverImage,
        link: {
          mobileWebUrl: linkToShare,
          webUrl: linkToShare,
        },
      };
      const { Kakao } = window;
      Kakao.Link.sendDefault({
        objectType: 'feed',
        content,
      });
    }
  };

  const handleCopyLink = () => {
    // 클립보드에 링크 복사 로직을 구현하세요.
    navigator.clipboard
      .writeText(linkToShare)
      .then(() => {
        // 복사 성공 시 처리
        Modal.success({
          content: (
            <div>
              링크가 성공적으로 복사되었습니다.
              <br />
              {linkToShare}
            </div>
          ),
        });
      })
      .catch((error) => {
        // 복사 실패 시 처리
        Modal.error({
          content: '링크 복사 중 오류가 발생했습니다.',
        });
      });
  };

  return (
    <div className="rating-component items-center">
      <div className="mb-2 rating-header">
        <h2 className="text-center mb-2">
          유익했다면 공유하고 친구들과 이야기를 나눠봐요
        </h2>
      </div>
      <div className="flex p-4 space-x-3 overflow-hidden bg-white shadow">
        <Space wrap align="center" style={{ justifyContent: 'center' }}>
          <Button
            icon={<FacebookOutlined />}
            onClick={() => handleShare('facebook')}
          >
            Facebook으로 공유
          </Button>
          <Button
            icon={<TwitterOutlined />}
            onClick={() => handleShare('twitter')}
          >
            Twitter로 공유
          </Button>
          <Button
            icon={<WhatsAppOutlined />}
            onClick={() => handleShare('kakaotalk')}
          >
            KakaoTalk으로 공유
          </Button>
          <Button icon={<CopyOutlined />} onClick={handleCopyLink}>
            링크 복사
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default ShareComponent;

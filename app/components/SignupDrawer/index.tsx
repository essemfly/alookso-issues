import { Drawer } from 'antd';
import Image from 'next/image';
import { signIn, useSession, signOut } from 'next-auth/react';
import * as gtag from '../../../lib//gtag';

type SignupDrawerProps = {
  isDrawerVisible: boolean;
  setIsDrawerVisible: (isDrawerVisible: boolean) => void;
};

export const SignupDrawer = ({
  isDrawerVisible,
  setIsDrawerVisible,
}: SignupDrawerProps) => {
  const handleKakaoLogin = async () => {
    gtag.event({
      action: 'Signup Clicked',
      category: 'Signup',
      label: 'Signup in Drawer',
      value: 'kakao',
    });

    const result = await signIn('kakao', {
      redirect: true,
      callbackUrl: '/',
    });
  };
  return (
    <Drawer
      className="location-drawer"
      title="얼룩소! 이슈와 함께하세요"
      placement="bottom"
      closable={true}
      open={isDrawerVisible}
      onClose={() => setIsDrawerVisible(false)}
      style={{ fontSize: '1rem', lineHeight: '1.25rem', textAlign: 'center' }}
    >
      <div>
        여러 사회 이슈들을 보는 새로운 방법! <br />
        전문가, 관계자의 이야기로 들어볼 수 있는 공간
      </div>
      <br />
      <div> 지금 가입하고 </div>
      <div>얼룩소! 기자들이 작성한 이슈를 만나보세요</div>
      <div className="flex justify-center" style={{ marginTop: '1rem' }}>
        <button
          style={{
            borderColor: 'transparent',
            backgroundColor: '#fee500',
          }}
          className="relative flex items-center justify-center w-12 h-12 border rounded-full"
          onClick={handleKakaoLogin}
        >
          <Image
            className="w-h h-5"
            width={20}
            height={20}
            src={
              'https://alook.so/assets/social_provider/kakao-d42cb7d45af49e054ca639c156bc12d6559ab9531ee968cc72b5d30bf7a331a3.png'
            }
            alt={'kakaotalk'}
            draggable={false}
          />
        </button>
      </div>
    </Drawer>
  );
};

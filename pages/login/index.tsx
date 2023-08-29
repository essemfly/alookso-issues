import { signIn, useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  const { data: session } = useSession();

  const handleKakaoLogin = async () => {
    signIn();
  };

  if (session) {
    return (
      <>
        {session.user?.name}님 반갑습니다 <br />
        <button onClick={() => signOut()}>로그아웃</button>
      </>
    );
  }
  return (
    <div style={{ display: 'block' }}>
      <div
        style={{
          display: 'block',
          fontSize: '1.5rem',
          lineHeight: '1.3em',
          textAlign: 'center',
        }}
      >
        <div style={{ margin: '2rem 0 0.5rem 0' }}>지금 가입하고 </div>
        <div>실시간 이슈를 빠르게 만나보세요</div>
      </div>
      <h2
        className=""
        style={{
          textAlign: 'center',
          fontSize: '1.125rem',
          lineHeight: '1.2em',
          fontWeight: '600',
          margin: '2rem 0',
          color: 'rgb(156,163,175)',
        }}
      >
        소셜미디어로 3초만에 가입
      </h2>
      <div className="flex justify-center" style={{ marginTop: '2rem' }}>
        <button
          style={{
            borderColor: 'transparent',
            backgroundColor: '#fee500',
          }}
          className="relative flex items-center justify-center w-12 h-12 border rounded-full"
          onClick={() => signIn()}
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
    </div>
  );
}

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function AppHeader() {
  const { data: session, status } = useSession();

  let isLoggedIn = false;
  if (session) {
    isLoggedIn = true;
  }

  return (
    <header
      className={`navbar fixed top-0 z-appBar max-h-[57px] min-h-[57px] flex-col items-center justify-center border-b border-solid border-gray-200 bg-base-100 bg-white p-0 shadow-none`}
      style={{ borderBottom: '1px solid #F0F0F0', height: '57px' }}
    >
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className="flex justify-start md:justify-center">
        <Image
          alt="alookso 얼룩소, a look at society"
          src="/logo_header.png"
          width={200}
          height={100}
          priority
          style={{
            height: '57px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </a>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '1rem',
          lineHeight: '57px',
          height: '57px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!session && (
          <>
            <a href={`/login`} className="">
              로그인
            </a>
          </>
        )}
        {session?.user && (
          <Image
            width={30}
            height={30}
            alt={session.user.name || ''}
            src={session.user.image || '/images/Avatar.png'}
            priority
            className="object-cover"
            style={{ borderRadius: '50%' }}
          />
        )}
      </div>
    </header>
  );
}

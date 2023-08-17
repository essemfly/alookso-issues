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
      <div
        className={`flex h-[57px] w-full grid-cols-main items-center md:grid-cols-3 xl:w-336 2xl:pr-0 ${
          isLoggedIn ? 'auto-rows-[25px] md:h-[67.2px] md:auto-rows-[35px]' : ''
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="flex justify-start md:justify-center">
          <Image
            alt="alookso 얼룩소, a look at society"
            src="/logo.svg"
            width={92}
            height={100}
            priority
          />
        </a>
        {!session && (
          <>
            <span className="notSignedInText">You are not signed in</span>
            <a
              href={`/api/auth/signin`}
              className=""
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a>
          </>
        )}
        {session?.user && (
          <>
            {session.user.image && (
              <span
                style={{ backgroundImage: `url('${session.user.image}')` }}
                className=""
              />
            )}
            <span className="">
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <a
              href={`/api/auth/signout`}
              className=""
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </>
        )}
      </div>
    </header>
  );
}

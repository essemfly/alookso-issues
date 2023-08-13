import { ReactNode, useMemo } from 'react';

import dynamic from 'next/dynamic';

import { Toaster } from 'react-hot-toast';

import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import ReactQueryErrorBoundary from '@/components/ErrorBoundary/ReactQueryErrorBoundary';
import { useUser } from '@/hooks/api/users/useUser';
import { useMainStore } from '@/store/store';

const Drawer = dynamic(() => import('@/components/Drawer/Drawer'));
const Header = dynamic(() => import('@/components/Header/Header'));
const MobileDrawer = dynamic(
  () => import('@/components/Drawer/SideList/SideList'),
);

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { uid } = useMainStore();
  const { data } = useUser({ uid });

  const userInfo = useMemo(
    () => ({
      hashId: data?.hashId ?? '',
      nickname: data?.snippet?.nickname ?? '',
      avatar: data?.snippet?.avatar ?? '',
      hasUnreadMessages: (data?.notifications?.unreadCount ?? 0) > 0,
      points: data?.payments?.pointBalance ?? 0,
    }),
    [data],
  );

  return (
    <ErrorBoundary>
      <ReactQueryErrorBoundary>
        <Drawer list={<MobileDrawer />}>
          <Toaster
            position="top-right"
            reverseOrder={false}
            containerStyle={{ top: 80 }}
          />
          <Header isLoggedIn={!!uid} userInfo={userInfo} />
          <div className={`${uid ? 'mt-16' : 'mt-14'} flex`}>
            <main className="flex grow justify-center">{children}</main>
          </div>
        </Drawer>
      </ReactQueryErrorBoundary>
    </ErrorBoundary>
  );
};

export default Layout;

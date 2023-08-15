import Header from './Header';
import type { ReactNode } from 'react';
import { Layout } from 'antd';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <Header />
      <div className={`mt-14 flex`}>
        <main className="flex grow justify-center">{children}</main>
      </div>
    </Layout>
  );
}

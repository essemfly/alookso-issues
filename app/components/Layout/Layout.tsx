import Header from './Header';
import type { ReactNode } from 'react';
import { Layout } from 'antd';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Layout style={{backgroundColor: 'white'}} >
      <Header />
      <div className={`mt-14`}>
        <main className="flex grow justify-center">{children}</main>
      </div>
    </Layout>
  );
}

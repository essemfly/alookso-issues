import '../styles/globals.css';
import 'antd/dist/reset.css';
import 'app/components/LexicalEditor/nodes/ImageNode.css';
import 'app/components/LexicalEditor/plugins/FloatingLinkEditorPlugin/index.css';
import 'app/components/LexicalEditor/themes/PlaygroundEditorTheme.css';
import 'app/components/LexicalEditor/ui/Placeholder.css';
import 'app/components/LexicalEditor/ui/ContentEditable.css';
import 'app/components/LexicalEditor/ui/Modal.css';
import 'app/components/LexicalEditor/ui/Dialog.css';
import 'app/components/LexicalEditor/ui/Input.css';
import 'app/components/LexicalEditor/ui/Button.css';
import 'app/components/LexicalEditor/ui/ColorPicker.css';
import 'app/components/LexicalEditor/index.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';
import * as gtag from '../lib/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js" />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <script
        defer
        src="https://developers.kakao.com/sdk/js/kakao.min.js"
      ></script>
      <SessionProvider session={pageProps.session}>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Layout>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Layout>
      </SessionProvider>
    </>
  );
}

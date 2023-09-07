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
import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

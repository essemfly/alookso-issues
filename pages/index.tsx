import Layout from '@/components/Layout/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <h1>MainPage</h1>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/issues',
      permanent: false,
    },
  };
};

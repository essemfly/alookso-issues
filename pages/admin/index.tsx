import Layout from "@/components/Layout/Layout";

const AdminMainPage = () => {
  return (
    <Layout>
      <h1>Admin MainPage</h1>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/admin/issues',
      permanent: false,
    },
  };
};

export default AdminMainPage;

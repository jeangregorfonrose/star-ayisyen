import AdminView from "@/components/adminView";
import Layout from "@/components/layout/layout";
import Head from "next/head";

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Star Ayisyen</title>
      </Head>
      <Layout>
        <AdminView />
      </Layout>
    </>
  );
}

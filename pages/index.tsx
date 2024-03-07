import Banner from "@/components/banner";
import Layout from "@/components/layout";
import StarList from "@/components/starList";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Ayisyen</title>
      </Head>
      <Layout>
        <Banner />
        <div className="main-container">
          <StarList />
        </div>
      </Layout>
    </>
  );
}

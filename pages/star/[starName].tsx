import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IStar } from "@/utils/interfaces";
import Layout from "@/components/layout";
import ProfileSection from "@/components/profileSection";
import Head from "next/head";

export default function Star() {
  const [star, setStar] = useState<IStar>();
  const router = useRouter();

  useEffect(() => {
    // if ( !localStorage.getItem("token") ) {
    //     router.push("/login");
    // };
  }, []);

  // return <h1>Id passed was {router.query.starName}</h1>
  return (
    <>
      <Head>
        <title>Star Ayisyen | {router.query.starName}</title>
      </Head>
      <Layout>
        <ProfileSection />
      </Layout>
    </>
  );
}

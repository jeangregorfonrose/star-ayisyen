import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IStar } from "@/utils/interfaces";
import Layout from "@/components/layout";
import ProfileSection from "@/components/profileSection";
import Head from "next/head";

export default function Star() {
  const [star, setStar] = useState<IStar>();
  const router = useRouter();

  const getStar = async () => {
    try {
      let res = await fetch("/api/star?id=" + router.query.id);

      if (!res.ok) throw new Error("Could not get star.");

      let resJson = await res.json();

      console.log(resJson.data);

      setStar(resJson.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStar();
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Star Ayisyen | {router.query.id}</title>
      </Head>
      <Layout>
        {star ? <ProfileSection star={star}/> : <div>Error getting star info</div> }
      </Layout>
    </>
  );
}

import Banner from "@/components/banner";
import Layout from "@/components/layout/layout";
import StarList from "@/components/starList";
import { IStar } from "@/utils/interfaces";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [stars, setStars] = useState<IStar[]>([]);

  // TODO: Change this request to get multiple stars based on different categorization and trends
  // Get all stars from the database
  const getStars = async () => {
    try {
      let res = await fetch("/api/stars");

      if (!res) throw new Error("Could not get artists.");

      let resJson = await res.json();

      console.log(resJson);

      setStars(resJson.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Get stars from database
  useEffect(() => {
    getStars();
  }, []);

  return (
    <>
      <Head>
        <title>Star Ayisyen</title>
      </Head>
      <Layout>
        <Banner />
        <div className="main-container">
          <StarList stars={stars.slice(0, 6)} />
        </div>
      </Layout>
    </>
  );
}

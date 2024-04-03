import Layout from "@/components/layout";
import { Plus } from "lucide-react";
import Head from "next/head";

function AdminView () {
  return (
    <div className="main-container">
      <div className="head">
        <input type="text" placeholder="Search for an artist"></input>
        <button>
          <Plus />
          Create new artist
        </button>
      </div>
      <div className="list"></div>
    </div>
  );
}



// Default component to export
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

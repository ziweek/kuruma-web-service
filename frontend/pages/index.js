import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Login from "../components/login/login";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TaBam</title>
        <meta name="description" content="TaBam" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* <Layout> */}
        <Login />
        {/* </Layout> */}
      </div>
    </div>
  );
}

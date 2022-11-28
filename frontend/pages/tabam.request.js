import Layout from "../components/layout";
import Register from "../components/register/register";
import Head from "next/head";

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

      <Layout>
        <div className="flex flex-col items-center justify-center">
          <Register className="flex" />
        </div>
      </Layout>
    </div>
  );
}

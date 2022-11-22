import Card from "../components/home/card";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex flex-col px-5 py-3">
            <Card />
          </div>
          <div className="flex flex-col px-5 py-3">
            <Card />
          </div>
        </div>
      </Layout>
    </>
  );
}

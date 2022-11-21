import Card from "../components/home/card";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <div className="px-5 py-3">
            <Card></Card>
          </div>
          <div className="px-5 py-3">
            <Card></Card>
          </div>
          <div className="px-5 py-3">
            <Card></Card>
          </div>
          <div className="px-5 py-3">
            <Card></Card>
          </div>
          <div className="px-5 py-3">
            <Card></Card>
          </div>
        </div>
      </Layout>
    </>
  );
}

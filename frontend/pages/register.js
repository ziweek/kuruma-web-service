import Layout from "../components/layout";
import Register from "../components/register/register";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <Register />
        </div>
      </Layout>
    </>
  );
}

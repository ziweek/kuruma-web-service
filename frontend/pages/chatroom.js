import Layout from "../components/layout";
import Card from "../components/chatroom/chatcard";
import Message from "../components/chatroom/message";

export default function ChatRoom() {
  return (
    <>
      <Layout>
        <div className="px-3 pl-10 py-5">
          <Card></Card>
        </div>
        <div className="px-3 pr-10 py-5">
          <Card></Card>
        </div>
      </Layout>
      <div className="flex z-10 min-h-screen">
        <Message />
      </div>
    </>
  );
}

import Layout from "../components/layout";
import Message from "../components/chatroom/message";
import ChatCard from "../components/chatroom/chatcard";

export default function ChatRoom() {
  return (
    <>
      <Layout>
        <div className="pb-20">
          <ChatCard type="send" />
          <ChatCard type="receive" />
          <ChatCard type="send" />
          <ChatCard type="receive" />
          <ChatCard type="send" />
          <ChatCard type="receive" />
          <ChatCard type="send" />
          <ChatCard type="receive" />
        </div>
        <div className="fixed bottom-0">
          <Message className="w-full" />
        </div>
      </Layout>
    </>
  );
}

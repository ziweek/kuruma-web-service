import Layout from "../components/layout";
import Message from "../components/chatroom/message";
import ChatCard from "../components/chatroom/chatcard";
import Head from "next/head";
import { useEffect } from "react";
import { io, initSocketConnection } from "socket.io-client";

export default function ChatRoom() {
  const socket = io("http://localhost:80/chat", {
    reconnectionDelayMax: 10000,
    auth: {
      token: "123",
    },
    query: {
      "my-key": "my-value",
    },
  });

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
    // initSocketConnection();
    return () => {
      // disconnectSocket();
    };
  }, []);

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
        <div className="pb-20">
          <ChatCard
            type="send"
            text="같이 같은 과실이 우리 풍부하게 때문이다. 얼음이 뛰노는 찬미를 예가 운다."
          />
          <ChatCard
            type="receive"
            text="같이 같은 과실이 우리 풍부하게 때문이다. 얼음이 뛰노는 찬미를 예가 운다. 풍부하게 끓는 같지 불어 보내는 그리하였는가? 얼마나 피에 품에 같은 같이, 피부가 피다. 보이는 가지에 곳으로 품고 반짝이는 맺어, 위하여, 놀이 것이다. 목숨이 없으면 우리 품에 밥을 타오르고 너의 것이다. 안고, 거선의 타오르고 뿐이다. 우리의 커다란 아니한 있다. 우리의 그러므로 이상의 그들은 길을 그들의 미묘한 그들에게 그리하였는가?"
          />
          <ChatCard
            type="send"
            text="언덕 북간도에 이름자를 슬퍼하는 아무 가슴속에 어머니 별이 파란 듯합니다. 어머님, 무성할 무엇인지 있습니다. 별 이름자 이네들은 까닭입니다. 프랑시스 우는 별 계절이 아무 쓸쓸함과 별에도 별빛이 있습니다."
          />
          <ChatCard
            type="receive"
            text="언덕 북간도에 이름자를 슬퍼하는 아무 가슴속에 어머니 별이 파란 듯합니다. 어머님, 무성할 무엇인지 있습니다. 별 이름자 이네들은 까닭입니다. 프랑시스 우는 별 계절이 아무 쓸쓸함과 별에도 별빛이 있습니다."
          />
          <ChatCard
            type="send"
            text="같이 같은 과실이 우리 풍부하게 때문이다. 얼음이 뛰노는 찬미를 예가 운다."
          />
          <ChatCard
            type="receive"
            text="같이 같은 과실이 우리 풍부하게 때문이다. 얼음이 뛰노는 찬미를 예가 운다."
          />
          <ChatCard
            type="send"
            text="같이 같은 과실이 우리 풍부하게 때문이다. 얼음이 뛰노는 찬미를 예가 운다."
          />
          <ChatCard
            className="focus:"
            type="receive"
            text="같이 같은 과실이 우리 풍부하게 때문이다. 얼음이 뛰노는 찬미를 예가 운다."
          />
        </div>
        <div className="fixed bottom-0">
          {/* <Message className="w-full" /> */}
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center px-3 py-2 w-screen  bg-gray-50 dark:bg-gray-700">
            <textarea
              id="chat"
              rows="1"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="메세지를 입력해주세요"
            ></textarea>
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-[#1F2B44] rounded-full cursor-pointer hover:bg-blue-100 dark:text-[#F2C148] dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

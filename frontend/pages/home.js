import Card from "../components/home/card";
import Layout from "../components/layout";
import Head from "next/head";
import PostDetail from "../components/home/postDetail";
import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import dynamic from "next/dynamic";
import axios from "axios";

export default function Home(props) {
  const { posts } = props;
  const [Posts, setPosts] = useState([]);
  const [isVisibleForBottomDrawer, setisVisibleForBottomDrawer] =
    useState(false);
  const [PostKey, setPostKey] = useState(0);

  const toggleDrawer = async (key) => {
    await setPostKey(key);
    await setisVisibleForBottomDrawer(!isVisibleForBottomDrawer);
  };

  // const convertToArray = (text) => {
  //   const targetText = text
  //     .replace("[", "")
  //     .replace("]", "")
  //     .replace("},{", "}---{");
  //   const arr = targetText.split("---");
  //   return arr;
  // };

  const postAPI = async () => {
    console.log(posts);
    // const postsFromServer = await axios.get("http://localhost:3000/sharings");
    // const targetData = Array.from(postsFromServer);
    // await setPosts(targetData);
    // await console.log(typeof postsFromServer.request.response);
    // await console.log(postsFromServer.request.response);
    // await console.log(typeof targetData);
    // await console.log(targetData);
    // await console.log(convertToArray(postsFromServer.request.response)[0]);
    // const obj = await JSON.parse(
    //   convertToArray(postsFromServer.request.response)[0]
    // );
    // await console.log(obj);
  };

  useEffect(() => {
    postAPI();
  }, []);

  return (
    <div>
      <Head>
        <title>TaBam</title>
        <meta name="description" content="TaBam" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        onClick={() => toggleDrawer(0)}
        className={
          isVisibleForBottomDrawer
            ? "flex fixed block bg-black/50 z-10 min-h-screen w-full"
            : "flex fixed hidden bg-black/50 z-10 min-h-screen w-full"
        }
      ></div>

      <Layout>
        <div className="flex flex-col items-center justify-center  z-0">
          {posts.map((e, i) => (
            <div key={i} className="flex flex-col px-5 py-3">
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {e["title"]}
                  </h5>
                </a>

                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                  출발 - 안암역
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                  도착 -신당역
                </span>
                {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  남성전용
                </span> */}
                {/* <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Dark
        </span>
        <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
          Red
        </span>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
          Yellow
        </span>
        <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
          Purple
        </span> */}
                {/* <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">
                  여성전용
                </span> */}

                <p className="pt-2.5 mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {e["content"]}
                </p>
                <div className="flex flex-row justify-end">
                  <a
                    onClick={() => toggleDrawer(i)}
                    // href="/chatroom"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    합승 신청하기
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="fixed bottom-0 z-20 w-full">
            <div className={isVisibleForBottomDrawer ? "block" : "hidden"}>
              <div
                id="drawer-bottom-example"
                className="z-40 w-full p-4 overflow-y-auto bg-white dark:bg-gray-800"
                tabIndex="-1"
                aria-labelledby="drawer-bottom-label"
              >
                <h5
                  id="drawer-bottom-label"
                  className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {posts[PostKey].title}
                </h5>
                <button
                  onClick={() => toggleDrawer(0)}
                  type="button"
                  data-drawer-dismiss="drawer-bottom-example"
                  aria-controls="drawer-bottom-example"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>
                <p className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
                  {posts[PostKey].content}
                </p>
                <div className="text-right">
                  <a
                    href="#"
                    className="px-4 py-2 mr-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    타밤 신청하기
                  </a>
                  <a
                    href="/chatroom"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    타밤 입장하기
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/sharings");

  return {
    props: {
      posts: response.data,
    },
  };
}

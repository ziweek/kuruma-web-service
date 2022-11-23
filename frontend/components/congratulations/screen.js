import ConfirmAnimation from "../animations/confirm";

export default function Screen() {
  return (
    <>
      <div className="flex bg-[#1F2B44] min-h-screen item-center justify-center">
        <div className="flex flex-col item-center justify-center text-white text-center z-0">
          <ConfirmAnimation />
          <h1 className="text-[#F2C148] text-4xl font-bold py-5">TABAM</h1>
          <h2 className="text-gray-300 text-2xl font-bold">
            가입을 축하합니다.
          </h2>
        </div>
        <div className="fixed bottom-0 pb-10">
          <button
            type="submit"
            className="w-full text-white bg-[#1F2B44] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            // onClick={loginAPI}
          >
            <a href="/home">다음으로 넘어가기</a>
          </button>
        </div>
      </div>
    </>
  );
}

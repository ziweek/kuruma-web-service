export default function ChatCard(prop) {
  return (
    <>
      <div>
        <div
          className={
            prop.type === "receive"
              ? "flex px-3 pr-10 py-5 items-center justify-start"
              : "flex px-3 pl-10 py-5 items-center justify-end"
          }
        >
          <div
            className={
              prop.type === "receive"
                ? "bg-[#CBCDD1] max-w-sm p-3 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                : "bg-[#F2C148] max-w-sm p-3 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            }
          >
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {prop.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

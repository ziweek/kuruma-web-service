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
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

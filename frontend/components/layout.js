import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="fixed w-full">
          <Header className="flex" />
        </div>
        <div className="py-20">{children}</div>
      </div>
    </>
  );
}

import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="fixed">
        <Header></Header>
      </div>
      <div>{children}</div>
    </>
  );
}

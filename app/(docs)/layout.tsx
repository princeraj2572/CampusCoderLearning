import Sidebar from "../../components/Sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
}

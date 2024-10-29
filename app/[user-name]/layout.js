import Sidebar from "../_components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-8 bg-theme_blue-50 text-theme_blue-100 justify-between px-12">
      <div className="col-start-1 col-end-3 h-screen flex ">
        <Sidebar />
      </div>
      <div className="p-4 col-start-3 h-screen col-end-9 w-full overflow-y-scroll   ">
        {children}
      </div>
    </div>
  );
}

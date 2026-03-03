import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import MobileNav from "../components/dashboard/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
       <aside className=" w-64 shadow-sm border z-20 min-h-screen hidden lg:block">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <header>
          <Header />
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 p-4 lg:p-6  overflow-y-auto bg-[#F5F5F5] pb-32 lg:pb-10">
          {children}
        </main>

        <MobileNav />
      </div>
    </div>
  );
}
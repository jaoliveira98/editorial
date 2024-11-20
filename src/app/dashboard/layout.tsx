import SidebarNavigation from "@/components/navigation/sidebar-navigation";
import { dashboardItems } from "@/config/navigation";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="bg-zinc-50 font-sans">
        <div className="flex">
          <SidebarNavigation items={dashboardItems} />
          <div className="w-full overflow-auto">
            <div className="container mx-auto max-h-screen px-4">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
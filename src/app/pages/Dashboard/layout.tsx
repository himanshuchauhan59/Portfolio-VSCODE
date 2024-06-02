import type { Metadata } from "next";
// import "../globalPage.css";
import Header from "@/app/component/Header/header";
import SideBarIconsOnly from "@/app/component/Sidebar-Icons/sidebar";
import SideBarFiles from "@/app/component/Sidebar-files/sidebar";
import Footer from "@/app/component/footer/footer";
import HeaderFiles from "@/app/component/File-Open-Header/header";
import FileState from "@/app/context/FileState";
export const metadata: Metadata = {
    title: "Himanshu",
    description: "Himanshu is available here.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {/* top section for header or title bar */}
                <FileState>
                    <div className="title-bar">
                        <Header></Header>
                    </div>
                    <div className="main-section h-[calc(100vh_-_56px)] flex items-start">
                        <div className="w-[40px] h-full sidebar-icons-only">
                            <SideBarIconsOnly></SideBarIconsOnly>
                        </div>
                        <div className="w-[240px] h-full">
                            <SideBarFiles></SideBarFiles>
                        </div>
                        <div className="w-[calc(100%_-_280px)] h-full">
                            <HeaderFiles></HeaderFiles>
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="footer-section">
                        <Footer></Footer>
                    </div>
                </FileState>
            </body>
        </html>
    );
}

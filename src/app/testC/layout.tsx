import Header from "@/components/header";
import MenuContainer from "@/containers/test-c/menu-container";
import UrlContextProvider from "@/context/url-context-provider";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${inter.className} h-svh`}>
      <Header />
      <div className="grid h-full grid-cols-[257px_1fr] gap-6 overflow-auto px-5">
        <MenuContainer />
        <div className="">
          <UrlContextProvider>{children}</UrlContextProvider>
        </div>
      </div>
    </div>
  );
};

export default layout;

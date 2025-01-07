import FormTestB from "@/containers/test-b/form-test-b";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

const Page = () => {
  return (
    <div
      className={`${inter.className} mb-[136px] mt-[57px] flex justify-center`}
    >
      <FormTestB />
    </div>
  );
};

export default Page;

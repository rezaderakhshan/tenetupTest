import { Input } from "@/components/ui/input";
import Image from "next/image";
import glass from "@/../public/images/magnifyingGlass.png";
import ChartContainer from "@/containers/test-c/blog/chart-container";
import ChartHeader from "@/containers/test-c/blog/chart-header";

import BlogDrawer from "@/containers/test-c/blog/blog-drawer";
const Page = () => {
  return (
    <div className="mt-5 rounded-[12px] border border-[#E4E4E7] px-[42px] pb-[46px] pt-7">
      <div className="flex w-full justify-between">
        <h1 className="mb-[15px] text-2xl font-bold">Blog List</h1>
        <BlogDrawer label={"Canoncial"} />
      </div>
      <div className="relative mb-4 w-[256px]">
        <Input
          type="search"
          placeholder="Blog..."
          className="rounded-[4px] py-[11px] pl-9 focus-visible:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Image
          src={glass}
          alt="magnifying glass"
          className="pointer-events-none absolute left-[14.5px] top-[12.5px]"
        />
      </div>
      <ChartContainer />
    </div>
  );
};
<ChartHeader />;
export default Page;

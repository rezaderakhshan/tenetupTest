"use client";
import useUrlContext from "@/hook/useUrlContext";
import ChartHeader from "./chart-header";
import ChartItems from "./chart-items";
import { Turl } from "@/types/types";

const ChartContainer = () => {
  const { urls } = useUrlContext();
  return (
    <div className="max-w-[1112px] overflow-auto rounded-[4px] border border-[#E4E4E7]">
      <ChartHeader />

      {urls.length > 0
        ? urls.map((url: Turl) => <ChartItems key={url.id} urlObj={url} />)
        : null}
    </div>
  );
};

export default ChartContainer;

import { Turl } from "@/types/types";

const ChartItems = ({ urlObj }: { urlObj: Turl }) => {
  return (
    <div className="grid grid-cols-[52px_108px_111px_294px_148px_148px_148px] items-center py-[6.5px] pl-5 text-base font-normal text-[#71717A]">
      <div className="py-3">01</div>
      <div className="py-3">
        <span className="block h-10 w-10 bg-[#D9D9D9]"></span>
      </div>
      <div className="py-3">English</div>
      <div className="py-3">{urlObj.url}</div>
      <div className="py-3">Beauty</div>
      <div className="py-3">Technology</div>
    </div>
  );
};

export default ChartItems;

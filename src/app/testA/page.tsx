import Image from "next/image";
// import "../../globals.css";
const Page = () => {
  return (
    <div className="font- flex justify-center">
      <div className="relative mb-[129px] mt-[145px] h-[777px] w-[909px]">
        <Image
          src={"/images/fashion.png"}
          fill
          alt="fashion"
          className="object-contain object-bottom"
        />
        <div className="absolute bottom-0 left-0 flex flex-col items-start">
          <p className="relative mb-[-20px] flex h-[133px] w-[209px] items-center rounded-tr-[20px] bg-white pl-[33px] text-[52px] font-bold italic leading-[59.79px]">
            Make
            <span className="absolute bottom-[16px] right-[-25px] inline-block h-[42px] w-[40px] rounded-full bg-white" />
            <span className="absolute bottom-[20px] right-[-39.9px] inline-block h-[40px] w-[40px] rounded-bl-[20px] bg-[#4B121E]" />
          </p>

          <p className="relative w-[346px] rounded-tr-[20px] bg-white py-[6px] pl-[33px] text-[52px] font-bold italic">
            your Own
            <span className="absolute bottom-[-12px] right-[-25px] inline-block h-[42px] w-[40px] rounded-full bg-white" />
            <span className="absolute bottom-[-0px] right-[-29.9px] inline-block h-[30px] w-[30px] rounded-bl-[20px] bg-[#38151C]" />
          </p>
          <p className="rounded-tr-[20px] bg-white pb-[27px] pl-[33px] pr-[73px] pt-[23px] text-[52px] font-bold italic">
            <span className="font-[900]">Style</span> unique ...
            <span className="absolute bottom-[-12px] right-[-25px] inline-block h-[42px] w-[40px] rounded-full bg-white" />
            <span className="absolute bottom-[-0px] right-[-30.6px] inline-block h-[30px] w-[30px] rounded-bl-[20px] bg-[#5A5250]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-start gap-2 border border-[#E4E4E7] p-5">
      <Image
        src="/images/icon.png"
        alt="tenet up icon"
        width={47}
        height={42}
      />
      <p className="text-sm font-bold">Tenet Up</p>
    </div>
  );
};

export default Header;

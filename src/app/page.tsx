import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center gap-4 h-screen items-center">
      <Link href="/testA">Test A</Link>
      <Link href="/testB">Test B</Link>
      <Link href="/testC">Test C</Link>
    </div>
  );
};

export default Home;

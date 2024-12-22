import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        className="dark:invert"
        src="/logo.svg"
        alt="Next.js logo"
        width={280}
        height={280}
        priority
      />
    </div>
  );
}

import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={logo} alt="Logo Frontend Lovers" width={280} height={280} />
    </div>
  );
}

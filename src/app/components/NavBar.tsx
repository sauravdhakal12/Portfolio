import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMoon } from "react-icons/ai";
import { AiOutlineSun } from "react-icons/ai";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex justify-between w-[700px] mx-auto h-20 items-center">
      {/* Title */}
      <div className="flex gap-2 items-center ">
        <Link href={"/"} className="text-xl hover:scale-105">
          <Image
            alt="logo"
            src="/logo.png"
            width={100} height={10}
            className="rounded-full h-16 w-24"
          />
        </Link>
      </div>

      {/* Nav */}
      <div className="flex items-center gap-4">
        <span className="hover:text-gray-400">Blog </span>
        <AiFillMoon size={"20"} />
        <AiOutlineSun size={"20"} />
      </div>

      {/* Connect */}
      <div className="flex gap-2">
        <Link
          className="hover:text-gray-400"
          href={"https://www.github.com/sauravdhakal12"} target="_blank">
          <AiFillGithub size={"25"} />
        </Link>
        <Link
          className="hover:text-gray-400"
          href={"https://www.linkedin.com/in/saurav-dhakal-9a8b27220/"} target="_blank">
          <AiFillLinkedin size={"25"} />
        </Link>
      </div>
    </nav>
  )
}

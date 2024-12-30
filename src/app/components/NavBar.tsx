import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const navMenu = [
  {
    id: 1,
    name: "Home",
    href: "/"
  },
  {
    id: 2,
    name: "Posts",
    href: "/blog"
  }
]


export default function NavBar() {
  return (
    <nav className="flex justify-between max-w-3xl mx-auto h-14 lg:h-20 items-center">
      {/* Title */}
      {/* <div className="flex gap-2 items-center ">
        <Link href={"/"} className="text-xl hover:scale-105">
          <Image
            alt="logo"
            src="/logo.png"
            width={100} height={10}
            className="rounded-full h-12 w-16 lg:h-16 lg:w-24"
          />
          SAURAV
        </Link>
      </div> */}

      {/* Nav */}
      <div className="flex items-center gap-4 lg:mt-1.5">
        {navMenu.map((menu) => (
          <Link key={menu.id} href={menu.href} className="hover:text-gray-400">{menu.name}</Link>
        ))}
      </div>

      {/* Connect */}
      <div className="flex gap-2 items-center">
        <div className="hidden lg:flex items-center gap-3 bg-[#222222] px-4 py-1.5  ring-0 ring-gray-600 rounded-full ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-[#222222] active:border-none outline-none"
          />
        </div>
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

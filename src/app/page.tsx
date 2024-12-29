import Link from "next/link";

export default function HomePage() {
  return (
    <article className="">
      <div className="mb-10">
        <div className="flex items-end">
          <h1 className="text-4xl font-bold w-fit mb-1">Hey &#x1F44B;, I&apos;m Saurav Dhakal </h1>
          {/* <p className="text-gray-400 text-xl mb-1">(सौरभ ढकाल)</p> */}
        </div>
        <p className="text-gray-400">An aspiring Web Developer</p>
      </div>

      <p className="about">
        A final-year Software Engineering student from Nepal, currently working as a Backend Intern at Void Nepal.
      </p>
      <p className="about">
        I&apos;m passionate about software architecture and solving complex problems. I love learning new technologies and implementing them in projects.
      </p>
      {/* <p className="about">
        When I'm not coding,I spend my time reading novels(currently The Idiot), listining to music and ocassionally playing games. I also enjoy travelling.
      </p> */}
      <p className="about">
        Checkout my <Link href={"/CV.pdf"} className="bg-[#2B4555] rounded px-2">CV</Link> for more of my works.
      </p>

      <p className="about">
        I will be sharing my learnings and experiences here related to anything backend or whatever I&apos;m into at the moment.
      </p>

      <h1 className="text-xl font-bold mt-14">Contact</h1>
      <p className="about">Feel free to reach out at:  <Link href={"mailto:sauravdhakal121@gmail.com"} className="bg-[#2B4555] rounded px-2">saravdhakal121@gmail.com</Link></p>
    </article>
  )
}

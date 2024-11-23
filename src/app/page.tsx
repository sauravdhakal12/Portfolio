import Link from "next/link";

export default function HomePage() {
  return (
    <article className="h-full max-w-[700px] mx-auto pt-36 pb-28">
      <div className="mt-4 mb-10">
        <div className="flex items-end">
          <h1 className="text-3xl font-extrabold w-fit mb-1">Hey &#x1F44B;, I'm Saurav Dhakal </h1>
        </div>
          {/* <p className="text-gray-400 text-xl mb-0.5">(सौरभ ढकाल)</p> */}
        <p className="text-gray-400">An aspiring Web Developer</p>
      </div>
      <p className="about">
        A final-year Software Engineering student from Nepal, currently working as a Backend Intern at Void Nepal.
      </p>
      <p className="about">
        I'm passionate about software architecture and solving complex problems. I love learning new technologies and implementing them in projects.
      </p>
      <p className="about">
        When I'm not coding, you can find me reading novels(currently The Idiot), listining to music and ocassionally playing games. I also enjoy travelling.
      </p>
      <p className="about">
        Checkout my <Link href={"/CV.pdf"} className="bg-[#2B4555] rounded px-2">resume</Link> for more of my works.
      </p>

      <p>

        Through this site, I will be sharing my thoughts and insights on software engineering, specially JavaScript, TypeScript, Express, and web technologies in general.
      </p>

      <h1 className="text-xl font-bold mt-14">Contact</h1>
      <p className="about">Feel free to reach out at:  <Link href={"mailto:sauravdhakal121@gmail.com"} className="bg-[#2B4555] rounded px-2">saravdhakal121@gmail.com</Link></p>
    </article>
  )
}

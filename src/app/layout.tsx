import NavBar from "./components/NavBar";
import localFont from 'next/font/local';

// import { Work_Sans } from "next/font/google";

import "./globals.css";

const iWriter = localFont({
  src: "./fonts/iAWriterQuattroV.ttf",
  weight: "200",
});

// const logoFont = Work_Sans({
//   weight: "400",
//   subsets: ["latin"]
// })

export default function RootLayout({ children }: {
  children: React.ReactElement,
}) {

  return (
    <html>
      <body className={"bg-[#101010] text-[#fff] " + iWriter.className}>
        <header className="px-5 lg:px-0 fixed w-full h-14 lg:h-20 backdrop-blur-lg">
          <NavBar />
        </header>
        <main className="px-5 lg:px-0 pt-28 lg:pt-36 pb-28 h-full max-w-3xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}

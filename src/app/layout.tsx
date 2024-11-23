import NavBar from "./components/NavBar";
import localFont from 'next/font/local';

import { Work_Sans } from "next/font/google";

import "./globals.css";

const iWriter = localFont({
  src: "./fonts/iAWriterQuattroV.ttf",
  weight: "200",
});

export const logoFont = Work_Sans({
  weight: "400"
})

export default function RootLayout({ children }: {
  children: React.ReactElement,
}) {

  return (
    <html>
      <body className={"h-screen m-auto bg-[#101010] text-[#fff] " + iWriter.className}>
        <header className="fixed w-full h-20 backdrop-blur-lg">
          <NavBar />
        </header>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  )
}

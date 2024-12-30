import NavBar from "./components/NavBar";
import localFont from 'next/font/local';
import type {
  Metadata,
} from 'next'
import {
  GoogleAnalytics,
} from "@next/third-parties/google";

import "./globals.css";

const iWriter = localFont({
  src: "./fonts/iAWriterQuattroV.ttf",
  weight: "200",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sauravdhakal.com.np"),
  keywords: ["SauravDhakal", " Saurav Dhakal Blogs"],
  title: {
    default: "SauravDhakal",
    template: "%s | SauravDhakal"
  },
  openGraph: {
    description: `
      A final-year Software Engineering student from Nepal, currently working as a Backend Intern at Void Nepal.
      I will be sharing my learnings and experiences here related to anything backend or whatever I'm into at the moment
    `,
    images: [""]
  }
};

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
      <GoogleAnalytics gaId="G-LC1SB78G7R" />
    </html>
  )
}

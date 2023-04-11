import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pop",
  display: "swap",
});

export const metadata = {
  title: "Testing and Learning Next App",
  description: "Learning .........",
  keywords: ["nextjs13", "react", "ssc", "nextjsappdir"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="bg-black font-pop">
        <h1 className=" text-white ">global layout placeholder</h1>
        {children}
      </body>
    </html>
  );
}

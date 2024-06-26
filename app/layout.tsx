import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { PropsWithChildren } from "react";
import Header from "./_components/Header";
import ReservationContextProvider from "./_components/ReservationContext";

type RootLayoutProps = PropsWithChildren;

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | to wild oasis",
  },
  description:
    "Luxurious cabin hotel located in the heart of italian Dolomites, surrounded by beautiful mountain and dark forest ",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} antialiased bg-primary-950 text-primary-100 min-h-dvh flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationContextProvider>{children}</ReservationContextProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

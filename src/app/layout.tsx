import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import classNames from 'classnames';
import MenuBar from '@/components/MenuBar';

const inter = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp" className='h-full' data-theme='dark'>
      <body className={classNames(inter.className, 'h-full', 'flex', 'flex-col')}>
        <MenuBar/>
        <main className='w-full h-full'>
          {children}
        </main>
      </body>
    </html>
  );
}

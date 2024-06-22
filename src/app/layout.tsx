import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import classNames from 'classnames';
import MenuBar from '@/components/MenuBar';

const inter = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Etwas Server Assistant",
  description: "えとわす鯖住人のためのページ",
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
        <main className='w-full h-full overflow-auto'>
          {children}
        </main>
        <span className='fixed bottom-0 right-0 text-sm'>1.0.0-alpha</span>
      </body>
    </html>
  );
}

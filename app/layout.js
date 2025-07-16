import './globals.css';
import { Inter } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { ControlPanel } from '@/components/control-panel';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Harper Digital Commerce</title>
      </head>
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <ControlPanel />
      </body>
    </html>
  );
}

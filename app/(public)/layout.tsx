import '@/app/globals.css';
import { ReactNode } from 'react';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ClientOnly from '@/components/client-only';

export const metadata = {
  title: 'Saviour',
  description: 'Be The Life Saver',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ClientOnly>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ClientOnly>
      </body>
    </html>
  );
}

import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Saviour',
  description: 'Be The Life Saver',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
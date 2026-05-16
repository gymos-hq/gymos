import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GymOS',
  description: 'منصة إدارة الصالات الرياضية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo bg-navy-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BWClient - Financial Advisory CMS',
  description: 'Client management system for UK financial advice firms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}

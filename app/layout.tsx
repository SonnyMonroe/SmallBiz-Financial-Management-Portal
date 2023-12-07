import '@/app/ui/global.css';
import { kreon } from '@/app/ui/fonts';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    template: '%s | Small Business Invoice Tracker',
    default: 'The Boston Block',
  },
  description: 'Small Business Finance & Invoice Tracker.',
  metadataBase: new URL('https://small-biz-financial-management-portal.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kreon.className} antialiased`}>{children}</body>
    </html>
  );
}
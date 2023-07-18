// Imports
// Component imports
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import GithubCorner from '@/components/GithubCorner';

// Style imports
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js CRUD',
  description: 'A Next.js CRUD application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <GithubCorner />
        <div className="max-w-3xl mx-auto px-6 py-12">
          <Sidebar />
        </div>
        <div className="max-w-3xl mx-auto">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}

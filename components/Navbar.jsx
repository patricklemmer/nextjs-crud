// Imports
// Next.js imports
import Link from 'next/link';

// Component imports
import AddButton from './AddButton';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#222831] px-8 py-3 mt-4 rounded">
      <Link href={'/'} className="text-[#00ADB5] font-bold">
        NextJS CRUD Demo
      </Link>
      <AddButton />
    </nav>
  );
}

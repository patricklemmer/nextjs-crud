import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#222831] px-8 py-3 mt-4 rounded">
      <Link href={'/'} className="text-[#00ADB5] font-bold">
        NextJS CRUD Demo
      </Link>
      <Link
        href={'/add-topic'}
        className="bg-[#eee] text-[#333] py-2 px-4 rounded"
      >
        Add a topic
      </Link>
    </nav>
  );
}

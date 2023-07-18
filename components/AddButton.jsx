// Imports
// Next.js imports
import Link from 'next/link';

export default function AddButton() {
  return (
    <Link
      href={'/add-topic'}
      className="bg-[#eee] text-[#333] py-2 px-4 rounded"
    >
      Add a topic
    </Link>
  );
}

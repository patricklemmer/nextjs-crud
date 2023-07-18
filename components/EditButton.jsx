'use client';

// Imports
// Next.js imports
import Link from 'next/link';

// Dependncy imports
import { HiPencilAlt } from 'react-icons/hi';

export default function EditButton({ id }) {
  return (
    <Link href={`/edit-topic/${id}`}>
      <HiPencilAlt size={24} />
    </Link>
  );
}

'use client';

// Imports

// Next.js imports
import { useRouter } from 'next/navigation';

// Dependency imports
import { HiOutlineTrash } from 'react-icons/hi';

export default function RemoveButton({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm('Are you sure you want to remove this topic?');

    if (confirmed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}

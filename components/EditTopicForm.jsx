'use client';

// Imports

// Next.js imports
import { useRouter } from 'next/navigation';

// React imports
import { useState } from 'react';

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error('Failed to update the topic');
      }

      router.refresh();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        className="border border-[#efefef] px-8 py-2 rounded"
        placeholder="Topic Title"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        className="border border-[#efefef] px-8 py-2 rounded"
        placeholder="Topic Description"
      />
      <button
        type="submit"
        className="bg-[#00ADB5] font-bold text-[#eee] py-3 px-6 w-fit rounded"
      >
        Update Topic
      </button>
    </form>
  );
}

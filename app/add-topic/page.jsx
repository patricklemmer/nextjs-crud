'use client';

// Imports

// Next.js imports
import { useRouter } from 'next/navigation';

// React imports
import { useState } from 'react';

export default function AddTopic() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required.');
      return;
    }

    try {
      const res = await fetch('/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.refresh();
        router.push('/');
      } else {
        throw new Error('Failed to create a topic');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="border border-[#efefef] px-8 py-2 rounded"
        placeholder="Topic Title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        className="border border-[#efefef] px-8 py-2 rounded"
        placeholder="Topic Description"
      />
      <button
        type="submit"
        className="bg-[#00ADB5] font-bold text-[#eee] py-3 px-6 w-fit rounded"
      >
        Add Topic
      </button>
    </form>
  );
}

import React from 'react';
import Link from 'next/link';

function AddButton() {
  return (
    <Link
      href={'/add-topic'}
      className="bg-[#eee] text-[#333] py-2 px-4 rounded"
    >
      Add a topic
    </Link>
  );
}

export default AddButton;

'use client';

import React from 'react';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

export default function EditButton({ id }) {
  return (
    <Link href={`/edit-topic/${id}`}>
      <HiPencilAlt size={24} />
    </Link>
  );
}

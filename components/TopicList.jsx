import Link from 'next/link';
import RemoveButton from './RemoveButton';
import { HiPencilAlt } from 'react-icons/hi';

export default function TopicList() {
  return (
    <>
      <div className="p-4 border border-[#efefef] bg-white my-3 flex justify-between gap-5 rounded items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div className="flex gap-2">
          <RemoveButton />
          <Link href={'/edit-topic/123'}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}

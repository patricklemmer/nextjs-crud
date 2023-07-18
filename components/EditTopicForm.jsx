import React from 'react';

export default function EditTopicForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className="border border-[#efefef] px-8 py-2 rounded"
        placeholder="Topic Title"
      />
      <input
        type="text"
        className="border border-[#efefef] px-8 py-2 rounded"
        placeholder="Topic Description"
      />
      <button className="bg-[#00ADB5] font-bold text-[#eee] py-3 px-6 w-fit rounded">
        Update Topic
      </button>
    </form>
  );
}

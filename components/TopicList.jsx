// Imports
// Component imports
import RemoveButton from './RemoveButton';
import EditButton from './EditButton';

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topics');
    }

    return res.json();
  } catch (error) {
    console.log('Error fetching topics: ', error);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((topic) => (
        <div
          className="p-4 border border-[#efefef] bg-white my-3 flex justify-between gap-5 rounded items-start"
          key={topic._id}
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveButton id={topic._id} />
            <EditButton id={topic._id} />
          </div>
        </div>
      ))}
    </>
  );
}

'use client';

//Imports
// Dependency imports
import { Card, Text, Button } from '@nextui-org/react';
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi';

function Sidebar() {
  return (
    <Card
      css={{
        background: '#f9f9f9',
        color: '#333',
        paddingBlock: '4px',
        paddingInline: '16px',
      }}
    >
      <Card.Body>
        <Text className="mb-5">
          This Next.js 13 demo app has full CRUD functionality. You can add,
          view, update and delete topics in the list below. All topics are
          stored in and retrieved from a MongoDB database.
        </Text>
        <Text className="flex gap-2 mb-3 items-center">
          Click
          <Button
            css={{
              px: '$6',
              py: '$8',
              color: '#333',
              background: '#eee',
              borderRadius: '3px',
            }}
            size="xs"
          >
            Add a topic
          </Button>
          to add a new topic.
        </Text>
        <Text className="flex gap-2 items-center mb-3">
          Click
          <HiOutlineTrash size={20} className="text-red-400" />
          to delete a topic.
        </Text>
        <Text className="flex gap-2 items-center">
          Click
          <HiPencilAlt size={20} />
          to update a topic.
        </Text>
      </Card.Body>
    </Card>
  );
}

export default Sidebar;

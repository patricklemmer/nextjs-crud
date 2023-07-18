// Imports

// Next.js imports
import { NextResponse } from 'next/server';

// Database imports
import connectMongoDB from '@/libs/mongodb';
import Topic from '@/models/topic';

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json(
    { message: 'Topic created successfully' },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: 'Topic deleted successfully' },
    { status: 200 }
  );
}

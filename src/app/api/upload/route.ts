import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const file = formData.get('file') as File;

    if (!title || !category || !file) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Upload file to a storage service (e.g., AWS S3)
    // For now, we'll just store the file name
    const fileType = file.type.startsWith('image/') ? 'image' : 'pdf';
    const fileName = `${Date.now()}-${file.name}`;

    const client = await clientPromise;
    const db = client.db('hukuk-notlari');
    const collection = db.collection('notes');

    await collection.insertOne({
      title,
      category,
      fileName,
      fileType,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

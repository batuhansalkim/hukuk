import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const description = formData.get('description') as string;

    if (!file || !title || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Geçici olarak başarılı yanıt dönüyoruz
    // MongoDB entegrasyonu daha sonra eklenecek
    return NextResponse.json({
      success: true,
      message: 'File upload simulation successful',
      data: {
        title,
        category,
        description,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type
      }
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

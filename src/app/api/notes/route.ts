import { NextResponse } from 'next/server';

// Geçici olarak sabit veri kullanıyoruz
const dummyNotes = {
  'ceza-hukuku': [
    {
      _id: '1',
      title: 'Ceza Hukuku Genel Hükümler',
      category: 'ceza-hukuku',
      fileUrl: '#',
      fileType: 'pdf',
      createdAt: new Date().toISOString(),
      description: 'Ceza hukuku genel hükümler ders notu'
    }
  ]
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    if (!category) {
      return NextResponse.json(
        { error: 'Category parameter is required' },
        { status: 400 }
      );
    }

    // MongoDB yerine sabit veriyi döndürüyoruz
    const notes = dummyNotes[category as keyof typeof dummyNotes] || [];
    
    return NextResponse.json({ notes });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

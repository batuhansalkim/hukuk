import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import clientPromise from '@/app/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const description = formData.get('description') as string;

    if (!file || !title || !category || !description) {
      return NextResponse.json(
        { error: 'Eksik bilgi' },
        { status: 400 }
      );
    }

    // Dosya adını güvenli hale getir
    const fileName = file.name.toLowerCase().replace(/[^a-z0-9.]/g, '-');
    
    // Dosyayı kaydet
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // public/docs klasörüne kaydet
    const filePath = join(process.cwd(), 'public', 'docs', fileName);
    await writeFile(filePath, buffer);

    // Veritabanına kaydetme işlemi
    const client = await clientPromise;
    const db = client.db('hukuk-notlari');
    const collection = db.collection('notes');

    await collection.insertOne({
      title,
      category,
      description,
      fileName,
      url: `/docs/${fileName}`,
      createdAt: new Date(),
    });

    return NextResponse.json({
      message: 'Not başarıyla yüklendi',
      file: {
        title,
        category,
        description,
        fileName,
        url: `/docs/${fileName}`,
      }
    });
  } catch (error) {
    console.error('Yükleme hatası:', error);
    return NextResponse.json(
      { error: 'Dosya yüklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

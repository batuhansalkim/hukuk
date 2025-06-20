'use client';

import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';

interface Contributor {
  name: string;
  role: string;
  imageUrl: string;
  email?: string;
}

const contributors: Contributor[] = [
  {
    name: 'Batuhan SALKIM',
    role: 'Kurucu ve Geliştirici',
    imageUrl: '/images/batu.JPG',
    email: 'batuhan@example.com',
  },
  {
    name: 'Seymen GÜRBÜZ',
    role: 'Kurucu ve Hukuk Notları Yazarı',
    imageUrl: '/images/seymen.jpg',
    email: 'seymen@example.com',
  },
  // Gelecekte buraya daha fazla kişi eklenebilir
];

export default function ContributorsPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Emeği Geçenler
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-gray-400">
            Bu platformun oluşmasına katkıda bulunan harika insanlar.
          </p>
        </div>

        <div className="text-center">
          <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contributors.map((contributor) => (
              <div key={contributor.name} className="text-center bg-zinc-200 dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full mb-4 overflow-hidden">
                  <Image
                    src={contributor.imageUrl}
                    alt={contributor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {contributor.name}
                </h3>
                <p className="text-md text-teal-600 dark:text-teal-400 mb-4">
                  {contributor.role}
                </p>
                <div className="flex justify-center space-x-4 mt-auto">
                  {contributor.email && (
                    <a href={`mailto:${contributor.email}`} className="text-zinc-500 hover:text-zinc-700 dark:text-gray-400 dark:hover:text-white">
                      <FaEnvelope className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 
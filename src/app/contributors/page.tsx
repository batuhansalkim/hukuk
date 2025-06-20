'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface Contributor {
  name: string;
  role: string;
  imageUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

const contributors: Contributor[] = [
  {
    name: 'Batuhan SALKIM',
    role: 'Kurucu ve Geliştirici',
    imageUrl: 'https://avatars.githubusercontent.com/u/1?v=4', // Placeholder image
    githubUrl: 'https://github.com/batuhansalkim',
    linkedinUrl: 'https://linkedin.com/in/batuhansalkim',
    twitterUrl: 'https://twitter.com/batuhansalkim',
  },
  {
    name: 'AI Asistan',
    role: 'İçerik ve Kod Desteği',
    imageUrl: 'https://avatars.githubusercontent.com/u/2?v=4', // Placeholder image
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributors.map((contributor) => (
            <div key={contributor.name} className="text-center bg-zinc-200 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <img
                className="mx-auto h-32 w-32 rounded-full mb-4 object-cover"
                src={contributor.imageUrl}
                alt={contributor.name}
              />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                {contributor.name}
              </h3>
              <p className="text-md text-teal-600 dark:text-teal-400 mb-4">
                {contributor.role}
              </p>
              <div className="flex justify-center space-x-4">
                {contributor.githubUrl && (
                  <a href={contributor.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-700 dark:text-gray-400 dark:hover:text-white">
                    <FaGithub className="w-6 h-6" />
                  </a>
                )}
                {contributor.linkedinUrl && (
                  <a href={contributor.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-700 dark:text-gray-400 dark:hover:text-white">
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                )}
                {contributor.twitterUrl && (
                  <a href={contributor.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-700 dark:text-gray-400 dark:hover:text-white">
                    <FaTwitter className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 
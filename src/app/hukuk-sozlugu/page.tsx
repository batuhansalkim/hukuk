import { FaSearch } from 'react-icons/fa';

export default function HukukSozluguPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Hukuk Sözlüğü
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-gray-400">
            Aradığınız hukuki terimlerin anlamlarını ve açıklamalarını burada bulabilirsiniz.
          </p>
        </div>

        <div className="relative mb-12">
          <input
            type="text"
            placeholder="Aramak için bir terim yazın (örn: Müktesep Hak)..."
            className="w-full p-4 pl-12 text-lg bg-zinc-200 dark:bg-gray-800 border-2 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-zinc-500 dark:text-gray-400" />
        </div>

        <div className="text-center text-zinc-500 dark:text-gray-400">
          <p className="text-xl">Sözlük içeriği yakında eklenecektir.</p>
          <p className="mt-2">Bu bölümde, sıkça karıştırılan veya merak edilen hukuki terimlerin kapsamlı açıklamaları yer alacaktır.</p>
        </div>
      </div>
    </main>
  );
} 
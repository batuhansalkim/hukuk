'use client';

export default function MorePage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
          Daha Fazla Bilgi
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-gray-400">
          Bu bölüm yapım aşamasındadır.
        </p>
        <div className="mt-8 text-left p-8 bg-zinc-200 dark:bg-gray-800 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">Gelecek Planları</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-gray-300">
            <li>Sıkça Sorulan Sorular (S.S.S.) bölümü eklenecek.</li>
            <li>Kullanıcılar için forum veya tartışma alanı oluşturulacak.</li>
            <li>Hukuk sözlüğü ve terimler bölümü hazırlanacak.</li>
            <li className="font-semibold text-teal-600 dark:text-teal-400">Gelişmiş Hukuk Chatbot'u: Hukuksal konularda anında cevap verebilen, yapay zeka destekli bir asistan eklenecek.</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 
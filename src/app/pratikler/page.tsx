'use client';

import { FaBook, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';

export default function PratiklerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hukuk Pratik Çalışmaları
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Teorik bilgilerinizi pekiştirmek için hazırlanmış pratik çalışmalar ve örnek olaylar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pratikCards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                {card.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {card.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-indigo-600 dark:text-indigo-400">
                    {card.count} Pratik Çalışma
                  </span>
                  <a
                    href={card.href}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                  >
                    İncele
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-indigo-900 dark:text-white mb-4">
              Neden Pratik Çalışmalar Önemli?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Teorik bilgileri pratiğe dökmek, hukuk öğreniminin en önemli aşamalarından biridir. 
              Pratik çalışmalar sayesinde gerçek hayat senaryolarını analiz eder, 
              hukuki düşünme yeteneğinizi geliştirir ve bilgilerinizi pekiştirirsiniz.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

const pratikCards = [
  {
    title: "Olay Analizleri",
    description: "Gerçek mahkeme kararlarından uyarlanmış örnek olaylar ve çözüm yöntemleri.",
    count: "25",
    href: "/pratikler/olay-analizleri",
    icon: <FaBook className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
  },
  {
    title: "Soru-Cevap Pratikleri",
    description: "Sınav formatında hazırlanmış pratik soru ve detaylı çözümleri.",
    count: "50",
    href: "/pratikler/soru-cevap",
    icon: <FaQuestionCircle className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
  },
  {
    title: "Uygulama Örnekleri",
    description: "Hukuki belge hazırlama ve prosedür uygulama örnekleri.",
    count: "30",
    href: "/pratikler/uygulama-ornekleri",
    icon: <FaCheckCircle className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
  }
]; 
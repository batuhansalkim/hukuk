import { FaBalanceScale, FaLandmark, FaScroll, FaUsers, FaHandshake, FaBuilding } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hukuk Notları Platformu
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Türkiye&apos;nin en kapsamlı hukuk notu paylaşım platformu. 
            Alanında uzman hukukçular tarafından hazırlanan notlara anında erişin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CategoryCard
            title="Ceza Hukuku"
            description="Ceza hukuku genel hükümler, özel hükümler, ceza muhakemesi hukuku ve infaz hukuku ile ilgili kapsamlı notlar"
            href="/categories/ceza-hukuku"
            icon={<FaBalanceScale className="w-8 h-8" />}
          />
          <CategoryCard
            title="İdare Hukuku"
            description="İdari yargılama usulü, idari işlemler, idarenin sorumluluğu ve idare teşkilatı hakkında detaylı notlar"
            href="/categories/idare-hukuku"
            icon={<FaLandmark className="w-8 h-8" />}
          />
          <CategoryCard
            title="Anayasa Hukuku"
            description="Temel hak ve özgürlükler, devlet organları, anayasa yargısı ve anayasa teorisi konularında açıklamalı notlar"
            href="/categories/anayasa-hukuku"
            icon={<FaScroll className="w-8 h-8" />}
          />
          <CategoryCard
            title="Medeni Hukuk"
            description="Kişiler hukuku, aile hukuku, eşya hukuku ve miras hukuku alanlarında kapsamlı çalışma notları"
            href="/categories/medeni-hukuku"
            icon={<FaUsers className="w-8 h-8" />}
          />
          <CategoryCard
            title="Borçlar Hukuku"
            description="Genel hükümler, özel borç ilişkileri ve sorumluluk hukuku konularında detaylı açıklamalar"
            href="/categories/borclar-hukuku"
            icon={<FaHandshake className="w-8 h-8" />}
          />
          <CategoryCard
            title="Ticaret Hukuku"
            description="Şirketler hukuku, kıymetli evrak, sigorta hukuku ve deniz ticareti hukuku ile ilgili önemli notlar"
            href="/categories/ticaret-hukuku"
            icon={<FaBuilding className="w-8 h-8" />}
          />
        </div>

        <div className="mt-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-indigo-900 dark:text-white mb-4">
            Neden Hukuk Notları?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="text-indigo-600 dark:text-indigo-400 text-2xl mb-3">📚</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Uzman İçerik
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Alanında uzman hukukçular tarafından hazırlanan güvenilir notlar
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="text-indigo-600 dark:text-indigo-400 text-2xl mb-3">🔄</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Güncel Bilgiler
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sürekli güncellenen içerikler ve yeni yasal düzenlemeler
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="text-indigo-600 dark:text-indigo-400 text-2xl mb-3">💡</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Kolay Erişim
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                PDF ve görsel formatında notlara anında erişim imkanı
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function CategoryCard({ 
  title, 
  description, 
  href,
  icon 
}: { 
  title: string; 
  description: string; 
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-500 transition-colors">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-500 transition-colors ml-4">
          {title}
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </a>
  );
}

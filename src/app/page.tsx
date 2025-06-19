import { FaBalanceScale, FaLandmark, FaScroll, FaUsers, FaHandshake, FaBuilding } from 'react-icons/fa';
import WelcomeModal from './components/WelcomeModal';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <WelcomeModal />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Hukuk Notları Platformu
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Türkiye&apos;nin en kapsamlı hukuk notu paylaşım platformu. 
            Alanında uzman hukukçular tarafından hazırlanan notlara anında erişin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <CategoryCard
            title="Ceza Hukuku"
            description="Ceza hukuku genel hükümler, özel hükümler, ceza muhakemesi hukuku ve infaz hukuku ile ilgili kapsamlı notlar"
            href="/categories/ceza-hukuku"
            icon={<FaBalanceScale className="w-6 h-6 sm:w-8 sm:h-8" />}
            bgImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          />
          <CategoryCard
            title="İdare Hukuku"
            description="İdari yargılama usulü, idari işlemler, idarenin sorumluluğu ve idare teşkilatı hakkında detaylı notlar"
            href="/categories/idare-hukuku"
            icon={<FaLandmark className="w-6 h-6 sm:w-8 sm:h-8" />}
            bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          />
          <CategoryCard
            title="Anayasa Hukuku"
            description="Temel hak ve özgürlükler, devlet organları, anayasa yargısı ve anayasa teorisi konularında açıklamalı notlar"
            href="/categories/anayasa-hukuku"
            icon={<FaScroll className="w-6 h-6 sm:w-8 sm:h-8" />}
            bgImage="https://images.unsplash.com/photo-1682686580391-615b1e32be1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          />
          <CategoryCard
            title="Medeni Hukuk"
            description="Kişiler hukuku, aile hukuku, eşya hukuku ve miras hukuku alanlarında kapsamlı çalışma notları"
            href="/categories/medeni-hukuku"
            icon={<FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />}
            bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          />
          <CategoryCard
            title="Borçlar Hukuku"
            description="Genel hükümler, özel borç ilişkileri ve sorumluluk hukuku konularında detaylı açıklamalar"
            href="/categories/borclar-hukuku"
            icon={<FaHandshake className="w-6 h-6 sm:w-8 sm:h-8" />}
            bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          />
          <CategoryCard
            title="Ticaret Hukuku"
            description="Şirketler hukuku, kıymetli evrak, sigorta hukuku ve deniz ticareti hukuku ile ilgili önemli notlar"
            href="/categories/ticaret-hukuku"
            icon={<FaBuilding className="w-6 h-6 sm:w-8 sm:h-8" />}
            bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          />
        </div>

        {/* Pratik Çalışmalara Göz At butonu grid dışına, ortalanmış ve genişliği sınırlı */}
        <div className="w-full flex justify-center mt-8 sm:mt-12 lg:mt-16">
          <a 
            href="/pratikler" 
            className="group block w-full max-w-xl min-h-[200px] sm:min-h-[250px] rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 bg-indigo-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 text-center flex flex-col justify-center items-center mx-auto"
          >
            <span className="text-2xl sm:text-3xl font-extrabold tracking-wide mb-2 sm:mb-3 group-hover:text-indigo-200 transition-colors">
              Pratik Çalışmalara Göz At
            </span>
            <span className="text-sm sm:text-base text-indigo-100 group-hover:text-indigo-200 mb-3 sm:mb-4 transition-colors">
              Hukuk pratiklerini keşfet
            </span>
            <svg 
              className="w-8 h-8 sm:w-10 sm:h-10 mt-2 text-white group-hover:text-indigo-200 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M5 7l5 5-5 5" />
            </svg>
          </a>
        </div>

        <div className="mt-8 sm:mt-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-4 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 dark:text-white mb-4">
            Neden Hukuk Notları?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-8">
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="text-indigo-600 dark:text-indigo-400 text-xl sm:text-2xl mb-3">📚</div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Uzman İçerik
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Alanında uzman hukukçular tarafından hazırlanan güvenilir notlar
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="text-indigo-600 dark:text-indigo-400 text-xl sm:text-2xl mb-3">🔄</div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Güncel Bilgiler
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Sürekli güncellenen içerikler ve yeni yasal düzenlemeler
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="text-indigo-600 dark:text-indigo-400 text-xl sm:text-2xl mb-3">💡</div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Kolay Erişim
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
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
  icon,
  bgImage 
}: { 
  title: string; 
  description: string; 
  href: string;
  icon: React.ReactNode;
  bgImage: string;
}) {
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 min-h-[200px] sm:min-h-[250px]"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 group-hover:from-black/70 group-hover:to-black/90 transition-all duration-300" />

      {/* Content */}
      <div className="relative p-4 sm:p-8 h-full flex flex-col">
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="text-white group-hover:text-indigo-400 transition-colors">
            {icon}
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors ml-3 sm:ml-4">
            {title}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-100 group-hover:text-white transition-colors flex-grow">
          {description}
        </p>
        <div className="mt-4 sm:mt-6 flex items-center text-white">
          <span className="text-xs sm:text-sm">Detaylı Bilgi</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

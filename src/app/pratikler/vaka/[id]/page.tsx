'use client';

import { useParams } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

// Vaka tipi tanımı
interface Case {
  title: string;
  category: string;
  description: string;
}

// Cases objesi için tip tanımı
type Cases = {
  [key: string]: Case;
};

// Vaka verilerini burada tutuyoruz (gerçek uygulamada bu veriler API'den gelecek)
const cases: Cases = {
  '1': {
    title: 'Miras Davası',
    category: 'Medeni Hukuk',
    description: 'Karmaşık bir miras paylaşımı ve vasiyet yorumlama vakası. Mirasçılar arasındaki anlaşmazlıkların çözümü ve miras hukukunun temel prensiplerinin uygulanması.'
  },
  '2': {
    title: 'Ticari İhtilaf',
    category: 'Ticaret Hukuku',
    description: 'Uluslararası ticaret hukuku kapsamında sözleşme ihtilafı ve tahkim süreci analizi.'
  },
  '3': {
    title: 'İdari Yaptırım',
    category: 'İdare Hukuku',
    description: 'Belediye kararına karşı iptal davası incelemesi ve idari yargılama usulünün pratik uygulaması.'
  },
  '4': {
    title: 'İş Akdi Feshi',
    category: 'İş Hukuku',
    description: 'Haksız fesih iddiası ve işe iade davası sürecinin detaylı incelemesi.'
  },
  '5': {
    title: 'Tazminat Talebi',
    category: 'Borçlar Hukuku',
    description: 'Trafik kazası sonrası maddi ve manevi tazminat hesaplama yöntemleri.'
  },
  '6': {
    title: 'Anayasa Mahkemesi',
    category: 'Anayasa Hukuku',
    description: 'Bireysel başvuru hakkı ve temel hak ihlali iddialarının değerlendirilmesi.'
  },
  '7': {
    title: 'Sözleşme İhlali',
    category: 'Borçlar Hukuku',
    description: 'Eser sözleşmesinden kaynaklanan uyuşmazlık ve çözüm yolları.'
  },
  '8': {
    title: 'Ceza Davası',
    category: 'Ceza Hukuku',
    description: 'Ağır ceza mahkemesinde görülen bir davanın tüm aşamalarının incelenmesi.'
  },
  '9': {
    title: 'Rekabet İhlali',
    category: 'Ticaret Hukuku',
    description: 'Haksız rekabet ve fikri mülkiyet hakları ihlali vakası.'
  },
  '10': {
    title: 'Velayet Davası',
    category: 'Aile Hukuku',
    description: 'Boşanma sonrası velayet ve kişisel ilişki kurulması talebi.'
  }
};

export default function VakaDetay() {
  const params = useParams();
  const id = params.id as string;
  const caseData = cases[id];

  if (!caseData) {
    return (
      <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vaka bulunamadı</h1>
          <Link 
            href="/pratikler" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
          >
            <FaArrowLeft className="mr-2" />
            Pratiklere Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Geri Dön Butonu */}
        <Link 
          href="/pratikler" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Pratiklere Dön
        </Link>

        {/* Vaka Başlığı */}
        <div className="bg-gradient-to-r from-red-800 to-black p-8 rounded-xl shadow-2xl mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {caseData.title}
          </h1>
          <div className="inline-block bg-white/10 px-4 py-2 rounded-full">
            <p className="text-gray-200 text-sm sm:text-base">
              {caseData.category}
            </p>
          </div>
        </div>

        {/* Vaka İçeriği */}
        <div className="bg-neutral-800 p-6 sm:p-8 rounded-xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6">
              Vaka Özeti
            </h2>
            <p className="text-gray-300 mb-8">
              {caseData.description}
            </p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 italic">
                Bu vakaya ait detaylı içerikler ve çözüm yöntemleri yakında eklenecektir.
                Şu anda geliştirme aşamasındadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
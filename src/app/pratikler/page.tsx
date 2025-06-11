'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaGavel, FaBalanceScale, FaLandmark, FaUniversity, FaHandshake, FaFileContract, FaUserTie, FaUsers } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Sabit değerler
const CARD_SIZES = {
  small: 'col-span-2 row-span-2',
  medium: 'col-span-2 row-span-3',
  large: 'col-span-2 row-span-4'
} as const;

interface PratikCase {
  id: string;
  title: string;
  description: string;
  preview: string;
  icon: React.ReactNode;
  category: string;
  bgColor: string;
  size: 'small' | 'medium' | 'large';
  bgImage: string;
}

export default function PratiklerPage() {
  const [selectedCase, setSelectedCase] = useState<PratikCase | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Resim yüklendiğinde çağrılacak fonksiyon
  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => new Set(prev).add(imageUrl));
  };

  const pratikCases: PratikCase[] = [
    {
      id: '1',
      title: 'Miras Davası',
      description: 'Karmaşık bir miras paylaşımı ve vasiyet yorumlama vakası. Mirasçılar arasındaki anlaşmazlıkların çözümü ve miras hukukunun temel prensiplerinin uygulanması.',
      preview: 'Vasiyet ve miras paylaşımında yaşanan anlaşmazlık',
      icon: <FaGavel className="w-8 h-8" />,
      category: 'Medeni Hukuk',
      bgColor: 'bg-red-800',
      size: 'large',
      bgImage: 'https://images.unsplash.com/photo-1608575009803-0f2357aa9797?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      title: 'Ticari İhtilaf',
      description: 'Uluslararası ticaret hukuku kapsamında sözleşme ihtilafı ve tahkim süreci analizi.',
      preview: 'Uluslararası ticari sözleşme uyuşmazlığı',
      icon: <FaHandshake className="w-8 h-8" />,
      category: 'Ticaret Hukuku',
      bgColor: 'bg-black',
      size: 'small',
      bgImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
    },
    {
      id: '3',
      title: 'İdari Yaptırım',
      description: 'Belediye kararına karşı iptal davası incelemesi ve idari yargılama usulünün pratik uygulaması.',
      preview: 'Belediye kararının iptali için açılan dava',
      icon: <FaLandmark className="w-8 h-8" />,
      category: 'İdare Hukuku',
      bgColor: 'bg-red-700',
      size: 'medium',
      bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80'
    },
    {
      id: '4',
      title: 'İş Akdi Feshi',
      description: 'Haksız fesih iddiası ve işe iade davası sürecinin detaylı incelemesi.',
      preview: 'Haksız işten çıkarma ve tazminat talebi',
      icon: <FaUserTie className="w-8 h-8" />,
      category: 'İş Hukuku',
      bgColor: 'bg-red-900',
      size: 'small',
      bgImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80'
    },
    {
      id: '5',
      title: 'Tazminat Talebi',
      description: 'Trafik kazası sonrası maddi ve manevi tazminat hesaplama yöntemleri.',
      preview: 'Trafik kazası sonrası tazminat davası',
      icon: <FaBalanceScale className="w-8 h-8" />,
      category: 'Borçlar Hukuku',
      bgColor: 'bg-black',
      size: 'medium',
      bgImage: 'https://images.unsplash.com/photo-1601276861758-2d9c5ca69a17?auto=format&fit=crop&q=80'
    },
    {
      id: '6',
      title: 'Anayasa Mahkemesi',
      description: 'Bireysel başvuru hakkı ve temel hak ihlali iddialarının değerlendirilmesi.',
      preview: 'Temel hak ihlali bireysel başvurusu',
      icon: <FaUniversity className="w-8 h-8" />,
      category: 'Anayasa Hukuku',
      bgColor: 'bg-red-800',
      size: 'large',
      bgImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80'
    },
    {
      id: '7',
      title: 'Sözleşme İhlali',
      description: 'Eser sözleşmesinden kaynaklanan uyuşmazlık ve çözüm yolları.',
      preview: 'Eser sözleşmesi ihlali ve tazminat',
      icon: <FaFileContract className="w-8 h-8" />,
      category: 'Borçlar Hukuku',
      bgColor: 'bg-red-700',
      size: 'small',
      bgImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
    },
    {
      id: '8',
      title: 'Ceza Davası',
      description: 'Ağır ceza mahkemesinde görülen bir davanın tüm aşamalarının incelenmesi.',
      preview: 'Ağır ceza mahkemesi süreci analizi',
      icon: <FaGavel className="w-8 h-8" />,
      category: 'Ceza Hukuku',
      bgColor: 'bg-black',
      size: 'medium',
      bgImage: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80'
    },
    {
      id: '9',
      title: 'Rekabet İhlali',
      description: 'Haksız rekabet ve fikri mülkiyet hakları ihlali vakası.',
      preview: 'Haksız rekabet ve marka ihlali davası',
      icon: <FaHandshake className="w-8 h-8" />,
      category: 'Ticaret Hukuku',
      bgColor: 'bg-red-900',
      size: 'small',
      bgImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80'
    },
    {
      id: '10',
      title: 'Velayet Davası',
      description: 'Boşanma sonrası velayet ve kişisel ilişki kurulması talebi.',
      preview: 'Velayet hakkı ve çocukla kişisel ilişki',
      icon: <FaUsers className="w-8 h-8" />,
      category: 'Aile Hukuku',
      bgColor: 'bg-red-800',
      size: 'medium',
      bgImage: 'https://images.unsplash.com/photo-1478061653917-455ba7f4a541?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-900">
      <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 lg:mb-12 text-center px-4">
          Hukuk Pratik Çalışmaları
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3 auto-rows-[120px] sm:auto-rows-[100px]">
          {pratikCases.map((pratikCase) => (
            <motion.div
              key={pratikCase.id}
              className={`
                relative overflow-hidden cursor-pointer rounded-lg
                ${CARD_SIZES[pratikCase.size]}
                ${pratikCase.bgColor}
                group
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCase(pratikCase)}
            >
              {/* Background Image with Next.js Image */}
              <div className="absolute inset-0">
                <Image
                  src={pratikCase.bgImage}
                  alt={pratikCase.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
                    loadedImages.has(pratikCase.bgImage) ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority={pratikCase.size === 'large'}
                  loading={pratikCase.size === 'large' ? 'eager' : 'lazy'}
                  onLoad={() => handleImageLoad(pratikCase.bgImage)}
                  quality={75}
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 group-hover:from-black/50 group-hover:to-black/90 transition-all duration-300" />
              
              {/* Content */}
              <div className="relative h-full p-3 sm:p-4 flex flex-col justify-between z-10">
                <div className="text-white opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {pratikCase.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base leading-tight mb-1 drop-shadow-lg">
                    {pratikCase.title}
                  </h3>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-300 ease-in-out">
                    <p className="text-gray-200 text-[10px] sm:text-xs mb-1 drop-shadow">
                      {pratikCase.category}
                    </p>
                    <p className="text-gray-300 text-[10px] sm:text-xs line-clamp-2 drop-shadow">
                      {pratikCase.preview}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 max-w-lg w-full mx-3 sm:mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 sm:p-3 rounded-lg ${selectedCase.bgColor}`}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 text-white">
                      {selectedCase.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {selectedCase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {selectedCase.category}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 p-1"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
                {selectedCase.description}
              </p>
              <div className="flex justify-end">
                <button
                  className="w-full sm:w-auto px-4 py-2 bg-red-700 text-white text-sm sm:text-base rounded-lg hover:bg-red-800 transition-colors"
                  onClick={() => window.location.href = `/pratikler/vaka/${selectedCase.id}`}
                >
                  Vakayı İncele
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 
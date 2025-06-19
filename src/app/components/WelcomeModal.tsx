'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsOpen(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-screen h-screen"
            style={{
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "100% 100%",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat"
            }}
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-4xl w-full text-white border border-white/20">
              <div className="space-y-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Hukuk Notlarına Hoş Geldiniz
                </h2>
                
                <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
                  Hukuki bilgiye erişim artık çok daha kolay!
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Ne Sunuyoruz?</h3>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-center">
                        <span className="mr-2">✨</span>
                        Ücretsiz hukuk notları
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">📝</span>
                        Sade ve anlaşılır anlatım
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🎯</span>
                        Herkesin anlayabileceği düzeyde içerik
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🔄</span>
                        Sürekli güncellenen bilgiler
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Nasıl Faydalanabilirsiniz?</h3>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-center">
                        <span className="mr-2">📚</span>
                        Tüm hukuk notlarına ücretsiz erişim
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">💡</span>
                        Pratik bilgiler ve örnekler
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">📱</span>
                        Mobil uyumlu içerikler
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🔍</span>
                        Kolay arama ve filtreleme
                      </li>
                    </ul>
                  </div>
                </div>

                {loading ? (
                  <div className="mt-12 flex justify-center">
                    <span className="inline-block w-10 h-10 border-4 border-white border-t-indigo-400 rounded-full animate-spin"></span>
                  </div>
                ) : (
                  <button
                    onClick={handleStart}
                    className="mt-12 px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
                  >
                    Hemen Keşfetmeye Başla
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
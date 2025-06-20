'use client';

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            İletişim
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-gray-400">
            Bizimle iletişime geçmekten çekinmeyin.
          </p>
        </div>

        <div className="bg-zinc-200 dark:bg-gray-800 p-8 rounded-2xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">Bize Ulaşın</h2>
              <p className="text-zinc-600 dark:text-gray-300">
                Aşağıdaki bilgilerden veya yandaki formu kullanarak bize ulaşabilirsiniz.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <span className="text-zinc-700 dark:text-gray-200">info@hukuknotlari.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <span className="text-zinc-700 dark:text-gray-200">+90 555 555 55 55</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <span className="text-zinc-700 dark:text-gray-200">İstanbul, Türkiye</span>
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-gray-300">İsim</label>
                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-zinc-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-gray-300">E-posta</label>
                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-zinc-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-gray-300">Mesajınız</label>
                <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-zinc-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full py-3 px-4 bg-teal-600 text-white font-semibold rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 
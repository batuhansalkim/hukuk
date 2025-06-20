import { FaBook, FaPenFancy, FaLightbulb } from 'react-icons/fa';

export default function NasilKatkiSaglarimPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Nasıl Katkı Sağlarım?
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-gray-400">
            Bu platformu birlikte daha iyi bir hale getirebiliriz. Katkılarınız bizim için çok değerli.
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-teal-500 p-4 rounded-full text-white">
              <FaBook className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Pratik Çalışma veya Vaka Analizi Gönderin</h3>
              <p className="mt-2 text-zinc-600 dark:text-gray-400">
                Kendi hazırladığınız veya ilginç bulduğunuz anonimleştirilmiş vaka analizlerini, pratik çalışmaları bizimle paylaşabilirsiniz. Gönderileriniz, isminizle birlikte yayınlanarak binlerce hukuk öğrencisine ve meslektaşımıza ulaşır.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-teal-500 p-4 rounded-full text-white">
              <FaPenFancy className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Makale veya Hukuki Yazı Kaleme Alın</h3>
              <p className="mt-2 text-zinc-600 dark:text-gray-400">
                Uzmanlık alanınızda veya ilgi duyduğunuz bir konuda bilgilendirici bir makale yazarak bilgi birikimimizi zenginleştirebilirsiniz. Yazılarınız, platformumuzda adınıza özel bir yazar profiliyle sergilenir.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-teal-500 p-4 rounded-full text-white">
              <FaLightbulb className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Geri Bildirim ve Fikirlerinizi Paylaşın</h3>
              <p className="mt-2 text-zinc-600 dark:text-gray-400">
                Sitemizde gördüğünüz bir hatayı bildirmek, mevcut özellikleri geliştirmek için fikir sunmak veya yeni özellikler önermek isterseniz, <a href="/contact" className="text-teal-500 hover:underline">iletişim</a> sayfasından bize ulaşabilirsiniz. Her geri bildirim, bizim için bir hediyedir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
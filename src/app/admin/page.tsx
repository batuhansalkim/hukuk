'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const categories = [
  'Ceza Hukuku',
  'İdare Hukuku',
  'Anayasa Hukuku',
  'Medeni Hukuk',
  'Borçlar Hukuku',
  'Ticaret Hukuku'
];

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!file) {
      alert('Lütfen bir dosya seçin');
      setLoading(false);
      return;
    }

    // Simüle edilmiş yükleme - gerçek uygulamada burada API çağrısı olacak
    setTimeout(() => {
      alert('Not başarıyla yüklendi!');
      setTitle('');
      setFile(null);
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Paneli</h1>
            <p className="mt-2 text-gray-600">Not yüklemek için aşağıdaki formu doldurun</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Not Başlığı
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Örn: Ceza Hukuku Final Notları"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kategori
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dosya (PDF veya Görsel)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                    >
                      <span>Dosya Yükle</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        accept=".pdf,image/*"
                        className="sr-only"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        required
                      />
                    </label>
                    <p className="pl-1">veya sürükleyip bırakın</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF veya görsel dosyalar</p>
                </div>
              </div>
              {file && (
                <p className="mt-2 text-sm text-gray-600">
                  Seçilen dosya: {file.name}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 text-white font-medium rounded-lg ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } transition-colors`}
              >
                {loading ? 'Yükleniyor...' : 'Notu Yükle'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

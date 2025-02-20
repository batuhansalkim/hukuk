'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaFilePdf, FaDownload, FaEye } from 'react-icons/fa';

interface Note {
  _id: string;
  title: string;
  category: string;
  fileUrl: string;
  fileType: 'pdf' | 'image';
  createdAt: string;
  description: string;
}

const dummyNotes: { [key: string]: Note[] } = {
  'ceza-hukuku': [
    {
      _id: '1',
      title: 'Ceza Hukukunda Suç Teorisi',
      category: 'Ceza Hukuku',
      fileUrl: '/docs/ceza-hukuku-suc-teorisi.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-19',
      description: 'Suçun unsurları, suça teşebbüs, iştirak ve içtima konularının detaylı analizi'
    },
    {
      _id: '2',
      title: 'Yargıtay Kararları Işığında Hırsızlık Suçu',
      category: 'Ceza Hukuku',
      fileUrl: '/docs/hirsizlik-sucu-kararlari.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-15',
      description: 'Hırsızlık suçunun nitelikli halleri ve Yargıtay içtihatları'
    },
    {
      _id: '3',
      title: 'Ceza Muhakemesinde Delil Sistemi',
      category: 'Ceza Hukuku',
      fileUrl: '/docs/ceza-muhakemesinde-delil-sistemi.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-10',
      description: 'Delil türleri, delil yasakları ve ispat hukuku'
    }
  ],
  'idare-hukuku': [
    {
      _id: '6',
      title: 'İdari Yargılama Usulü Esasları',
      category: 'İdare Hukuku',
      fileUrl: '/docs/idari-yargilama-usulu.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-17',
      description: 'İdari yargılama usulünün temel ilkeleri ve dava türleri'
    },
    {
      _id: '7',
      title: 'Danıştay Kararları Derlemesi',
      category: 'İdare Hukuku',
      fileUrl: '/docs/danistay-kararlari-derlemesi.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-12',
      description: 'Önemli Danıştay kararları ve içtihat analizi'
    }
  ],
  'anayasa-hukuku': [
    {
      _id: '8',
      title: 'Temel Hak ve Özgürlükler',
      category: 'Anayasa Hukuku',
      fileUrl: '/docs/temel-hak-ve-ozgurlukler.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-16',
      description: 'Anayasal hakların kapsamı ve sınırlandırılması rejimi'
    },
    {
      _id: '9',
      title: 'Anayasa Mahkemesi İçtihatları',
      category: 'Anayasa Hukuku',
      fileUrl: '/docs/anayasa-mahkemesi-ictihatlari.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-11',
      description: 'Bireysel başvuru kararları ve norm denetimi'
    }
  ],
  'medeni-hukuku': [
    {
      _id: '4',
      title: 'Türk Medeni Hukukunda Kişilik Hakları',
      category: 'Medeni Hukuk',
      fileUrl: '/docs/turk-medeni-hukukunda-kisilik-haklari.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-18',
      description: 'Kişilik haklarının kapsamı ve korunması'
    },
    {
      _id: '5',
      title: 'Miras Hukukunda Saklı Pay',
      category: 'Medeni Hukuk',
      fileUrl: '/docs/miras-hukukunda-sakli-pay.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-14',
      description: 'Saklı pay kavramı ve hesaplanması'
    },
    {
      _id: '10',
      title: 'Aile Hukukunda Boşanma Sebepleri',
      category: 'Medeni Hukuk',
      fileUrl: '/docs/aile-hukukunda-bosanma-sebepleri.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-13',
      description: 'Özel ve genel boşanma sebepleri ve sonuçları'
    }
  ],
  'borclar-hukuku': [
    {
      _id: '11',
      title: 'Sözleşmeler Hukuku Genel Esaslar',
      category: 'Borçlar Hukuku',
      fileUrl: '/docs/sozlesmeler-hukuku-genel-esaslar.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-19',
      description: 'Sözleşmelerin kuruluşu, geçerliliği ve sona ermesi'
    },
    {
      _id: '12',
      title: 'Haksız Fiil Sorumluluğu',
      category: 'Borçlar Hukuku',
      fileUrl: '/docs/haksiz-fiil-sorumlulugu.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-15',
      description: 'Haksız fiil şartları ve tazminat hesaplaması'
    }
  ],
  'ticaret-hukuku': [
    {
      _id: '13',
      title: 'Anonim Şirketlerde Yönetim Kurulu',
      category: 'Ticaret Hukuku',
      fileUrl: '/docs/anonim-sirketlerde-yonetim-kurulu.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-18',
      description: 'Yönetim kurulunun oluşumu, görev ve yetkileri'
    },
    {
      _id: '14',
      title: 'Kıymetli Evrak Hukuku',
      category: 'Ticaret Hukuku',
      fileUrl: '/docs/kiymetli-evrak-hukuku.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-14',
      description: 'Kambiyo senetleri ve diğer kıymetli evrak türleri'
    },
    {
      _id: '15',
      title: 'Deniz Ticareti Hukuku Esasları',
      category: 'Ticaret Hukuku',
      fileUrl: '/docs/deniz-ticareti-hukuku-esaslari.pdf',
      fileType: 'pdf',
      createdAt: '2024-02-10',
      description: 'Gemi, navlun sözleşmeleri ve deniz kazaları'
    }
  ]
};

export default function CategoryPage() {
  const params = useParams();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const categoryNotes = dummyNotes[params.category as string] || [];
      setNotes(categoryNotes);
      setLoading(false);
    }, 1000);
  }, [params.category]);

  const handleViewClick = (note: Note) => {
    setSelectedNote(note);
    setShowPdfViewer(true);
  };

  const handleDownload = (note: Note) => {
    const link = document.createElement('a');
    link.href = note.fileUrl;
    link.download = note.title + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const PdfViewerModal = () => {
    if (!selectedNote) return null;

    return (
      <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-4xl h-[80vh] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {selectedNote.title}
            </h3>
            <button
              onClick={() => setShowPdfViewer(false)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-900 rounded-b-xl">
            <iframe
              src={selectedNote.fileUrl}
              className="w-full h-full rounded-lg bg-white dark:bg-gray-800"
              title={selectedNote.title}
            />
          </div>
        </div>
      </div>
    );
  };

  const categoryTitle = (params.category as string)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-white dark:bg-gray-800 rounded-xl p-8">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{categoryTitle}</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Bu kategoride {notes.length} adet not bulunmaktadır
            </p>
          </div>
        </div>

        {notes.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <FaFilePdf className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Not bulunamadı</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
              Bu kategoride henüz not bulunmamaktadır. Daha sonra tekrar kontrol edin.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {notes.map((note) => (
              <div
                key={note._id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {note.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {note.description}
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(note.createdAt).toLocaleDateString('tr-TR')}
                    </div>
                  </div>
                  <span className={`
                    ml-4 px-3 py-1 rounded-full text-xs font-medium
                    ${note.fileType === 'pdf' 
                      ? 'bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-400' 
                      : 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400'
                    }
                  `}>
                    {note.fileType.toUpperCase()}
                  </span>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => handleViewClick(note)}
                    className="flex-1 flex items-center justify-center gap-2 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/70 transition-colors"
                  >
                    <FaEye className="w-4 h-4" />
                    Görüntüle
                  </button>
                  <button
                    onClick={() => handleDownload(note)}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-50 dark:bg-green-900/50 text-green-600 dark:text-green-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-100 dark:hover:bg-green-900/70 transition-colors"
                  >
                    <FaDownload className="w-4 h-4" />
                    İndir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {showPdfViewer && <PdfViewerModal />}
    </main>
  );
}

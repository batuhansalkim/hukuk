import { FaCalculator, FaBalanceScale, FaPercentage } from 'react-icons/fa';

const tools = [
  {
    icon: FaCalculator,
    title: "Vekalet Ücreti Hesaplama",
    description: "Dava ve icra takipleri için avukatlık asgari ücret tarifesine göre vekalet ücretini hesaplayın.",
    status: "Yakında"
  },
  {
    icon: FaPercentage,
    title: "Yasal Faiz Hesaplama",
    description: "Belirli bir anapara ve tarih aralığı için yasal ve ticari faiz tutarlarını kolayca hesaplayın.",
    status: "Yakında"
  },
  {
    icon: FaBalanceScale,
    title: "Kıdem Tazminatı Hesaplama",
    description: "İşçinin hizmet süresi ve son brüt ücretine göre kıdem tazminatı miktarını hesaplayın.",
    status: "Yakında"
  }
];

export default function YasalHesaplamaPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Yasal Hesaplama Araçları
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-gray-400">
            Hukuki süreçlerde ihtiyaç duyabileceğiniz pratik hesaplama araçları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-zinc-200 dark:bg-gray-800 p-8 rounded-2xl shadow-md text-center flex flex-col items-center">
              <tool.icon className="w-12 h-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                {tool.title}
              </h3>
              <p className="text-zinc-600 dark:text-gray-400 flex-grow">
                {tool.description}
              </p>
              <span className="mt-4 inline-block bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {tool.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 
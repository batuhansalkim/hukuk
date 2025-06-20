'use client';

import { FaBook, FaUsers, FaSyncAlt, FaGavel, FaSearch, FaComments } from 'react-icons/fa';
import { GiScales } from 'react-icons/gi';
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi';

const features = [
  { icon: FaBook, title: "Uzman İçerik", description: "Alanında uzman hukukçular tarafından hazırlanan güvenilir notlar." },
  { icon: FaGavel, title: "Pratik Odaklı", description: "Teorik bilgileri pekiştiren gerçekçi vaka analizleri ve pratikler." },
  { icon: FaComments, title: "Geniş Kapsam", description: "Ceza, Medeni, İdare ve daha birçok hukuk dalında zengin içerik." },
  { icon: FaSyncAlt, title: "Güncel Bilgiler", description: "Sürekli güncellenen içerikler ve yeni yasal düzenlemeler." },
  { icon: FaSearch, title: "Kolay Erişim", description: "Aradığınız bilgiye anında ulaşmanızı sağlayan kullanıcı dostu arayüz." },
  { icon: FaUsers, title: "Topluluk Katkısı", description: "Kullanıcıların da katkıda bulunabildiği, yaşayan ve gelişen bir platform." },
];

export default function LawInfographic() {
    return (
        <div className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
                        Neden Hukuk Notları?
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Platformumuzun temel taşları ve size sunduğu temel avantajlar.
                    </p>
                </div>

                <div className="relative">
                    {/* --- Mobile View --- */}
                    <div className="lg:hidden flex flex-col items-center">
                        <GiScales className="text-indigo-500 dark:text-indigo-400 w-40 h-40 mb-8" />
                        <div className="space-y-10">
                            {features.map(feature => (
                                <div key={feature.title} className="text-center">
                                    <div className="flex justify-center items-center gap-3 mb-2">
                                        <div className="p-3 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10"><feature.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /></div>
                                        <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">{feature.title}</h3>
                                    </div>
                                    <p className="text-zinc-600 dark:text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- Desktop View --- */}
                    <div className="hidden lg:grid grid-cols-3 items-center gap-x-8 gap-y-16">
                        {/* Left Column */}
                        <div className="space-y-12">
                            {features.slice(0, 3).map(feature => (
                                <div key={feature.title} className="text-right relative">
                                    <div className="flex justify-end items-center gap-3 mb-2">
                                        <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">{feature.title}</h3>
                                        <div className="p-3 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10"><feature.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /></div>
                                    </div>
                                    <p className="text-zinc-600 dark:text-gray-400">{feature.description}</p>
                                    <div className="absolute top-1/2 -translate-y-1/2 -right-16 text-gray-300 dark:text-gray-600 pointer-events-none">
                                        <HiArrowSmRight className="w-12 h-12" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Center Image */}
                        <div className="flex justify-center">
                             <GiScales className="text-indigo-500 dark:text-indigo-400 w-64 h-64" />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-12">
                            {features.slice(3, 6).map(feature => (
                                <div key={feature.title} className="text-left relative">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-3 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10"><feature.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /></div>
                                        <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">{feature.title}</h3>
                                    </div>
                                    <p className="text-zinc-600 dark:text-gray-400">{feature.description}</p>
                                    <div className="absolute top-1/2 -translate-y-1/2 -left-16 text-gray-300 dark:text-gray-600 pointer-events-none">
                                        <HiArrowSmLeft className="w-12 h-12" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
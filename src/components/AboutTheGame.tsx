import React from "react";
// import GreyhoundVideo from "../Assets/Videos/GW_video.mp4"
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { howToBetItems } from "../data/howToBetData";

export default function AboutTheGame() {
    const [isAboutOpen, setIsAboutOpen] = React.useState(false);
    const [isHowToBetOpen, setIsHowToBetOpen] = React.useState(false);

    return (
        <div className="bg-gradient-to-b from-gw-red to-gw-purple py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-12">
                <h1 className="text-4xl font-bold text-white mb-12">About the game</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-12">
                    <video className="h-full w-full rounded-lg" controls autoPlay>
                        {/* <source src={GreyhoundVideo} type="video/mp4" /> */}
                    </video>
                </div>

                {/* How to Bet section */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                    <button
                        onClick={() => setIsHowToBetOpen(!isHowToBetOpen)}
                        className="flex items-center gap-3 text-2xl font-bold text-white hover:text-gray-200 transition-colors text-left"
                    >
                        How to play guide
                        <ChevronDownIcon
                            className={`h-8 w-8 transition-transform duration-300 ${isHowToBetOpen ? "rotate-0" : "-rotate-90"}`}
                        />
                    </button>

                    {isHowToBetOpen && (
                        <div className="animate-fadeIn text-white">
                            <div className="pb-6">
                                <p className="text-lg text-gray-300">
                                    You can choose from 6 betting markets – bet big or small, there's something for everyone:
                                </p>
                            </div>

                            <div className="space-y-8">
                                {howToBetItems.map((item) => (
                                    <div key={item.id} className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                                        <h3 className="text-2xl font-bold mb-4">{item.id}. {item.title}</h3>
                                        <p className="text-gray-300 mb-{item.bullets || item.table || item.columns ? '6' : '4'}">
                                            {item.description}
                                        </p>

                                        {/* Render bullets for item 1 */}
                                        {item.bullets && (
                                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                                                {item.bullets.map((bullet, idx) => (
                                                    <li key={idx}>{bullet}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Render table for item 2 */}
                                        {item.table && (
                                            <div className="overflow-x-auto mt-4">
                                                <table className="w-full border-collapse">
                                                    <tbody className="text-white/90">
                                                        {item.table.map((row, idx) => (
                                                            <tr key={idx} className={idx < item.table.length - 1 ? "border-b border-white/20" : ""}>
                                                                <td className="py-3 px-4 font-bold bg-white/20">{row.name}</td>
                                                                <td className="py-3 px-4 bg-white/5 hover:bg-white/10 transition-colors">{row.desc}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}

                                        {/* Render columns for items 3 & 4 */}
                                        {item.columns && (
                                            <div className="overflow-x-auto mt-4">
                                                <table className="w-full border-collapse">
                                                    <thead>
                                                        <tr className="bg-white/20">
                                                            {item.columns.map((col, idx) => (
                                                                <th key={idx} className={`py-3 px-4 text-left font-bold ${idx < item.columns.length - 1 ? 'border-r border-white/30' : ''}`}>
                                                                    {col.header}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-white/90">
                                                        <tr>
                                                            {item.columns.map((col, idx) => (
                                                                <td key={idx} className={`py-4 px-4 bg-white/5 hover:bg-white/10 transition-colors align-top ${idx < item.columns.length - 1 ? 'border-r border-white/30' : ''}`}>
                                                                    {col.content}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}

                                        {/* Render definition and howItWorks for items 5 & 6 */}
                                        {item.definition && (
                                            <div className="mb-6">
                                                <h4 className="font-bold mb-3 text-lg">Definition:</h4>
                                                <ul className="space-y-2 text-gray-300 ml-6">
                                                    {item.definition.map((def, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className="mr-2">•</span>
                                                            <span>{def}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {item.howItWorks && (
                                            <div className="mb-6">
                                                <h4 className="font-bold mb-3 text-lg">{item.id}.1. How the Game Works:</h4>
                                                <ul className="space-y-2 text-gray-300 ml-6">
                                                    {item.howItWorks.map((work, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className="mr-2">•</span>
                                                            <span dangerouslySetInnerHTML={{ __html: work.replace(/Singles, Doubles, Trebles, 4-Folds, 5-Folds/g, '<strong>$&</strong>').replace(/6-Fold Accumulators/g, '<strong>$&</strong>').replace(/longest consecutive run/g, '<strong>$&</strong>') }}></span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Render example for items 5 & 6 */}
                                        {item.example && (
                                            <div className="p-4 bg-white/10 rounded border-l-4 border-gw-red mt-4">
                                                <h4 className="font-bold mb-2 text-lg">{item.example.title}</h4>
                                                {item.example.lines.map((line, idx) => (
                                                    <p key={idx} className={`text-white/90 ${idx < item.example.lines.length - 1 ? 'mb-2' : ''}`}>{line}</p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        <a href="/form" className="bg-gradient-to-r from-grey-neutral to-grey-neutral/80 hover:from-grey-neutral/80 hover:to-grey-neutral/60 text-gw-red font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-grey-neutral/50 flex items-center justify-center space-x-2">
                            <span>Request Pricing</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="https://abeta.co.uk/gw-demo" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-full border-2 border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                            <span>Visit Demo</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

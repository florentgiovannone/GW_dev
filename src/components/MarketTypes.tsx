
import One from "../Assets/Images/One.png"
import Two from "../Assets/Images/Two.png"
import Three from "../Assets/Images/Three.png"
import Four from "../Assets/Images/Four.png"
import Five from "../Assets/Images/Five.png"
import Six from "../Assets/Images/Six.png"

export default function MarketTypes() {
    const marketTypes = [
        {
            id: 1,
            name: "Catch A Match",
            description: "Punters try to spot repeating trap patterns across the six races. If the same trap number appears again in the right combination, they win. Why it works: easy to follow, exciting pattern reveals, strong number-player appeal."
        },
        {
            id: 2,
            name: "Trap Winning Most",
            description: "Punters pick whether low (1–2), mid (3–4) or high (5–6) traps will produce the most wins across all six races. Why it works: very simple, clear groupings, stays exciting across the full event."
        },
        {
            id: 3,
            name: "Winning Traps",
            description: "Punters predict the combined total of all six winning traps. Every race contributes to the final number, keeping interest high from start to finish. Why it works: number-based, fast to understand, continuous involvement."
        },
        {
            id: 4,
            name: "Play Your Dogs Right",
            description: "A higher-or-lower style game based on trap outcomes across the races. Punters follow each result and see if the next trap continues the pattern. Why it works: familiar concept, fun prediction style, easy for any customer."
        },
        {
            id: 5,
            name: "Traditional Parplays & Doubles",
            description: "A classic accumulator-style selection. Punters follow their picks across all six races with the chance to land singles, doubles, trebles or a full six-race sweep. Why it works: familiar betting format, big win potential, great for regular players."
        },
        {
            id: 6,
            name: "Super Match",
            description: "Predict the exact total of all six winning trap numbers. A simple, fast number game that keeps punters watching every result. Why it works: straightforward, engaging, contributes excitement race by race."
        }
    ];

    return (
        <div className="bg-white py-16 px-4 md:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-2xl font-bold text-gw-purple mb-12 lg:text-4xl">
                    6 DIFFERENT <span className="text-gw-red">MARKET TYPES</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {marketTypes.map((market) => (
                        <div
                            key={market.id}
                            className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 hover:border-gw-purple/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={market.id === 1 ? One : market.id === 2 ? Two : market.id === 3 ? Three : market.id === 4 ? Four : market.id === 5 ? Five : Six}
                                    alt={`Market ${market.id}`}
                                    className="w-10 h-10 mr-3 flex-shrink-0"
                                />
                                <h2 className="text-xl font-bold text-gw-purple">
                                    {market.name}
                                </h2>
                            </div>
                            <p className="text-gw-purple/80 leading-relaxed text-sm">
                                {market.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="text-2xl font-bold text-gw-purple mt-12 mb-12 lg:text-4xl">
                Watch our demo video            </h1>
            <div className="flex justify-center">
                <video src="https://old.abeta.co.uk/resources/GW_video.mp4" autoPlay controls className="w-full max-w-2xl rounded-lg shadow-lg" />
            </div>
        </div>
    )
}
import Logo from "../Assets/Images/Greyhound-Winners-White.png"
import Greyhound from "../Assets/Videos/Greyhound.png"
import GreyhoundGif from "../Assets/Videos/GreyhoundGif.gif"
import One from "../Assets/Images/One.png"
import Two from "../Assets/Images/Two.png"
import Three from "../Assets/Images/Three.png"
import Four from "../Assets/Images/Four.png"
import Five from "../Assets/Images/Five.png"
import Six from "../Assets/Images/Six.png"

export default function AboutFeatured() {
    return (
        <>
            <div className="bg-gradient-to-b from-gw-purple to-black flex flex-col justify-center items-center pt-14 min-h-220 md:min-h-15 lg:min-h-130 px-4 md:px-8 lg:px-12" >
                <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-8">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl font-bold text-white lg:text-4xl md:mb-8">
                            ABOUT GREYHOUND WINNERS                </h1>
                        <div>
                            <p className="text-md text-white/90 leading-relaxed max-w-2xl mb-6 lg:text-lg">
                                Featuring authentic historical race footage and fully configurable betting markets, GREYHOUND WINNERS gives operators an unique, innovative, fast-paced, automated virtual racing product tailored to engage every type of customer.                    </p>
                        </div>
                        <div>
                            <p className="text-md text-white/90 leading-relaxed max-w-2xl mb-6 lg:text-lg">
                                With six different markets available in every event, GREYHOUND WINNERS offers something for everyone, from casual customers to regular greyhound followers. The mix of simple sequences, number totals, accumulators and pattern games keeps interest high and creates a steady stream of winning moments.                </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl font-bold text-white mb-6 lg:text-4xl">
                            FEATURES
                        </h1>
                        <div>
                            <div className="flex flex-row items-center gap-4 mb-6">
                                <img src={One} alt="Greyhound" className="w-6 h-6 flex-shrink-0 lg:w-10 lg:h-10" />
                                <p className="text-md text-white/90 leading-relaxed max-w-2xl lg:text-lg">
                                    Six easy-to-play markets, including traditional betting.                   </p>
                            </div>
                            <div className="flex flex-row items-center gap-4 mb-6">
                                <img src={Two} alt="Greyhound" className="w-6 h-6 flex-shrink-0 lg:w-10 lg:h-10" />
                                <p className="text-md text-white/90 leading-relaxed max-w-2xl lg:text-lg">
                                    Powered by real footage and licensed data.
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4 mb-6">
                                <img src={Three} alt="Greyhound" className="w-6 h-6 flex-shrink-0 lg:w-10 lg:h-10" />
                                <p className="text-md text-white/90 leading-relaxed max-w-2xl lg:text-lg">
                                    Schedule new events every 4 to 5 minutes.
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4 mb-6">
                                <img src={Four} alt="Greyhound" className="w-6 h-6 flex-shrink-0 lg:w-10 lg:h-10" />
                                <p className="text-md text-white/90 leading-relaxed max-w-2xl lg:text-lg">
                                    Suitable for single shops and multi-shop estates.
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4 mb-8">
                                <img src={Five} alt="Greyhound" className="w-6 h-6 flex-shrink-0 lg:w-10 lg:h-10" />
                                <p className="text-md text-white/90 leading-relaxed max-w-2xl lg:text-lg">
                                    Reliable all-day operation.
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-4 mb-8">
                                <img src={Six} alt="Greyhound" className="w-6 h-6 flex-shrink-0 lg:w-10 lg:h-10" />
                                <p className="text-md text-white/90 leading-relaxed max-w-2xl lg:text-lg">
                                    Available in multiple language options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4 mb-8 justify-center w-full pt-4">
                    <a href="/form" className="bg-gradient-to-r from-gw-red to-red-tint-60 hover:from-red-tint-60 hover:to-gw-red text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gw-red/50">
                        <span className="flex items-center space-x-2">
                            <span>Request Demo</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}
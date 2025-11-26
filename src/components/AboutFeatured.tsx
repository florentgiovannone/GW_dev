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
            <div className="flex flex-col justify-center items-center mx-auto pt-14 max-w-xl w-full min-h-220 px-4 md:max-w-4xl md:min-h-15 md:flex-row md:px-8  md:flex-wrap md:items-start md:columns-2 lg:max-w-full lg:min-h-130  lg:px-12" >
                <div className="w-full md:w-1/2 md:px-4">
                    <h1 className="text-2xl font-bold text-white lg:text-4xl md:mb-8">
                        ABOUT GREYHOUND WINNERS                </h1>
                    <div>
                        <p className="text-md text-white/90 leading-relaxed max-w-2xl mb-6 lg:text-lg">
                            Featuring authentic historical race footage and fully configurable betting markets, GREYHOUND WINNERS gives operators a fast-paced, automated virtual racing product tailored to engage every type of customer.                    </p>
                    </div>
                    <div>
                        <p className="text-md text-white/90 leading-relaxed max-w-2xl mb-6 lg:text-lg">
                            With six different markets available in every event, GREYHOUND WINNERS offers something for everyone, from casual customers to regular greyhound followers. The mix of simple sequences, number totals, accumulators and pattern games keeps interest high and creates a steady stream of winning moments.                </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:px-4">
                    <h1 className="text-2xl font-bold text-white mb-6 lg:text-4xl">
                        FEATURES               </h1>
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
                                A new betting event in less than 4 minutes.
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-4 mb-6">
                            <img src={Four} alt="Greyhound" className="w-6 h-6 flex-shrink-0 lg:w-10 lg:h-10" />
                            <p className="text-md text-white/90 leading-relaxed max-w-2xl lg:text-lg">
                                Automatic reset into the next event.
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-4 mb-8">
                            <img src={Five} alt="Greyhound" className="w-6 h-6 flex-shrink-0 lg:w-10 lg:h-10" />
                            <p className="text-md text-white/90 leading-relaxed max-w-2xl lg:text-lg">
                                Suitable for single shops and multi-shop estates.
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-4 mb-8">
                            <img src={Six} alt="Greyhound" className="w-6 h-6 flex-shrink-0 lg:w-10 lg:h-10" />
                            <p className="text-md text-white/90 leading-relaxed max-w-2xl lg:text-lg">
                                Reliable all-day operation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4 mb-8 justify-center w-full md:w-full pt-4">
                    <a href="https://abeta.co.uk/gw-demo" target="_blank" rel="noopener noreferrer" className="bg-grey-neutral text-white px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-md hover:shadow-white/10 hover:bg-white/10">
                        Request Demo
                    </a>
                </div>
            </div>
        </>
    )
}
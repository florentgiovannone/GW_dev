import Logo from "../Assets/Images/Greyhound-Winners-White.png"
import Greyhound from "../Assets/Videos/Greyhound.png"
import GreyhoundGif from "../Assets/Videos/GreyhoundGif.gif"
export default function Hero() {
    return (
        <div className="relative flex flex-col justify-center items-center lg:flex-row min-h-screen overflow-hidden bg-gradient-to-br from-gw-red via-gw-red to-gw-purple" >
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-40 right-20 w-2 h-2 bg-grey-neutral rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-60 left-1/3 w-1 h-1 bg-grey-neutral rounded-full animate-pulse delay-1000"></div>
            </div>

            <div className="relative bg-gw-red px-6 pt-12 pb-8 md:px-12 lg:w-2/4 lg:px-16 lg:py-20 z-10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gw-red/80 via-gw-red to-gw-purple/80"></div>

                <div className="relative z-10">
                    <img src={Logo} alt="Greyhound Winners" className="hidden lg:block mx-auto mb-8 transform hover:scale-110 transition-all duration-500 drop-shadow-2xl" />

                    <div className="text-center mb-8">
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-4">
                            <span className="block bg-gradient-to-r from-white via-grey-neutral to-white bg-clip-text text-transparent">
                                Boost your
                            </span>
                            <span className="block text-white/95">
                                betting game
                            </span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
                            a new revenue-driving game as portfolio
                        </p>
                    </div>

                    {/* Call to action buttons - Desktop only */}
                    <div className="hidden lg:flex flex-col sm:flex-row justify-center gap-4 mt-8">
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

            <div className="relative lg:w-2/4 p-4 lg:p-8">
                <div className="relative group">
                    <img src={Greyhound} alt="Greyhound Winners Racing"
                        className="w-full h-auto max-h-screen object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500" />

                    {/* Image overlay with stats */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>

                    <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-white font-semibold">Live Racing</span>
                            </div>
                            <div className="text-right">
                                <div className="text-white font-bold">New Race</div>
                                <div className="text-white/80 text-sm">Every 3-5min</div>
                            </div>
                        </div>
                    </div>

                    {/* Floating achievement badge */}
                    <div className="absolute top-6 right-6 bg-grey-neutral text-gw-red px-4 py-2 rounded-full font-bold text-sm shadow-xl">
                        #1 virtual greyhounds racing platform
                    </div>
                </div>
            </div>

            {/* Call to action buttons - Mobile only (at bottom) */}
            <div className="lg:hidden w-full px-6 pb-8 relative z-10">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
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
    )
}
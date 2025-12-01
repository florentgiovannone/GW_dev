import Logo from "../Assets/Images/Greyhound-Winners-White.png"
import Greyhound from "../Assets/Images/Greyhound.png"
import GreyhoundGif from "../Assets/Videos/GreyhoundGif.gif"
import BackgroundImage from "../Assets/Images/gw-background.jpg"

export default function Hero() {
    return (
        <div className="bg-gradient-to-b from-gw-purple to-black h-210 md:h-130 lg:h-150 relative overflow-hidden">
            <img
                src={BackgroundImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-bottom"
                style={{
                    imageRendering: 'auto',
                    minWidth: '100%',
                    minHeight: '100%'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gw-purple/80 to-black/80 z-10"></div>
            <div className="relative z-20">
                <div className=" flex flex-col justify-center items-center  md:flex-row md:columns-2 m-8" >
                    <div className=" w-full md:w-1/2 max-w-lg md:max-w-lg">
                        <img src={Greyhound} alt="Greyhound Winners Racing"
                            className="w-full h-auto object-contain max-w-full"
                        />

                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl font-bold text-white" style={{ marginBottom: '2rem' }}>
                            A new revenue-driving game as part of your portfolio
                        </h1>
                        <div>
                            <p className="text-md text-white/90 leading-relaxed max-w-2xl" style={{ marginBottom: '2rem' }}>
                                Featuring authentic historical race footage and fully configurable betting markets, <span className="font-bold">GREYHOUND WINNERS</span> gives operators <span className="font-bold">an unique, innovative, fast-paced, automated virtual racing product</span> tailored to engage every type of customer.                    </p>
                        </div>
                        <div className=" mt-4">
                            <h3 className="text-2xl text-white">for Betting Operators</h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-8">
                    <a href="/form" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-gw-red to-red-tint-60 hover:from-red-tint-60 hover:to-gw-red text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gw-red/50">
                        <span className="flex items-center space-x-2">
                            <span>Request Demo</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
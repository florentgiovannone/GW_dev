import Logo from "../Assets/Images/Greyhound-Winners-White.png"
import Greyhound from "../Assets/Videos/Greyhound.png"
import GreyhoundGif from "../Assets/Videos/GreyhoundGif.gif"
export default function Hero() {
    return (
        <div className=" flex flex-col justify-center items-center  overflow-hidden min-h-200 md:min-h-90 lg:min-h-130 md:flex-row md:columns-2 xl:px-32" >
            <div className="m-8 w-fit">
                <img src={Logo} alt="Greyhound Winners Racing"
                    className="h-auto object-contain" />
            </div>
            <div className="m-8 md:w-1/2">
                <h1 className="text-4xl font-bold text-white" style={{ marginBottom: '2rem' }}>
                    a new revenue-driving game as portfolio
                </h1>
                <div>
                    <p className="text-lg text-white/90 leading-relaxed max-w-2xl" style={{ marginBottom: '2rem' }}>
                        Featuring authentic historical race footage and fully configurable betting markets, <span className="font-bold">GREYHOUND WINNERS</span> gives operators a <span className="font-bold">fast-paced, automated virtual racing product</span> tailored to engage every type of customer.                    </p>
                </div>
            </div>
        </div>
    )
}
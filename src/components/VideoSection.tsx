import { useState } from "react";
import Logo from "../Assets/Images/Greyhound-Winners-White.png"
import Greyhound from "../Assets/Videos/Greyhound.png"
import GreyhoundGif from "../Assets/Videos/GreyhoundGif.gif"
import PlayIcon from "../Assets/Images/Artboard 1.png"
import DemoVideo from "../Assets/Images/Demo.png"

export default function VideoSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        if (isModalOpen) {
            setIsModalOpen(false);
        } else {
            setIsModalOpen(true);
        }
    }
    return (
        <>
            <div className="relative w-full h-60 bg-black md:h-110 lg:h-160">
                <img src={DemoVideo} alt="Demo Video" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.7) 100%)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center flex flex-col items-center">
                        <a onClick={toggleModal} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            <img src={PlayIcon} alt="Play Icon" className="w-20 h-20 mx-auto mb-4 transition-transform duration-300 hover:translate-y-2" />
                        </a>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Watch it live</h2>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={toggleModal}
                >
                    <div
                        className="relative flex flex-col items-center justify-center max-w-4xl w-full px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={toggleModal} className="bg-gw-red absolute -top-5 right-0 text-white px-4 py-2 rounded-full h-10 w-10 flex items-center justify-center font-bold">X</button>
                        <iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?group.id=ba2019d1-c65b-4630-b984-7f90e16aa366&options.adaption.rule=deviationOfMean2&startIndex=0&playback.latencyControlMode=balancedadaptive" className="w-full h-auto aspect-video rounded-lg" />
                    </div>
                </div>
            )}
        </>
    )
}
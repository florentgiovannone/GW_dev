import { useState } from "react"
import Logo from "../Assets/Images/Greyhound-Winners-White.png"

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="sticky top-0 z-50 px-4 py-2 backdrop-blur-[20px] bg-white/10 border-b border-white/20 shadow-lg">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-16">
                    {/* Spacer for mobile hamburger alignment */}
                    <div className="lg:hidden w-6"></div>

                    {/* Centered Navigation Group */}
                    <div className="hidden lg:flex items-center justify-center flex-1">
                        <div className="flex items-center space-x-8">
                            {/* Left Navigation Links */}
                            {/* <a href="#about" className="text-white hover:text-grey-neutral transition-colors duration-300 font-medium">
                                About Us
                            </a> */}
                            {/* <a href="/about-the-game" className="text-white hover:text-grey-neutral transition-colors duration-300 font-medium">
                                About the game
                            </a> */}

                            {/* Logo - Center */}
                            <a href="/">
                                <div className="mx-12">
                                    <img src={Logo} alt="Greyhound Winners" className="h-16 object-contain rounded-lg p-3 bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl transform hover:scale-110 transition-all duration-300 hover:shadow-2xl" />
                                </div>
                            </a>
                            {/* Right Navigation Links */}
                            {/* <a href="#integrations" className="text-white hover:text-grey-neutral transition-colors duration-300 font-medium">
                                Integrations
                            </a> */}
                            {/* <a href="/form" className="text-white hover:text-grey-neutral transition-colors duration-300 font-medium">
                                Support
                            </a> */}
                        </div>
                    </div>

                    {/* Mobile Logo - Center */}
                    <a href="/">
                        <div className="lg:hidden flex-1 flex justify-center">
                            <img src={Logo} alt="Greyhound Winners" className="h-16 object-contain rounded-lg p-3 bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl transform hover:scale-110 transition-all duration-300 hover:shadow-2xl" />
                        </div>
                    </a>
                    {/* Mobile Hamburger Menu Button */}
                    <div className="lg:hidden">
                        {/* <button
                            onClick={toggleMenu}
                            className="text-white hover:text-grey-neutral focus:outline-none focus:text-grey-neutral transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button> */}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="py-4 space-y-4 bg-white/5 backdrop-blur-sm rounded-lg mt-2 border border-white/10">
                        {/* <a
                            href="/about-the-game"
                            className="block px-6 py-2 text-white hover:text-grey-neutral hover:bg-white/10 transition-all duration-300 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About the game
                        </a> */}
                        {/* <a
                            href="/form"
                            className="block px-6 py-2 text-white hover:text-grey-neutral hover:bg-white/10 transition-all duration-300 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Support
                        </a> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}
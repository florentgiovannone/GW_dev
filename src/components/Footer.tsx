import Logo from "../Assets/Images/Greyhound-Winners-White.png"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-black to-gw-purple text-white py-16">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col items-center text-center mb-12">
                    {/* Logo */}
                    <a href="https://greyhound-winners.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Logo} alt="Greyhound Winners" className="h-16 mb-6" />
                    </a>

                    {/* Text */}
                    <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-md">
                        The leading greyhound racing platform providing innovative betting solutions
                        and seamless integration options for operators worldwide.
                    </p>

                    {/* Email */}
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <svg className="w-5 h-5 text-grey-neutral" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <a href="mailto:info@greyhoundwinners.com" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
                            info@greyhoundwinners.com
                        </a>
                    </div>

                    {/* Website */}
                    <div className="flex items-center justify-center space-x-3">
                        <svg className="w-5 h-5 text-grey-neutral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <a href="https://greyhound-winners.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
                            greyhound-winners.com
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/20 pt-8">
                    <div className="text-center">
                        <div className="text-white/60 text-sm">
                            © 2025 Greyhound Winners. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

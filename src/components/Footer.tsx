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
                    <div className="flex items-center justify-center space-x-3 mb-8">
                        <svg className="w-5 h-5 text-grey-neutral" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.797 3.556h3.998c-.124-1.414-.408-2.649-.797-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.92 7c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9H13.92zM10 18a8 8 0 01-5.917-2.846A6.003 6.003 0 0113.92 11H6.08a6.003 6.003 0 019.837 4.154A8 8 0 0110 18z" clipRule="evenodd" />
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
                            © 2024 Greyhound Winners. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

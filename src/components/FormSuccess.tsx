import { Link } from "react-router-dom";

export default function FormSuccess() {
    return (
        <div className="bg-gradient-to-b from-gw-purple to-black min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl text-center">
                    {/* Success Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-green-500/20 rounded-full p-4 border-4 border-green-500/50">
                            <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Success Message */}
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Message Sent Successfully!
                    </h1>

                    <p className="text-lg text-white/80 mb-8 leading-relaxed">
                        Thank you for contacting Greyhound Winners. We have received your message and will get back to you as soon as possible.
                    </p>

                    {/* Additional Info */}
                    <div className="bg-white/5 rounded-lg p-6 mb-8 border border-white/10">
                        <p className="text-white/70 text-sm mb-4">
                            What happens next?
                        </p>
                        <ul className="text-white/80 text-sm space-y-2 text-left max-w-md mx-auto">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-gw-red mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>We'll review your inquiry within 24 hours</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-gw-red mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Our team will respond via email</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-gw-red mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>For urgent matters, call us at +44 1420 549988</span>
                            </li>
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="bg-white border-[5px] border-gw-red text-gw-red hover:bg-gw-red hover:text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gw-red/50 inline-flex items-center justify-center space-x-2"
                        >
                            <span>Return to Home</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>

                        <Link
                            to="/form"
                            className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                        >
                            <span>Send Another Message</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


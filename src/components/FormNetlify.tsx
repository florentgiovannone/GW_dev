import React from 'react';
export default function Form() {

    return (
        <div className="bg-gradient-to-b from-gw-purple to-black py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Contact Information Section */}
                    <div className="lg:col-span-4">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8 capitalize">Get in Touch</h1>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gw-red p-3 rounded-full">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Phone</p>
                                        <p className="text-white/70">+44 1420 549988</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gw-red p-3 rounded-full">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Email</p>
                                        <p className="text-white/70">info@greyhoundwinners.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:col-span-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>

                            <form name="contact" netlify>
                                <p>
                                    <label>Name <input type="text" name="name" /></label>
                                </p>
                                <p>
                                    <label>Email <input type="email" name="email" /></label>
                                </p>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

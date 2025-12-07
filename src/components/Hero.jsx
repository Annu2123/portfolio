import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-black pt-16">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary-400 font-medium text-xl mb-4 tracking-wide">
                        FULL STACK DEVELOPER
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Building Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-500">
                            Experiences
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        I craft modern, high-performance web applications using React and Node.js.
                        Turning ideas into reality with clean code and stunning designs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary-600/25"
                        >
                            View Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-gray-700 hover:border-primary-500 text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6">
                        {[Github, Linkedin, Mail].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

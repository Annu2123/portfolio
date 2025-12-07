import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                        <div className="relative aspect-square rounded-2xl bg-gray-900 overflow-hidden border border-gray-800">
                            {/* Placeholder for Profile Image */}
                            <div className="w-full h-full flex items-center justify-center text-gray-600">
                                <span className="text-lg">Profile Image Placeholder</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-primary-400">Me</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            I am a passionate Full Stack Developer with experience in building robust and scalable web applications.
                            My journey in web development started with a curiosity for how things work on the internet,
                            which has now evolved into a career where I solve complex problems using modern technologies.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Currently working as a Frontend Developer, I specialize in React and Node.js.
                            I love creating seamless user experiences and efficient backend systems.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                <h3 className="text-2xl font-bold text-primary-400 mb-1">1+</h3>
                                <p className="text-gray-500 text-sm">Years Experience</p>
                            </div>
                            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                                <h3 className="text-2xl font-bold text-primary-400 mb-1">10+</h3>
                                <p className="text-gray-500 text-sm">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

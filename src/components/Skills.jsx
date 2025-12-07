import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React', 'React Native', 'JavaScript', 'Next JS', 'Tailwind CSS', 'Redux', 'Tanstack Query'],
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
        },
        {
            title: 'Tools & DevOps',
            skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Vite', 'Postman'],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-primary-400">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The technologies and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-primary-500/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center text-primary-100">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-gray-300 text-sm hover:text-primary-400 hover:border-primary-500/50 transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

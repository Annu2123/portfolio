import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Frontend Developer',
            company: 'Current Company',
            period: '2023 - Present',
            description: 'Developing and maintaining responsive web applications using React and Tailwind CSS. Collaborating with cross-functional teams to deliver high-quality features.',
        },
        {
            id: 2,
            role: 'Full Stack Developer Intern',
            company: 'Previous Company',
            period: '2022 - 2023',
            description: 'Assisted in building RESTful APIs using Node.js and Express. Implemented UI components and integrated them with backend services.',
        },
    ];

    return (
        <section id="experience" className="py-20 bg-gray-900/50 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-primary-400">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A timeline of my professional journey and the roles I've held.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-gray-800 last:border-l-0"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-gray-900" />

                            <div className="bg-black/40 p-6 rounded-xl border border-gray-800 hover:border-primary-500/50 transition-colors duration-300">
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 mb-4">
                                    <Briefcase size={16} />
                                    <span>{exp.company}</span>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

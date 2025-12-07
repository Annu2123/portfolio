import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product search, and payment integration.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'https://via.placeholder.com/600x400',
            github: '#',
            demo: '#',
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'A real-time chat application using Socket.io and React. Supports private messaging, group chats, and file sharing.',
            tags: ['React', 'Socket.io', 'Express', 'Tailwind'],
            image: 'https://via.placeholder.com/600x400',
            github: '#',
            demo: '#',
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'A task management dashboard with drag-and-drop functionality. Built to help teams organize their workflow efficiently.',
            tags: ['React', 'Redux', 'Firebase', 'DnD'],
            image: 'https://via.placeholder.com/600x400',
            github: '#',
            demo: '#',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900/50 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-primary-400">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of projects that showcase my skills and passion for development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-black rounded-xl overflow-hidden border border-gray-800 group hover:border-primary-500/50 transition-all duration-300"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-gray-900 text-xs text-gray-300 rounded border border-gray-800"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

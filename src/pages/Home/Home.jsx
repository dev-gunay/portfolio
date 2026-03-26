import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Modal from "../../components/Modal/Modal";
import me from "../../assets/images/me.jpeg";

function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Project One", description: "React App mit API" },
    { title: "Project Two", description: "Fullstack Projekt" },
  ];

  return (
    <div className="pt-32 max-w-6xl mx-auto px-4">

      {/* HERO */}
      <section className="mb-32 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* TEXT */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-6 leading-tight"
          >
            Hi, ich bin{" "}
            <span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
              Rasit
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 max-w-xl text-lg mb-6"
          >
            Ich entwickle moderne Web Apps mit Fokus auf Performance,
            Design und sauberem Code.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-white text-black rounded-xl font-medium"
          >
            Projekte ansehen
          </motion.button>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={me}
              alt="Rasit"
              className="relative w-72 h-72 object-cover rounded-full border border-gray-700 shadow-2xl"
            />
          </div>
        </motion.div>

      </section>

      {/* PROJECTS */}
      <section>
        <h2 className="text-3xl font-semibold mb-10">Projekte</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}

export default Home;
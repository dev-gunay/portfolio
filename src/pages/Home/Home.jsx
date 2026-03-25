import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Modal from "../../components/Modal/Modal";

function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Project One",
      description: "Cooles Projekt mit React",
    },
    {
      title: "Project Two",
      description: "Noch ein Projekt",
    },
  ];

  return (
    <div className="pt-24 max-w-6xl mx-auto px-4">

      {/* HERO */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4">
          Hi, ich bin Rasit 👋
        </h1>
        <p className="text-gray-400 max-w-xl">
          Ich baue moderne Web Apps mit React und Fokus auf Design und UX.
        </p>
      </section>

      {/* PROJECTS */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Projekte</h2>

        <div className="grid md:grid-cols-2 gap-6">
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
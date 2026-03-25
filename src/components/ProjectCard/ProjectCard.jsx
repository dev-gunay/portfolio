function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900 p-6 rounded-2xl cursor-pointer hover:scale-105 transition duration-300"
    >
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>
    </div>
  );
}

export default ProjectCard;
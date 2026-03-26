import { motion } from "framer-motion";

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
  onClick={onClick}
  whileHover={{ scale: 1.05 }}
  className="group bg-gray-900 p-6 rounded-2xl cursor-pointer border border-gray-800 hover:border-gray-500 transition relative overflow-hidden"
>

  {/* Hover Glow */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>

  <h3 className="text-xl font-bold mb-2 relative">{project.title}</h3>
  <p className="text-gray-400 relative">{project.description}</p>

</motion.div>)
}

export default ProjectCard;
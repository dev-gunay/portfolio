import { motion } from "framer-motion";

function Modal({ project, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-900 p-6 rounded-2xl max-w-2xl w-full relative border border-gray-800"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl mb-4"
        />

        <h2 className="text-2xl font-bold mb-2">
          {project.title}
        </h2>

        <p className="text-gray-400">
          {project.description}
        </p>
      </motion.div>
    </div>
  );
}

export default Modal;
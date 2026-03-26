import { motion } from "framer-motion";

function Modal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-900 p-8 rounded-2xl max-w-lg w-full relative border border-gray-800"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-400">{project.description}</p>
      </motion.div>

    </div>
  );
}

export default Modal;
function Modal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-8 rounded-2xl max-w-lg w-full relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-400">{project.description}</p>

      </div>
    </div>
  );
}

export default Modal;
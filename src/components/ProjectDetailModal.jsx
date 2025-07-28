// components/ProjectDetailModal.jsx
import Modal from './Modal';

export default function ProjectDetailModal({ project,onClose }) {
  return (
    <Modal selector="modal-root">
      <div className="fixed inset-0 z-[1000] bg-black bg-opacity-40 flex items-center justify-center">
        {/* <div className="bg-white p-4 rounded shadow-lg max-w-md">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p>{project.description}</p>
        </div> */}
         <div className="bg-white p-4 rounded shadow-lg max-w-md relative">
          <button onClick={onClose} className="absolute top-2 right-2">✕</button>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </Modal>
  );
}

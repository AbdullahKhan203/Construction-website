// components/AuthModal.jsx
import Modal from './Modal';

export default function AuthModal({ onClose }) {
  return (
    <Modal selector="auth-modal-root">
      <div className="fixed inset-0 z-[2000] bg-black bg-opacity-50 flex items-center justify-center">
        {/* <div className="bg-white p-4 rounded shadow-xl">Login / Signup Modal</div> */}
        <div className="bg-white p-4 rounded shadow-xl relative">
          <button onClick={onClose} className="absolute top-2 right-2">✕</button>
          <div>Login / Signup Modal</div>
        </div>
      </div>
    </Modal>
  );
}

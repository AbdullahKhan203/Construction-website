// components/Modal.js
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

export default function Modal({ children, selector = 'modal-root' }) {
  const [mounted, setMounted] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    const el = document.getElementById(selector);
    if (el) {
      setElement(el);
      setMounted(true);
    }
  }, [selector]);

  if (!mounted || !element) return null;

  return createPortal(
    <div className="pointer-events-auto z-[inherit]">{children}</div>,
    element
  );
}

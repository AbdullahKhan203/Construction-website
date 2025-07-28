'use client';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import React from 'react'

export default function PopupModel() {
     const [showAuthModal, setShowAuthModal] = useState(false);
  const [projectModalData, setProjectModalData] = useState(null);

  return (
     <>
      <div className="p-10">
        <button
          onClick={() => setShowAuthModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Open Auth Modal
        </button>

        <button
          onClick={() =>
            setProjectModalData({
              title: 'My Project',
              description: 'Details about this project...',
            })
          }
          className="bg-green-600 text-white px-4 py-2 rounded ml-4"
        >
          Open Project Modal
        </button>
      </div>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}

      {projectModalData && (
        <ProjectDetailModal
          project={projectModalData}
          onClose={() => setProjectModalData(null)}
        />
      )}
    </>
  )
}

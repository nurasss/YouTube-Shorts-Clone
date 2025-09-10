// src/components/CommentsModal.js
import React from "react";
import "./Video.css";

function CommentsModal({ isOpen, onClose, comments }) {
  if (!isOpen) return null;

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>
        <h3>Комментарии</h3>
        <div className="modal__comments">
          {comments.map((c, index) => (
            <div key={index} className="comment">
              <strong>{c.user}</strong>: {c.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentsModal;

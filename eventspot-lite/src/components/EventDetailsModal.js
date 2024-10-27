// src/components/EventDetailsModal.js
import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 500px;
  max-width: 100%;
  animation: slideIn 0.3s;

  @keyframes slideIn {
    from {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const EventDetailsModal = ({ event, onClose }) => (
  <ModalBackground onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <h2>{event.name}</h2>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      <img src={event.image} alt={event.name} width="100%" />
      <button onClick={onClose}>Close</button>
    </ModalContent>
  </ModalBackground>
);

export default EventDetailsModal;

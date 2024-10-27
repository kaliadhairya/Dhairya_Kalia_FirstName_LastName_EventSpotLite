// src/components/EventCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 250px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5rem 0;
  }
`;

const EventCard = ({ event, onClick }) => (
  <Card onClick={onClick}>
    <h2>{event.name}</h2>
    <p>{event.date}</p>
    <p>{event.location}</p>
  </Card>
);

export default EventCard;

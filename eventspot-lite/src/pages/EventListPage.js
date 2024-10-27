// src/pages/EventListPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import EventCard from '../components/eventCard';
import EventDetailsModal from '../components/EventDetailsModal';
import { events } from '../mockData';
import styled from 'styled-components';

const EventListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

const EventListPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const filteredEvents = events.filter((event) => 
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EventListContainer>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={handleEventClick} />
        ))}
      </EventListContainer>
      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default EventListPage;

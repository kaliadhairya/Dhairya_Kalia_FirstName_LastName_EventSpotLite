import React, { useState } from 'react';
import './styles/globalStyles.css';
import Navbar from './components/Navbar';
import EventCard from './components/eventCard';
import EventModal from './components/EventModal';
import eventsData from './data/eventsData';
import styled from 'styled-components';
import Map from './components/Map'; // Import Map component

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ marginRight: '700px' }}>
      <Navbar onSearch={setSearchTerm} />
      <MainContainer>
        <ContentWrapper>
          <MapContainer>
            <Map events={filteredEvents} />
          </MapContainer>
          <EventsContainer>
            {currentEvents.map((event) => (
              <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
            ))}
          </EventsContainer>
        </ContentWrapper>
        <Pagination>
          {[...Array(Math.ceil(filteredEvents.length / eventsPerPage)).keys()].map(number => (
            <PageNumber key={number + 1} onClick={() => paginate(number + 1)}>
              {number + 1}
            </PageNumber>
          ))}
        </Pagination>
      </MainContainer>
      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  );
};

const MainContainer = styled.div`
  margin-top: 70px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Change to row if you want map and events side by side */
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom:40px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px; /* Set a fixed height for the map */
  margin-bottom: 2rem;
  z-index: 1000;
  @media (max-width: 768px) {
    height: 300px; /* Adjust height for smaller screens */
  }
`;

const EventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const PageNumber = styled.div`
  margin: 0 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export default App;

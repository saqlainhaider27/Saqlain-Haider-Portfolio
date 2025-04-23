import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/park-it-up.png';

const ParkItUp = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-details">
          <img src={logo} alt="Park It Up" className="card-image" />

          <p className="text-title">Park It Up</p>
        </div>
        <a
          href="https://gamelabs-studios.itch.io/park-it-up"
          target="_blank"
          rel="noopener noreferrer"
          className="card-button"
        >
          More info
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .card {
  width: 90%;
  max-width: 320px;
  aspect-ratio: 1; /* Ensures the card is always square */
  border-radius: 20px;
  background: #121212;
  position: relative;
  padding: 1.2rem;
  border: 2px solid #2ecc71;
  transition: 0.5s ease-out;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  }

  .card-details {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6em;
  }

  .card-image {
  width: 70%;
  max-width: 230px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  }

  .card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(90deg, #27ae60, #2ecc71);
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  text-align: center;
  text-decoration: none;
  transition: 0.3s ease-out;
  }

  .text-body {
  color: #b2ffb2;
  font-size: 0.85rem;
  text-align: center;
  }

  .text-title {
  font-size: 1.2em;
  font-weight: bold;
  color: #2ecc71;
  text-align: center;
  }

  .card:hover {
  border-color: #2ecc71;
  box-shadow: 0 4px 18px 0 rgba(46, 204, 113, 0.4);
  }

  .card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
  }

  @media (max-width: 768px) {
  .card {
    padding: 1rem;
  }

  .card-image {
    width: 80%;
  }

  .card-button {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
  }

  @media (max-width: 480px) {
  .card {
    padding: 0.8rem;
  }

  .card-image {
    width: 90%;
  }

  .card-button {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
  }
`;

export default ParkItUp;

import React, { useState } from "react";
import Card from "../../components/Card/Card";
import cardsData from "../../data/cards.json";
import "./Home.css";



const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cardsData.filter(card =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <h2>Card Collection</h2>

      <input
        type="text"
        placeholder="Search card by name..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <img 
  src="/images/mangagame.png" 
  alt="Logo"
  style={{ 
    width: "250px", 
    display: "block", 
    margin: "0 auto 20px" 
  }}
/>
      <div className="cards-container">
        {filteredCards.map(card => (
          <Card
            key={card.id}
            name={card.name}
            type={card.type}
            effect={card.effect}
            attack={card.attack}
            defense={card.defense}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};



export default Home;

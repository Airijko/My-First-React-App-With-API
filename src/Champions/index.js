import React, { useState, useEffect } from "react";
import "./styles.scss";

export default function ChampionList() {
  const [champions, setChampions] = useState([]);
  const iconURL = 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/';
  const championWiki = 'https://www.leagueoflegends.com/en-us/champions/';

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json")
      .then((response) => response.json())
      .then((data) => {
        setChampions(Object.values(data.data));
      })
      .catch((error) => {
        console.error("Error fetching champion data:", error);
      });
  }, []);

  return (
    <div className="container-fluid champions">
      <h1>Champion List</h1>
      <div className="container-grid">
        {champions.map((champion) => {
          const champIcon = iconURL + champion.image.full;
          const iconHREF = championWiki + champion.name;
          return (
            <div key={champion.id}>
              <h2>{champion.name}</h2>
              <a href={iconHREF}>
                <img src={champIcon} alt={champion.name}/>
              </a>
              <p>{champion.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}


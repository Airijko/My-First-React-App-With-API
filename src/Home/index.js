import React, { useState } from "react";
import "./styles.scss";
import { getPlayerData } from "../Backend/riotAPI.js";

export default function LoLSearch() {
  const [searchProfile, setSearchProfile] = useState("");
  const [playerData, setPlayerData] = useState({});
  const [searchSuccess, setSearchSuccess] = useState(true);

  async function playerSearch(event) {
    event.preventDefault();
    const data = await getPlayerData(searchProfile);
    if (data) {
      setPlayerData(data);
      setSearchSuccess(true);
    } else {
      setSearchSuccess(false);
      setPlayerData({});
    }
  }

  return (
      <div className="container-fluid home">
        <div className="container-lg">
          <h1>LOL PROFILE CARD SEARCH</h1>
          <form onSubmit={playerSearch}>
          <div className="input-group">
            <input
                className="form-control"
                type="search"
                placeholder="Search"
                onChange={(e) => setSearchProfile(e.target.value)}
              />
              <button
                className="btn btn-outline-light"
                type="submit"
                id="logobutton"
              >
                <img src="images/logo.png" alt="logo" id="logo" />
              </button>
            </div>
          </form>
          <div className="data">
            {searchSuccess ? (
              JSON.stringify(playerData) !== "{}" ? (
                <>
                  <h3>{playerData.name}</h3>
                  <img
                    width="150"
                    src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/profileicon/${playerData.profileIconId}.png`}
                    alt="icon"
                  />
                  <p>Summoner Level - {playerData.summonerLevel}</p>
                </>
              ) : (
                <>
                  <p>Search for a Player</p>
                </>
              )
            ) : (
              <>
                <p>No Player Data</p>
              </>
            )}
          </div>
        </div>
      </div>
  );
}

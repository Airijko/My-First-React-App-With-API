import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export async function getPlayerData(searchProfile) {
  try {
    const response = await axios.get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchProfile}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/*export async function getChampionRotationData(championRotation) {
  try {
    const response = await axios.get(`/https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}*/
